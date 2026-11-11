import { describe, expect, it } from "vitest";
import { brandChanges, candidatesMarkdown, compileControl, componentsYaml, declaredColor, mergeControls, tokenCandidates } from "../scripts/compile-evidence.mjs";

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
    expect(c.fields.focus).toBeUndefined(); // the browser's auto ring is not a brand token
  });

  it("keeps a control in prose when nothing the brand painted changed", () => {
    const c = compile("nav", control());
    expect(c).toMatchObject({ emitted: false, reason: "no brand change in a measured state" });
    expect(componentsYaml([c])).toContain("# nav: prose only");
  });

  it("reports unmeasured as unmeasured, never as no change", () => {
    const off = { measured: false };
    expect(brandChanges(off, "hover")).toBeNull();
    expect(compile("tile", control({ hover: off, pressed: off, focus: off })).reason).toBe("every state unmeasured");
  });

  it("ignores browser defaults and changes that persist after blur", () => {
    const uaActive = { set: "self", prop: "fg", from: "rgb(0, 0, 238)", to: "rgb(255, 0, 0)" };
    const widened = { set: "self", prop: "size", from: "110x38", to: "276x38", alsoPersists: true };
    expect(brandChanges({ measured: true, changed: [uaActive, autoRing] }, "pressed")).toEqual([]);
    expect(brandChanges({ measured: true, changed: [widened] }, "focus")).toEqual([]);
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
      { size: 13, weight: 700, interactive: 2, controls: [], lineHeight: "14.3px", family: "Pretendard" },
      { size: 18, weight: 700, interactive: 0, controls: ["cta"], lineHeight: null, family: null },
    ]);
    expect(cand.radii).toEqual([{ value: "0px", interactive: 2, controls: [] }, { value: "3px", interactive: 1, controls: [] }, { value: "100px", interactive: 0, controls: ["cta"] }]);
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
