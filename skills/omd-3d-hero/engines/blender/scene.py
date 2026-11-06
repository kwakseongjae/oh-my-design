"""omd-3d-hero, Blender branch: spec.json -> poster still (Cycles) and/or loop frames (EEVEE).

    blender -b --factory-startup -P scene.py -- --spec spec.json --out <dir> [--poster] [--loop] [--fps 24] [--loop-width 1280]

Runs headless from the CLI, never through an MCP server: no live session, no arbitrary code from a model.
Coordinates in the spec are three.js world units (Y up); this script converts to Blender (Z up):
three (x, y, z) -> blender (x, -z, y). Written against Blender 5.2 (engine ids CYCLES / BLENDER_EEVEE,
view transform "Khronos PBR Neutral", Principled BSDF input "Coat Weight").
"""
import bpy, json, math, os, sys, time
from mathutils import Quaternion, Vector

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
def arg(name, default=None):
    return argv[argv.index(name) + 1] if name in argv else default
SPEC = json.load(open(arg("--spec")))
OUT = os.path.abspath(arg("--out", "."))
os.makedirs(OUT, exist_ok=True)
FPS = int(arg("--fps", "24"))
LOOP_W = int(arg("--loop-width", "1280"))
DO_POSTER = "--poster" in argv or "--loop" not in argv
DO_LOOP = "--loop" in argv


def b(v):  # three (x, y, z) -> blender (x, -z, y)
    return Vector((v[0], -v[2], v[1]))


def srgb_to_linear(c):
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def hex_rgba(h):
    return tuple(srgb_to_linear(int(h[i:i + 2], 16) / 255) for i in (1, 3, 5)) + (1.0,)


# ---------- clean slate ----------
for ob in list(bpy.data.objects):
    bpy.data.objects.remove(ob, do_unlink=True)
sc = bpy.context.scene

