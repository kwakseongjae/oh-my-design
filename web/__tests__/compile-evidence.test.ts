import { describe, expect, it } from "vitest";
import { brandChanges, candidatesMarkdown, compileControl, componentsYaml, declaredColor, describeChange, mergeControls, proofMarkdown, publishedNames, tokenCandidates } from "../scripts/compile-evidence.mjs";

// Shapes follow probe-keyboard-states.mjs states.json: controls[key] = { found, identity, rest, hover, pressed, focus }.
const identity = { tag: "a", role: null, text: "Contact Us", rect: { w: 194.8, h: 56 }, radius: "100px", padding: "0px 40px", font: "18px/700" };
const rest = { bg: "rgb(255, 255, 255)", fg: "rgb(65, 74, 255)", border: "none" };
const autoRing = { set: "self", prop: "outline", from: "none", to: "rgb(0, 95, 204) auto 1px off 1px" };
const control = (over: Record<string, unknown> = {}) => ({
  found: true, label: "cta", find: {}, identity, rest,
  hover: { measured: true, changed: [] }, pressed: { measured: true, changed: [] }, focus: { measured: true, changed: [autoRing] },
  ...over,
});
const compile = (key: string, x: Record<string, unknown>) => compileControl(mergeControls([{ controls: { [key]: x } }])[0]);

describe("compile-evidence", () => {
  it("turns a measured background change into a component with its states", () => {
    const fill = [{ set: "self", prop: "bg", from: "rgb(255, 255, 255)", to: "rgb(221, 221, 221)" }];
    const c = compile("primary-cta", control({ hover: { measured: true, changed: fill }, pressed: { measured: true, changed: fill } }));
    expect(c.emitted).toBe(true);
    expect(c.fields).toMatchObject({ type: "button", bg: "#ffffff", fg: "#414aff", radius: 100, height: "56px", font: "18px / 700", hover: "#dddddd", pressed: "#dddddd" });
    expect(c.fields.focus).toBe("no brand change"); // measured; the browser's auto ring is not the brand's
  });

  it("keeps a control whose measured states changed nothing as a component, and says so per state", () => {
    const c = compile("nav", control());
    expect(c).toMatchObject({ emitted: true, reason: null });
    expect(c.fields).toMatchObject({ hover: "no brand change", pressed: "no brand change", focus: "no brand change" });
    expect(componentsYaml([c])).not.toContain("prose only");
  });

  it("states only the states that were measured", () => {
    const off = { measured: false };
    const c = compile("nav-review", control({ hover: off, pressed: off }));
    expect(c.emitted).toBe(true);
    expect(c.fields.hover).toBeUndefined();
    expect(c.fields.pressed).toBeUndefined();
    expect(c.fields.focus).toBe("no brand change");
  });

  it("reports unmeasured as unmeasured, never as no change", () => {
    const off = { measured: false };
    expect(brandChanges(off, "hover")).toBeNull();
    expect(compile("tile", control({ hover: off, pressed: off, focus: off })).reason).toBe("every state unmeasured");
    const tile = compile("tile", control({ hover: off, pressed: off, focus: off }));
    expect(tile.emitted).toBe(false);
    expect(componentsYaml([tile])).toContain("# tile: prose only");
  });

  it("ignores browser defaults and changes that persist after blur", () => {
    const uaActive = { set: "self", prop: "fg", from: "rgb(0, 0, 238)", to: "rgb(255, 0, 0)" };
    const widened = { set: "self", prop: "size", from: "110x38", to: "276x38", alsoPersists: true };
    expect(brandChanges({ measured: true, changed: [uaActive, autoRing] }, "pressed")).toEqual([]);
    expect(brandChanges({ measured: true, changed: [widened] }, "focus")).toEqual([]);
  });

  it("does not read the browser's ring leaving a descendant as a focus style", () => {
    const ringLeft = { set: "descendant", prop: "button@0.0.0.1.outline", from: "rgb(0, 95, 204) auto 1px off 0px", to: "none" };
    expect(brandChanges({ measured: true, changed: [ringLeft] }, "focus")).toEqual([]);
    expect(compile("job-card", control({ focus: { measured: true, changed: [ringLeft] } })).fields.focus).toBe("no brand change");
  });

  it("reads ink and font from the label, and keeps translucent rest colours out of token fields", () => {
    const c = compile("nav-news", control({
      rest: { bg: "rgba(0, 0, 0, 0)", fg: "rgb(0, 0, 238)", border: "none", label: { fg: "rgba(0, 0, 0, 0.78)", font: "16px/400" } },
      hover: { measured: true, changed: [
        { set: "self", prop: "fg", from: "rgba(0, 0, 0, 0.78)", to: "rgb(0, 51, 232)" },
        { set: "label", prop: "label.fg", from: "rgba(0, 0, 0, 0.78)", to: "rgb(0, 51, 232)" },
      ] },
    }));
    expect(c.fields).toMatchObject({ font: "16px / 400", hover: "fg #0033e8" });
    expect(c.fields.fg).toBeUndefined();
    expect(c.fields.bg).toBeUndefined();
    expect(c.notes).toEqual(["fg at rest is rgba(0, 0, 0, 0.78)"]);
  });

  it("takes focus from the comparison with the after-blur rest when something persisted", () => {
    // A scroll-entry fade finishes while the control is focused: opacity 0 -> 1 stays after blur, the ink does not.
    const before = (color: string, op: number) => `::before{color:${color};op:${op}}`;
    const focus = {
      measured: true,
      changed: [{ set: "self-pseudo", prop: "before", from: before("rgb(182, 0, 129)", 0), to: before("rgb(255, 255, 255)", 1) }],
      persistsAfterBlur: [{ set: "self-pseudo", prop: "before", from: before("rgb(182, 0, 129)", 0), to: before("rgb(182, 0, 129)", 1) }],
      changedVsAfterBlur: [{ set: "self-pseudo", prop: "before", from: before("rgb(182, 0, 129)", 1), to: before("rgb(255, 255, 255)", 1) }],
    };
    expect(brandChanges(focus, "focus")).toEqual(focus.changedVsAfterBlur);
    expect(brandChanges({ ...focus, persistsAfterBlur: [] }, "focus")).toEqual(focus.changed); // nothing persisted: as measured
    expect(brandChanges(focus, "hover")).toEqual(focus.changed); // only focus has an after-blur reading
  });

  it("says what changed in a pseudo-element instead of quoting both descriptors", () => {
    const d = (color: string, op: number) => `::before{content:"a;b";bg:rgba(0, 0, 0, 0);img:none;color:${color};op:${op};tf:none;bs:none;size:16pxx22.4px}`;
    expect(describeChange({ set: "self-pseudo", prop: "before", from: d("rgb(182, 0, 129)", 1), to: d("rgb(255, 255, 255)", 1) }))
      .toBe("::before color: rgb(182, 0, 129) -> rgb(255, 255, 255)");
    expect(describeChange({ set: "self-pseudo", prop: "before", from: d("rgb(0, 0, 0)", 0), to: d("rgb(0, 0, 0)", 1) })).toBe("::before opacity: 0 -> 1");
    // a ring drawn by a pseudo-element that exists only while focused
    expect(describeChange({ set: "self-pseudo", prop: "after", from: "", to: '::after{content:"";bg:rgba(0, 0, 0, 0);img:none;color:-;op:1;tf:none;bs:rgb(13, 153, 229) 0px 0px 0px 2px;size:256pxx201.75px}' }))
      .toBe("::after appears: shadow rgb(13, 153, 229) 0px 0px 0px 2px, 256px x 201.75px");
    expect(describeChange({ set: "label-pseudo", prop: "after", from: "::after{size:0pxx2px}", to: "::after{size:63.6pxx2px}" })).toBe("label ::after size: 0px x 2px -> 63.6px x 2px");
    // an icon swap: the probe cuts the URL short, leaving a quote open
    const icon = (hash: string, tf: string) => `::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://example.com/img/head_gnb…#${hash};pos:50% 50% / contain / no-repeat;color:-;op:1;tf:${tf};bs:none;size:20pxx20px}`;
    expect(describeChange({ set: "self-pseudo", prop: "after", from: icon("b76e/74", "none"), to: icon("5ad6/77", "none") }))
      .toBe('::after image: url("https://example.com/img/head_gnb…#b76e/74 -> url("https://example.com/img/head_gnb…#5ad6/77');
    expect(describeChange({ set: "self-pseudo", prop: "after", from: icon("a/1", "matrix(1, 0, 0, 1, 0, -60)"), to: icon("a/1", "matrix(1.1, 0, 0, 1.1, 0, -60)") }))
      .toBe("::after transform: matrix(1, 0, 0, 1, 0, -60) -> matrix(1.1, 0, 0, 1.1, 0, -60)");
    expect(describeChange({ set: "self", prop: "opacity", from: "1", to: "0.75" })).toBe("self opacity: 1 -> 0.75"); // anything else: as before
  });

  it("says a change once when the control, its label and its descendants all show it", () => {
    const ink = (set: string, prop: string) => ({ set, prop, from: "rgb(0, 0, 0)", to: "rgb(255, 255, 255)" });
    const c = compile("cta", control({ hover: { measured: true, changed: [
      ink("self", "fg"), ink("label", "label.fg"), ink("descendant", "span@0.fg"), ink("descendant", "span@0.0.fg"),
      { set: "self", prop: "opacity", from: "1", to: "0.75" },
    ] } }));
    expect(c.fields.hover).toBe("fg: rgb(0, 0, 0) -> rgb(255, 255, 255) (self, label, 2 descendants); self opacity: 1 -> 0.75");
  });

  it("escapes pipes in the proof table", () => {
    const controls = mergeControls([{ controls: { nav: control({ rest: { ...rest, border: "none | none | 4px solid rgba(0, 0, 0, 0) | none" } }) } }]);
    const row = proofMarkdown(controls, controls.map(compileControl)).split("\n")[2];
    expect(row.split(/(?<!\\)\|/).length).toBe(8); // six cells, plus the empty ends
  });

  it("keeps a state an earlier run measured when a later run could not", () => {
    const fill = [{ set: "self", prop: "bg", from: "rgb(255, 255, 255)", to: "rgb(221, 221, 221)" }];
    const first = { controls: { cta: control({ hover: { measured: true, changed: fill } }) } };
    const second = { controls: { cta: control({ hover: { measured: false } }) } };
    expect(compileControl(mergeControls([first, second])[0]).fields.hover).toBe("#dddddd");
  });
});