# ---------- materials ----------
MATS = {}
for key, m in SPEC["materials"].items():
    mat = bpy.data.materials.new(f"omd-{key}")
    mat.use_nodes = True
    # Find the node by type, not by its (localizable) name. use_nodes is deprecated for 6.0; fine in 4.2-5.x.
    bsdf = next(n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED")
    bsdf.inputs["Roughness"].default_value = m["roughness"]
    if m.get("kind") == "glass":
        # three.js tints glass by absorption: color^(thickness / attenuation distance) per linear channel.
        k = m["thickness"] / m["attenuation"]
        bsdf.inputs["Base Color"].default_value = tuple(c ** k for c in hex_rgba(m["hex"])[:3]) + (1.0,)
        bsdf.inputs["Transmission Weight"].default_value = 1.0
        bsdf.inputs["IOR"].default_value = m["ior"]
        for attr in ("use_raytrace_refraction",):  # EEVEE: refract what is behind, not just the world
            if hasattr(mat, attr):
                setattr(mat, attr, True)
    else:
        bsdf.inputs["Base Color"].default_value = hex_rgba(m["hex"])
        if "Coat Weight" in bsdf.inputs:
            bsdf.inputs["Coat Weight"].default_value = m.get("coat", 0)
    MATS[key] = mat


def assign(ob, key):
    ob.data.materials.clear()
    ob.data.materials.append(MATS[key])


# ---------- cyclorama (floor -> cove -> wall), same profile as the three.js engine ----------
cy = SPEC["cyclorama"]
prof = []  # (y_up, z_depth) in three units, from the front of the floor to the top of the wall
for i in range(13):
    prof.append((0.0, cy["floorFront"] - (cy["floorFront"] - cy["coveZ"]) * i / 12))
r = cy["coveRadius"]
for i in range(1, 17):  # quarter circle: floor at z=coveZ bending up to a wall at z=coveZ-r
    a = math.pi / 2 * i / 16
    prof.append((r - r * math.cos(a), cy["coveZ"] - r * math.sin(a)))
for i in range(1, 9):
    prof.append((r + (cy["wallTop"] - r) * i / 8, cy["coveZ"] - r))
W = cy["width"] / 2
verts, faces = [], []
for (y, z) in prof:
    verts.append(tuple(b((-W, y, z))))
    verts.append(tuple(b((W, y, z))))
for i in range(len(prof) - 1):
    a0, a1, b0, b1 = 2 * i, 2 * i + 1, 2 * i + 2, 2 * i + 3
    faces.append((a0, a1, b1, b0))
mesh = bpy.data.meshes.new("cyclorama")
mesh.from_pydata(verts, [], faces)
mesh.update()
cyc = bpy.data.objects.new("cyclorama", mesh)
sc.collection.objects.link(cyc)
for p in cyc.data.polygons:
    p.use_smooth = True
assign(cyc, "backdrop")

# ---------- objects ----------
S = SPEC["shape"]


def rounded_box(name, dims, bevel_frac):
    bpy.ops.mesh.primitive_cube_add(size=1)
    ob = bpy.context.object
    ob.name = name
    ob.scale = dims
    bpy.ops.object.transform_apply(scale=True)
    mod = ob.modifiers.new("bevel", "BEVEL")
    mod.width = max(0.005, bevel_frac * min(dims))
    mod.segments = 10
    mod.limit_method = "NONE"
    mod.use_clamp_overlap = True
    bpy.ops.object.shade_smooth()
    return ob


# The pile (spec.pile.bodies): settled poses from engines/three/pile.js, in three.js coordinates. Each shape is
# built with its long axis on Blender Z (three.js local Y), and the orientation converted by conjugating with
# the axis swap: q_blender = R q_three R^-1, R = +90 deg about X.
R = Quaternion((1, 0, 0), math.radians(90))


def make(i, o):
    s, kind = o["size"], o["shape"]
    if kind == "sphere":
        bpy.ops.mesh.primitive_uv_sphere_add(radius=s / 2, segments=64, ring_count=32)
        ob = bpy.context.object
        bpy.ops.object.shade_smooth()
    elif kind == "capsule":  # 1.6 s long, 0.62 s across
        ob = rounded_box(f"b{i}", (0.62 * s, 0.62 * s, 1.6 * s), 0.5)
    elif kind == "box":
        ob = rounded_box(f"b{i}", (s, s, s), S["bevel"])
    elif kind == "box-tall":
        ob = rounded_box(f"b{i}", (0.7 * s, 0.7 * s, 1.5 * s), S["bevel"])
    else:
        raise SystemExit(f"unknown shape {kind}")
    ob.name = f"b{i}"
    ob.rotation_mode = "QUATERNION"
    assign(ob, o["material"])
    x, y, z, w = o["quat"]
    o["_ob"], o["_q"], o["_p"] = ob, R @ Quaternion((w, x, y, z)) @ R.inverted(), o["pos"]
    o["_phase"] = (i * 0.137) % 1
    return ob


OBJS = SPEC["pile"]["bodies"]
for i, o in enumerate(OBJS):
    make(i, o)

# ---------- lights + world ----------
def area(name, L, energy_scale):
    ld = bpy.data.lights.new(name, "AREA")
    ld.size = L["size"]
    ld.energy = 900 * L["energy"] * energy_scale
    ob = bpy.data.objects.new(name, ld)
    sc.collection.objects.link(ob)
    ob.location = b(L["pos"])
    d = b(L["target"]) - ob.location
    ob.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
    return ob


area("key", SPEC["lights"]["key"], 1.0)
# The rim is a sun, like three.js's DirectionalLight: an area light this close to the wall lights it only on
# one side of its own plane and draws a hard-edged dark wedge across the upper right of the frame.
L = SPEC["lights"]["rim"]
rim_d = bpy.data.lights.new("rim", "SUN")
rim_d.energy = 3.0 * L["energy"]
rim_d.angle = math.radians(8)
rim = bpy.data.objects.new("rim", rim_d)
sc.collection.objects.link(rim)
rim.rotation_euler = (b(L["target"]) - b(L["pos"])).to_track_quat("-Z", "Y").to_euler()
world = bpy.data.worlds.new("omd-world")
sc.world = world
world.use_nodes = True
bg = next(n for n in world.node_tree.nodes if n.type == "BACKGROUND")
bg.inputs["Color"].default_value = hex_rgba(SPEC["materials"]["backdrop"]["hex"])
bg.inputs["Strength"].default_value = SPEC["lights"]["world"]

# ---------- camera ----------
cam_d = bpy.data.cameras.new("cam")
cam_d.sensor_fit = "VERTICAL"
cam_d.angle = math.radians(SPEC["camera"]["fovY"])
cam = bpy.data.objects.new("cam", cam_d)
sc.collection.objects.link(cam)
sc.camera = cam
CAM0 = b(SPEC["camera"]["pos"])
TARGET = b(SPEC["camera"]["target"])

# ---------- color management ----------
sc.view_settings.view_transform = "Khronos PBR Neutral" if SPEC.get("toneMapping") == "neutral" else "AgX"
sc.view_settings.look = "None"
sc.view_settings.exposure = math.log2(SPEC.get("exposure", 1.0))

# ---------- motion (loop video only) ----------
M = SPEC["motion"]


def pose(t):
    # The three.js branch moves by simulation; the loop video can't, so each body bobs and rocks around its
    # settled pose on one sin period (seamless), and the camera sways. t = 0 is exactly the settled pose.
    for o in OBJS:
        ph = 2 * math.pi * (t / M["period"] + o["_phase"])
        x, y, z = o["_p"]
        o["_ob"].location = b((x, y + M["bob"] * (math.sin(ph) - math.sin(2 * math.pi * o["_phase"])), z))
        rock = Quaternion((0, 0, 1), M["spin"] * (math.sin(ph) - math.sin(2 * math.pi * o["_phase"])))
        o["_ob"].rotation_quaternion = rock @ o["_q"]
    sway = M["sway"] * math.sin(2 * math.pi * t / M["period"])
    cam.location = CAM0 + Vector((sway, 0, 0))
    cam.rotation_euler = (TARGET - cam.location).to_track_quat("-Z", "Y").to_euler()


r = sc.render
r.image_settings.file_format = "PNG"
r.resolution_percentage = 100
report = {"blender": bpy.app.version_string}

if DO_POSTER:
    r.engine = "CYCLES"
    prefs = bpy.context.preferences.addons["cycles"].preferences
    try:
        prefs.compute_device_type = "METAL" if sys.platform == "darwin" else "OPTIX"
        prefs.get_devices()
        for d in prefs.devices:
            d.use = True
        sc.cycles.device = "GPU"
    except Exception:
        sc.cycles.device = "CPU"
    sc.cycles.samples = 128
    sc.cycles.use_denoising = True
    r.resolution_x, r.resolution_y = SPEC["poster"]["width"], SPEC["poster"]["height"]
    pose(0.0)
    r.filepath = os.path.join(OUT, "poster.png")
    t0 = time.time()
    bpy.ops.render.render(write_still=True)
    report["poster"] = {"engine": "CYCLES", "device": sc.cycles.device, "samples": 128, "seconds": round(time.time() - t0, 2)}

if DO_LOOP:
    r.engine = "BLENDER_EEVEE"
    sc.eevee.taa_render_samples = 32
    if hasattr(sc.eevee, "use_raytracing"):
        sc.eevee.use_raytracing = True
    r.resolution_x, r.resolution_y = LOOP_W, round(LOOP_W * 9 / 16)
    frames = int(M["period"] * FPS)
    fdir = os.path.join(OUT, "frames")
    os.makedirs(fdir, exist_ok=True)
    t0 = time.time()
    for f in range(frames):
        pose(f / FPS)
        r.filepath = os.path.join(fdir, f"{f:04d}.png")
        bpy.ops.render.render(write_still=True)
    report["loop"] = {"engine": "BLENDER_EEVEE", "frames": frames, "fps": FPS, "width": LOOP_W, "seconds": round(time.time() - t0, 2)}

json.dump(report, open(os.path.join(OUT, "blender-report.json"), "w"), indent=2)
print("OMD3D", json.dumps(report))