describe("token candidates", () => {
  // Shapes follow survey.json: census.census.{bg,text,border,paragraphInk}, census.computedVars, rows.
  const survey = {
    census: {
      census: { bg: [{ color: "rgb(244, 244, 244)", count: 34 }, { color: "rgba(0, 0, 0, 0.5)", count: 99 }], text: [{ color: "rgb(30, 36, 40)", count: 456 }], border: [], paragraphInk: [] },
      computedVars: { "--brand": "#4B0082", "--ink": "rgb(30, 36, 40)", "--soft": "silver", "--glass": "#00000080", "--grad": "linear-gradient(#fff, #000)", "--hue": "hsl(0, 100%, 50%)" },
      fonts: { body: "Pretendard", h1: "Pretendard", button: "Arial" },
    },
    rows: [
      { font: "13px/700", lineHeight: "14.3px", family: "Pretendard", radius: "3px", bg: "rgba(0, 0, 0, 0)", fg: "rgb(30, 36, 40)", border: "none" },
      { font: "13px/700", lineHeight: "14.3px", family: "Pretendard", radius: "0px", bg: "rgb(255, 118, 0)", fg: "rgb(255, 255, 255)", border: "1px solid rgb(255, 118, 0)" },
      { font: "0px/400", lineHeight: "normal", family: "Pretendard", radius: "0px", bg: "rgba(0, 0, 0, 0)", fg: "rgb(30, 36, 40)", border: "none" },
    ],
  };
  const fill = [{ set: "self", prop: "bg", from: "rgb(255, 255, 255)", to: "rgb(221, 221, 221)" }];
  const controls = mergeControls([{ controls: { cta: control({ hover: { measured: true, changed: fill } }) } }]);
  const cand = tokenCandidates(survey, controls, controls.map(compileControl));
  const values = (list: { value: string }[]) => list.map((c) => c.value);

  it("lists every opaque colour once, with where it was seen, most painted first", () => {
    // #ffffff and #ff7600 are each on one row; the one a measured control also carries comes first.
    expect(values(cand.colours)).toEqual(["#1e2428", "#f4f4f4", "#ffffff", "#ff7600", "#414aff", "#dddddd"]);
    expect(cand.colours[0]).toMatchObject({ painted: { text: 456 }, interactive: 2, declared: ["--ink"] });
    expect(cand.colours.find((c) => c.value === "#dddddd")?.controls).toEqual(["cta hover"]);
    expect(cand.colours.find((c) => c.value === "#ff7600")?.interactive).toBe(1); // bg and border of one row count once
  });

  it("keeps a colour that only a custom property holds apart from the ones the page painted", () => {
    expect(cand.declaredOnly).toEqual([{ value: "#4b0082", declared: ["--brand"] }, { value: "#ff0000", declared: ["--hue"] }, { value: "#c0c0c0", declared: ["--soft"] }]);
    expect(declaredColor("#00000080")).toBeNull(); // translucent
    expect(declaredColor("linear-gradient(#fff, #000)")).toBeNull(); // not one colour
    expect(declaredColor("rebeccapurple")).toBeNull(); // outside the basic keywords: left out, not guessed
  });

  it("tallies type sizes and radii from rows and controls, skipping hidden 0px text", () => {
    expect(cand.type).toEqual([
      { size: 13, weight: 700, interactive: 2, heading: 0, paragraph: 0, controls: [], lineHeight: "14.3px", family: "Pretendard" },
      { size: 18, weight: 700, interactive: 0, heading: 0, paragraph: 0, controls: ["cta"], lineHeight: null, family: null },
    ]);
    expect(cand.radii).toEqual([{ value: "0px", interactive: 2, controls: [] }, { value: "3px", interactive: 1, controls: [] }, { value: "100px", interactive: 0, controls: ["cta"] }]);
  });

  it("names what it can: the paragraph ink, and whatever the published reference already names", () => {
    const withInk = { ...survey, census: { ...survey.census, census: { ...survey.census.census, paragraphInk: [{ color: "rgb(30, 36, 40)", count: 24 }] } } };
    const fresh = tokenCandidates(withInk, controls, controls.map(compileControl));
    expect(fresh.colours[0]).toMatchObject({ value: "#1e2428", name: "foreground", from: "rule" });
    expect(fresh.colours[1].name).toBeUndefined(); // no rule names it: the writer's

    const published = publishedNames({
      colors: { ink: "#1E2428", canvas: "#ffffff", "old-accent": "#123456", glass: "rgba(0,0,0,.5)" },
      typography: { nav: { fontSize: "13px", fontWeight: 700 }, lead: { fontSize: "40px", fontWeight: 400 } },
      rounded: { square: "0px", pill: "100px" },
    });
    const again = tokenCandidates(withInk, controls, controls.map(compileControl), published);
    expect(again.colours[0]).toMatchObject({ value: "#1e2428", name: "ink", from: "published" }); // the published name wins over the rule
    expect(again.type[0]).toMatchObject({ size: 13, weight: 700, name: "nav", from: "published" });
    expect(again.radii.map((r) => r.name)).toEqual(["square", undefined, "pill"]);
    // what the reference publishes and this capture does not hold is listed, not silently dropped
    expect(again.publishedNotMeasured).toEqual({ colours: [{ name: "old-accent", value: "#123456" }], type: [{ name: "lead", value: "40/400" }], radii: [] });
    expect(candidatesMarkdown(again)).toContain("| `#1e2428` | `ink` (published) |");
  });

  it("takes heading and paragraph sizes from the text census when the capture has one", () => {
    const text = { roles: { heading: [{ size: 32, weight: 700, chars: 15, lineHeight: "44px", family: "Pretendard" }], paragraph: [{ size: 16, weight: 400, chars: 1292, lineHeight: "24px", family: "Pretendard" }, { size: 13, weight: 700, chars: 8, lineHeight: "19.5px", family: "Pretendard" }] } };
    const withText = tokenCandidates(survey, controls, controls.map(compileControl), null, text);
    const row = (size: number, weight: number) => withText.type.find((t) => t.size === size && t.weight === weight);
    expect(row(16, 400)).toMatchObject({ paragraph: 1292, heading: 0, interactive: 0, lineHeight: "24px" });
    expect(row(32, 700)).toMatchObject({ heading: 15, lineHeight: "44px" });
    expect(row(13, 700)).toMatchObject({ interactive: 2, paragraph: 8 }); // a size the rows already had gains its paragraph count
    const md = candidatesMarkdown(withText);
    expect(md).toContain("| 16px / 400 | — | 0 | — | 1292 | 24px | Pretendard | — |");
    expect(md).not.toContain("Not captured: the size of headings");
  });

  it("is the same list for the same evidence, and says what the capture does not hold", () => {
    const again = tokenCandidates(survey, controls, controls.map(compileControl));
    expect(candidatesMarkdown(again)).toBe(candidatesMarkdown(cand));
    expect(candidatesMarkdown(cand)).toContain("Not captured: the size of headings and running text");
  });
});

describe("diff-values", () => {
  const ctl = (bg: string, hover: unknown) => ({ identity: { tag: "a", h: 56 }, rest: { bg }, states: { hover, pressed: [], focus: [] } });
  it("reports a changed value and leaves agreeing fields alone", async () => {
    const { diffValues } = await import("../scripts/diff-values.mjs");
    const d = diffValues({ cta: ctl("rgb(255, 255, 255)", []) }, { cta: ctl("rgb(250, 250, 250)", []) });
    expect(d.changed).toEqual([{ key: "cta", field: "rest.bg", before: "rgb(255, 255, 255)", after: "rgb(250, 250, 250)" }]);
    expect(d.same).toBe(d.compared - 1);
  });
  it("does not call a state changed when one side could not measure it", async () => {
    const { diffValues } = await import("../scripts/diff-values.mjs");
    const d = diffValues({ cta: ctl("rgb(255, 255, 255)", [{ set: "self", prop: "bg", from: "a", to: "b" }]) }, { cta: ctl("rgb(255, 255, 255)", "unmeasured") });
    expect(d.changed).toEqual([]);
    expect(d.unmeasured).toEqual([{ key: "cta", state: "hover", side: "after" }]);
  });
});

describe("a control with no text", () => {
  it("gives no fg and no font for an icon-only button, and says why in notes", () => {
    const fill = { set: "self", prop: "bg", from: "rgb(35, 108, 246)", to: "rgb(32, 97, 221)" };
    const out = compile("search", control({ identity: { ...identity, tag: "button", text: "" }, rest: { ...rest, bg: "rgb(35, 108, 246)", fg: "rgb(102, 102, 102)", label: { k: "button#headerSearchBtn", fg: "rgb(102, 102, 102)", font: "13px/400" } },
      hover: { measured: true, changed: [fill] } }));
    expect(out.fields.bg).toBe("#236cf6");
    expect(out.fields.fg).toBeUndefined();
    expect(out.fields.font).toBeUndefined();
    expect(out.notes.join(" ")).toContain("paints nothing");
  });
  it("keeps fg for a button that has text", () => {
    expect(compile("cta", control({ identity: { ...identity, tag: "button", text: "Start" } })).fields.fg).toBe("#414aff");
  });
});
