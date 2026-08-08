#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "../../..");
const tasksRoot = join(repoRoot, "benchmarks/ui-resolve-bench/tasks");
const legacyBaselineRoot = "/private/tmp/omd-source-contract-reliability-baselines-1.9.720";
const v2BaselineRoot = "/private/tmp/omd-source-contract-reliability-baselines-1.9.724-v2";
const v3BaselineRoot = "/private/tmp/omd-source-contract-reliability-baselines-1.9.727-v3";
const v4BaselineRoot = "/private/tmp/omd-source-contract-reliability-baselines-1.9.730-v4";
const v5BaselineRoot = "/private/tmp/omd-frontier-comparison-baselines-1.9.732-v5";
const v6BaselineRoot = "/private/tmp/omd-council-product-baselines-1.9.742-v6";
const v7BaselineRoot = "/private/tmp/omd-terminal-runner-reliability-baselines-1.9.746-v7";
const v8BaselineRoot = "/private/tmp/omd-browser-preflight-reliability-baselines-1.9.748-v8";
const v9BaselineRoot = "/private/tmp/omd-isolated-browser-reliability-baselines-1.9.749-v9";
const v10BaselineRoot = "/private/tmp/omd-controller-plan-reliability-baselines-1.9.750-v10";
const v11BaselineRoot = "/private/tmp/omd-css-cascade-reliability-baselines-1.9.751-v11";
const v12BaselineRoot = "/private/tmp/omd-checkpoint-reliability-baselines-1.9.753-v12";
const v13BaselineRoot = "/private/tmp/omd-council-comparison-baselines-1.9.754-v13";
const phase = process.argv.includes("--finalize") ? "finalize" : "draft";
const taskSet = process.argv.includes("--v13") ? "v13" : process.argv.includes("--v12") ? "v12" : process.argv.includes("--v11") ? "v11" : process.argv.includes("--v10") ? "v10" : process.argv.includes("--v9") ? "v9" : process.argv.includes("--v8") ? "v8" : process.argv.includes("--v7") ? "v7" : process.argv.includes("--v6") ? "v6" : process.argv.includes("--v5") ? "v5" : process.argv.includes("--v4") ? "v4" : process.argv.includes("--v3") ? "v3" : process.argv.includes("--v2") ? "v2" : "legacy";
const sha256 = (value) => createHash("sha256").update(value).digest("hex");
const json = (value) => `${JSON.stringify(value, null, 2)}\n`;

const legacyCases = [
  {
    id: "orbital-optics-transfer-v0.1",
    title: "Orbital optics transfer review",
    eyebrow: "Orbital observatory · optics transfer",
    heading: "Flight-optics transfer review",
    recordHeading: "Optics register",
    recordSummary: "Five supplied optics assemblies mapped to seven transport cradles.",
    records: [
      ["OPT-NAC-0174", ["CRADLE-88031", "CRADLE-88032"]],
      ["OPT-COR-0218", ["CRADLE-88033"]],
      ["OPT-HEL-0341", ["CRADLE-88034", "CRADLE-88035"]],
      ["OPT-UMB-0457", ["CRADLE-88036"]],
      ["OPT-PEN-0522", ["CRADLE-88037"]],
    ],
    windows: [["BAY-A3", "07:30–07:50"], ["BAY-C1", "09:10–09:30"], ["BAY-D4", "12:40–13:00"], ["BAY-F2", "15:20–15:40"]],
    views: [["optics", "Optics register"], ["windows", "Transfer windows"], ["decision", "Transfer decision"]],
    toggle: "Include shock-log note",
    fieldLabel: "Transfer reviewer",
    validValue: "OPT-NAC-0174 transfer review",
    target: "OPT-NAC-0174 + CRADLE-88031",
    evidence: "5 optics · 7 transport cradles · 4 transfer windows",
    state: "Review open",
    action: "Open transfer record",
    footer: "Orbital observatory · supplied transfer evidence only",
    unknowns: ["alignment verified", "coating intact", "optic calibrated", "flight certified", "cradle seal verified", "bay accepted", "manifest published", "transfer approved"],
    palette: { canvas:"#EDF2F3", surface:"#FCFEFF", ink:"#172A31", muted:"#61717A", border:"#98A9B0", primary:"#185A6B", accent:"#7A5367" },
    columns: "repeat(3,280px)", windowColumns: "repeat(4,220px)", decisionMin: "560px",
    cardRadius: 3,
    domain: "observatory transfer ledger",
  },
  {
    id: "seed-vault-accession-v0.1",
    title: "Seed vault accession review",
    eyebrow: "Regional seed vault · accession intake",
    heading: "Accession envelope review",
    recordHeading: "Accession register",
    recordSummary: "Four supplied seed lots mapped to six sealed envelopes.",
    records: [
      ["LOT-ORY-2047", ["ENV-731042", "ENV-731043"]],
      ["LOT-PIS-2184", ["ENV-731044"]],
      ["LOT-MIL-2306", ["ENV-731045", "ENV-731046"]],
      ["LOT-SOR-2491", ["ENV-731047"]],
    ],
    windows: [["CHAMBER-N2", "08:15–08:35"], ["CHAMBER-E5", "11:25–11:45"], ["CHAMBER-S1", "14:50–15:10"]],
    views: [["lots", "Seed lots"], ["windows", "Chamber windows"], ["decision", "Accession decision"]],
    toggle: "Include courier pouch note",
    fieldLabel: "Accession reviewer",
    validValue: "LOT-ORY-2047 accession review",
    target: "LOT-ORY-2047 + ENV-731042",
    evidence: "4 seed lots · 6 envelopes · 3 chamber windows",
    state: "Review open",
    action: "Open accession record",
    footer: "Regional seed vault · supplied accession evidence only",
    unknowns: ["germination verified", "sample viable", "moisture calibrated", "origin validated", "envelope integrity verified", "chamber accepted", "catalog published", "accession approved"],
    palette: { canvas:"#F0F2ED", surface:"#FEFFFC", ink:"#243027", muted:"#69716A", border:"#9AA69C", primary:"#426044", accent:"#7A5C43" },
    columns: "repeat(2,380px)", windowColumns: "repeat(3,270px)", decisionMin: "548px",
    cardRadius: 6,
    domain: "seed-vault accession ledger",
  },
  {
    id: "audio-archive-ingest-v0.1",
    title: "Audio archive ingest review",
    eyebrow: "Broadcast archive · preservation ingest",
    heading: "Reel ingest review",
    recordHeading: "Carrier register",
    recordSummary: "Six supplied tape reels mapped to eight preservation canisters.",
    records: [
      ["REEL-NIGHT-061", ["CAN-92410", "CAN-92411"]],
      ["REEL-CITY-074", ["CAN-92412"]],
      ["REEL-HARBOR-083", ["CAN-92413", "CAN-92414"]],
      ["REEL-ORCH-095", ["CAN-92415"]],
      ["REEL-NEWS-108", ["CAN-92416"]],
      ["REEL-STAGE-117", ["CAN-92417"]],
    ],
    windows: [["SUITE-R1", "06:50–07:10"], ["SUITE-R4", "09:40–10:00"], ["SUITE-R6", "13:15–13:35"], ["SUITE-R8", "16:05–16:25"]],
    views: [["reels", "Carrier register"], ["windows", "Ingest windows"], ["decision", "Ingest decision"]],
    toggle: "Include leader-tape note",
    fieldLabel: "Ingest reviewer",
    validValue: "REEL-NIGHT-061 ingest review",
    target: "REEL-NIGHT-061 + CAN-92410",
    evidence: "6 tape reels · 8 canisters · 4 ingest windows",
    state: "Review open",
    action: "Open ingest record",
    footer: "Broadcast archive · supplied ingest evidence only",
    unknowns: ["audio verified", "reel complete", "azimuth calibrated", "rights validated", "canister integrity verified", "suite accepted", "catalog published", "ingest approved"],
    palette: { canvas:"#F1F0F3", surface:"#FFFEFF", ink:"#2B2830", muted:"#77727B", border:"#A39DA8", primary:"#514760", accent:"#855A58" },
    columns: "repeat(3,286px)", windowColumns: "repeat(4,218px)", decisionMin: "570px",
    cardRadius: 2,
    domain: "broadcast preservation ledger",
  },
];

const v2Cases = [
  {
    id: "benthic-sample-transfer-v0.1", title: "Benthic sample transfer review", eyebrow: "Marine institute · sample transfer", heading: "Benthic sample transfer review", recordHeading: "Sample register", recordSummary: "Five supplied core samples mapped to seven cold-chain sleeves.",
    records: [["CORE-ABY-1704",["SLEEVE-44081","SLEEVE-44082"]],["CORE-RDG-1829",["SLEEVE-44083"]],["CORE-VNT-1963",["SLEEVE-44084","SLEEVE-44085"]],["CORE-SLP-2077",["SLEEVE-44086"]],["CORE-BSN-2191",["SLEEVE-44087"]]],
    windows: [["LOCKER-B2","07:20–07:40"],["LOCKER-D5","10:05–10:25"],["LOCKER-F1","13:30–13:50"],["LOCKER-H4","16:10–16:30"]], views: [["samples","Sample register"],["windows","Transfer windows"],["decision","Transfer decision"]], toggle: "Include temperature-log note", fieldLabel: "Transfer custodian", validValue: "CORE-ABY-1704 transfer review", target: "CORE-ABY-1704 + SLEEVE-44081", evidence: "5 core samples · 7 cold-chain sleeves · 4 transfer windows", state: "Review open", action: "Open transfer record", footer: "Marine institute · supplied transfer evidence only",
    unknowns: ["sample sterile","sediment verified","temperature calibrated","origin validated","sleeve integrity verified","locker accepted","catalog published","transfer approved"], palette: {canvas:"#EDF3F4",surface:"#FCFEFF",ink:"#183038",muted:"#6B7377",border:"#9AAEB4",primary:"#176174",accent:"#76586B"}, columns: "repeat(3,284px)", windowColumns: "repeat(4,222px)", decisionMin: "564px", cardRadius: 4, domain: "marine sample-transfer ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "conservation-frame-loan-v0.1", title: "Conservation frame loan review", eyebrow: "Print archive · frame loan", heading: "Conservation frame loan review", recordHeading: "Work register", recordSummary: "Four supplied works mapped to six conservation frames.",
    records: [["WORK-INK-3047",["FRAME-61820","FRAME-61821"]],["WORK-LTH-3186",["FRAME-61822"]],["WORK-GLS-3294",["FRAME-61823","FRAME-61824"]],["WORK-PPR-3379",["FRAME-61825"]]],
    windows: [["ROOM-N3","08:10–08:30"],["ROOM-E2","11:35–11:55"],["ROOM-S6","15:05–15:25"]], views: [["works","Work register"],["windows","Handling windows"],["decision","Loan decision"]], toggle: "Include glazing-note copy", fieldLabel: "Loan conservator", validValue: "WORK-INK-3047 loan review", target: "WORK-INK-3047 + FRAME-61820", evidence: "4 works · 6 conservation frames · 3 handling windows", state: "Review open", action: "Open loan record", footer: "Print archive · supplied loan evidence only",
    unknowns: ["paper stable","pigment verified","glazing calibrated","provenance validated","frame seal verified","room accepted","catalog published","loan approved"], palette: {canvas:"#F2F0EC",surface:"#FFFDF9",ink:"#302C27",muted:"#6B7377",border:"#AEA398",primary:"#654C38",accent:"#6C617F"}, columns: "repeat(2,386px)", windowColumns: "repeat(3,274px)", decisionMin: "552px", cardRadius: 7, domain: "conservation frame-loan ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "wind-tunnel-model-handoff-v0.1", title: "Wind-tunnel model handoff review", eyebrow: "Aerodynamics lab · model handoff", heading: "Tunnel-model handoff review", recordHeading: "Model register", recordSummary: "Six supplied test models mapped to eight transport fixtures.",
    records: [["MODEL-SWP-041",["FIXTURE-77210","FIXTURE-77211"]],["MODEL-YAW-052",["FIXTURE-77212"]],["MODEL-DRG-068",["FIXTURE-77213","FIXTURE-77214"]],["MODEL-LFT-079",["FIXTURE-77215"]],["MODEL-FLW-083",["FIXTURE-77216"]],["MODEL-TRM-097",["FIXTURE-77217"]]],
    windows: [["CELL-A1","06:40–07:00"],["CELL-C4","09:25–09:45"],["CELL-E2","12:55–13:15"],["CELL-G7","15:45–16:05"]], views: [["models","Model register"],["windows","Cell windows"],["decision","Handoff decision"]], toggle: "Include balance-log note", fieldLabel: "Handoff engineer", validValue: "MODEL-SWP-041 handoff review", target: "MODEL-SWP-041 + FIXTURE-77210", evidence: "6 test models · 8 transport fixtures · 4 cell windows", state: "Review open", action: "Open handoff record", footer: "Aerodynamics lab · supplied handoff evidence only",
    unknowns: ["geometry verified","surface intact","balance calibrated","test certified","fixture seal verified","cell accepted","report published","handoff approved"], palette: {canvas:"#EFF1F4",surface:"#FDFEFF",ink:"#262D36",muted:"#6B7377",border:"#A0A9B3",primary:"#435A72",accent:"#795B57"}, columns: "repeat(3,290px)", windowColumns: "repeat(4,220px)", decisionMin: "574px", cardRadius: 3, domain: "wind-tunnel model-handoff ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v3Cases = [
  {
    id: "archaeology-tray-release-v0.1", title: "Archaeology tray release review", eyebrow: "Field archive · tray release", heading: "Finds-tray release review", recordHeading: "Find register", recordSummary: "Five supplied find groups mapped to seven archive trays.",
    records: [["FIND-TMB-4817",["TRAY-30581","TRAY-30582"]],["FIND-STR-4932",["TRAY-30583"]],["FIND-PIT-5074",["TRAY-30584","TRAY-30585"]],["FIND-WAL-5188",["TRAY-30586"]],["FIND-DRN-5261",["TRAY-30587"]]],
    windows: [["STORE-B4","07:45–08:05"],["STORE-D2","10:30–10:50"],["STORE-F6","13:55–14:15"],["STORE-H1","16:20–16:40"]], views: [["finds","Find register"],["windows","Store windows"],["decision","Release decision"]], toggle: "Include packing-note copy", fieldLabel: "Release archivist", validValue: "FIND-TMB-4817 release review", target: "FIND-TMB-4817 + TRAY-30581", evidence: "5 find groups · 7 archive trays · 4 store windows", state: "Review open", action: "Open release record", footer: "Field archive · supplied release evidence only",
    unknowns: ["object stable","material verified","packing calibrated","provenance validated","tray seal verified","store accepted","catalog published","release approved"], palette: {canvas:"#F3F0E9",surface:"#FFFDF8",ink:"#302C25",muted:"#6B7377",border:"#ACA398",primary:"#67503B",accent:"#655F7D"}, columns: "repeat(3,286px)", windowColumns: "repeat(4,224px)", decisionMin: "568px", cardRadius: 5, domain: "archaeology tray-release ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v4Cases = [
  {
    id: "paleontology-jacket-accession-v0.1", title: "Paleontology jacket accession review", eyebrow: "Research collection · jacket accession", heading: "Field-jacket accession review", recordHeading: "Specimen register", recordSummary: "Five supplied specimen groups mapped to seven field jackets.",
    records: [["SPEC-RIV-5418",["JACKET-38210","JACKET-38211"]],["SPEC-MSA-5572",["JACKET-38212"]],["SPEC-BED-5689",["JACKET-38213","JACKET-38214"]],["SPEC-QRY-5746",["JACKET-38215"]],["SPEC-CLI-5891",["JACKET-38216"]]],
    windows: [["LAB-B3","07:35–07:55"],["LAB-D6","10:20–10:40"],["LAB-F2","13:45–14:05"],["LAB-H5","16:15–16:35"]], views: [["specimens","Specimen register"],["windows","Lab windows"],["decision","Accession decision"]], toggle: "Include matrix-note copy", fieldLabel: "Accession registrar", validValue: "SPEC-RIV-5418 accession review", target: "SPEC-RIV-5418 + JACKET-38210", evidence: "5 specimen groups · 7 field jackets · 4 lab windows", state: "Review open", action: "Open accession record", footer: "Research collection · supplied accession evidence only",
    unknowns: ["specimen stable","matrix verified","preparation calibrated","provenance validated","jacket seal verified","lab accepted","catalog published","accession approved"], palette: {canvas:"#F1EFEA",surface:"#FFFDF8",ink:"#302D28",muted:"#6B7377",border:"#AAA298",primary:"#61503F",accent:"#69607D"}, columns: "repeat(3,288px)", windowColumns: "repeat(4,222px)", decisionMin: "570px", cardRadius: 4, domain: "paleontology jacket-accession ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "textile-roll-conservation-v0.1", title: "Textile roll conservation review", eyebrow: "Textile archive · roll conservation", heading: "Textile-roll conservation review", recordHeading: "Textile register", recordSummary: "Four supplied textile groups mapped to six storage rolls.",
    records: [["TEXT-WVN-6124",["ROLL-90431","ROLL-90432"]],["TEXT-DYE-6287",["ROLL-90433"]],["TEXT-LCE-6395",["ROLL-90434","ROLL-90435"]],["TEXT-EMB-6478",["ROLL-90436"]]],
    windows: [["STUDIO-N4","08:05–08:25"],["STUDIO-E1","11:30–11:50"],["STUDIO-S7","14:55–15:15"]], views: [["textiles","Textile register"],["windows","Studio windows"],["decision","Conservation decision"]], toggle: "Include lining-note copy", fieldLabel: "Conservation registrar", validValue: "TEXT-WVN-6124 conservation review", target: "TEXT-WVN-6124 + ROLL-90431", evidence: "4 textile groups · 6 storage rolls · 3 studio windows", state: "Review open", action: "Open conservation record", footer: "Textile archive · supplied conservation evidence only",
    unknowns: ["fiber stable","dye verified","humidity calibrated","provenance validated","roll seal verified","studio accepted","catalog published","conservation approved"], palette: {canvas:"#F2F0F1",surface:"#FFFDFF",ink:"#302B30",muted:"#6B7377",border:"#ADA1AA",primary:"#624B5D",accent:"#6B6650"}, columns: "repeat(2,388px)", windowColumns: "repeat(3,276px)", decisionMin: "554px", cardRadius: 6, domain: "textile roll-conservation ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v5Cases = [
  {
    id: "cartography-sheet-transfer-v0.1", title: "Cartography sheet transfer review", eyebrow: "Map archive · sheet transfer", heading: "Survey-sheet transfer review", recordHeading: "Sheet register", recordSummary: "Five supplied survey groups mapped to seven archival sleeves.",
    records: [["SHEET-RDG-7142",["SLEEVE-52041","SLEEVE-52042"]],["SHEET-BSN-7285",["SLEEVE-52043"]],["SHEET-RIV-7398",["SLEEVE-52044","SLEEVE-52045"]],["SHEET-TRG-7461",["SLEEVE-52046"]],["SHEET-CTL-7594",["SLEEVE-52047"]]],
    windows: [["VAULT-C2","07:50–08:10"],["VAULT-E5","10:35–10:55"],["VAULT-G1","13:40–14:00"],["VAULT-J4","16:05–16:25"]], views: [["sheets","Sheet register"],["windows","Vault windows"],["decision","Transfer decision"]], toggle: "Include annotation-note copy", fieldLabel: "Transfer cartographer", validValue: "SHEET-RDG-7142 transfer review", target: "SHEET-RDG-7142 + SLEEVE-52041", evidence: "5 survey groups · 7 archival sleeves · 4 vault windows", state: "Review open", action: "Open transfer record", footer: "Map archive · supplied transfer evidence only",
    unknowns: ["datum verified","scale certified","annotation complete","provenance validated","sleeve seal verified","vault accepted","catalog published","transfer approved"], palette: {canvas:"#EEF2EF",surface:"#FCFFFD",ink:"#233029",muted:"#68736D",border:"#9CAAA2",primary:"#355F4F",accent:"#765D49"}, columns: "repeat(3,287px)", windowColumns: "repeat(4,221px)", decisionMin: "572px", cardRadius: 4, domain: "cartography sheet-transfer ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "numismatics-tray-accession-v0.1", title: "Numismatics tray accession review", eyebrow: "Coin cabinet · tray accession", heading: "Coin-tray accession review", recordHeading: "Object register", recordSummary: "Four supplied object groups mapped to six cabinet trays.",
    records: [["COIN-REP-8246",["TRAY-64130","TRAY-64131"]],["COIN-MED-8371",["TRAY-64132"]],["COIN-TOK-8495",["TRAY-64133","TRAY-64134"]],["COIN-SEAL-8568",["TRAY-64135"]]],
    windows: [["CABINET-N3","08:20–08:40"],["CABINET-E6","11:15–11:35"],["CABINET-S2","14:45–15:05"]], views: [["objects","Object register"],["windows","Cabinet windows"],["decision","Accession decision"]], toggle: "Include mount-note copy", fieldLabel: "Accession curator", validValue: "COIN-REP-8246 accession review", target: "COIN-REP-8246 + TRAY-64130", evidence: "4 object groups · 6 cabinet trays · 3 cabinet windows", state: "Review open", action: "Open accession record", footer: "Coin cabinet · supplied accession evidence only",
    unknowns: ["alloy verified","date certified","mount calibrated","provenance validated","tray seal verified","cabinet accepted","catalog published","accession approved"], palette: {canvas:"#F2F0EB",surface:"#FFFEFA",ink:"#302D26",muted:"#706E68",border:"#AAA49A",primary:"#62563E",accent:"#685D78"}, columns: "repeat(2,389px)", windowColumns: "repeat(3,275px)", decisionMin: "556px", cardRadius: 6, domain: "numismatics tray-accession ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "entomology-drawer-loan-v0.1", title: "Entomology drawer loan review", eyebrow: "Insect collection · drawer loan", heading: "Specimen-drawer loan review", recordHeading: "Specimen register", recordSummary: "Six supplied specimen groups mapped to eight collection drawers.",
    records: [["SPEC-LEP-9140",["DRAWER-73120","DRAWER-73121"]],["SPEC-COL-9253",["DRAWER-73122"]],["SPEC-DIP-9376",["DRAWER-73123","DRAWER-73124"]],["SPEC-HYM-9482",["DRAWER-73125"]],["SPEC-ODO-9567",["DRAWER-73126"]],["SPEC-HEM-9691",["DRAWER-73127"]]],
    windows: [["STORE-A2","06:55–07:15"],["STORE-C5","09:30–09:50"],["STORE-F3","12:50–13:10"],["STORE-H6","15:35–15:55"]], views: [["specimens","Specimen register"],["windows","Store windows"],["decision","Loan decision"]], toggle: "Include pinning-note copy", fieldLabel: "Loan registrar", validValue: "SPEC-LEP-9140 loan review", target: "SPEC-LEP-9140 + DRAWER-73120", evidence: "6 specimen groups · 8 collection drawers · 4 store windows", state: "Review open", action: "Open loan record", footer: "Insect collection · supplied loan evidence only",
    unknowns: ["species verified","specimen stable","pinning calibrated","provenance validated","drawer seal verified","store accepted","catalog published","loan approved"], palette: {canvas:"#EFF2F0",surface:"#FDFFFE",ink:"#24302A",muted:"#68736E",border:"#9FAAA4",primary:"#3E6150",accent:"#725A67"}, columns: "repeat(3,289px)", windowColumns: "repeat(4,219px)", decisionMin: "576px", cardRadius: 3, domain: "entomology drawer-loan ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v6Cases = [
  {
    id: "oceanographic-cast-custody-v0.1", title: "Oceanographic cast custody review", eyebrow: "Ocean survey · cast custody", heading: "Water-column cast custody review", recordHeading: "Cast register", recordSummary: "Five supplied cast groups mapped to seven sample carriers.",
    records: [["CAST-ABY-1842",["CARRIER-86120","CARRIER-86121"]],["CAST-SHL-1967",["CARRIER-86122"]],["CAST-TRM-2084",["CARRIER-86123","CARRIER-86124"]],["CAST-RDG-2195",["CARRIER-86125"]],["CAST-BSN-2278",["CARRIER-86126"]]],
    windows: [["LAB-W2","07:40–08:00"],["LAB-C5","10:25–10:45"],["LAB-E1","13:35–13:55"],["LAB-G4","16:10–16:30"]], views: [["casts","Cast register"],["windows","Lab windows"],["decision","Custody decision"]], toggle: "Include sensor-log note", fieldLabel: "Custody reviewer", validValue: "CAST-ABY-1842 custody review", target: "CAST-ABY-1842 + CARRIER-86120", evidence: "5 cast groups · 7 sample carriers · 4 lab windows", state: "Review open", action: "Open custody record", footer: "Ocean survey · supplied custody evidence only",
    unknowns: ["sensor verified","sample complete","depth calibrated","station provenance validated","carrier seal verified","lab accepted","catalog published","custody approved"], palette: {canvas:"#EDF3F4",surface:"#FCFEFF",ink:"#173039",muted:"#69757A",border:"#98AAB1",primary:"#1D6073",accent:"#76586B"}, columns: "repeat(3,286px)", windowColumns: "repeat(4,221px)", decisionMin: "572px", cardRadius: 4, domain: "oceanographic cast-custody ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v7Cases = [
  {
    id: "microscopy-slide-custody-v0.1", title: "Microscopy slide custody review", eyebrow: "Pathology archive · slide custody", heading: "Microscopy-slide custody review", recordHeading: "Slide register", recordSummary: "Five supplied specimen groups mapped to seven slide carriers.",
    records: [["SLIDE-REN-3142",["CARRIER-97210","CARRIER-97211"]],["SLIDE-HEP-3267",["CARRIER-97212"]],["SLIDE-PUL-3384",["CARRIER-97213","CARRIER-97214"]],["SLIDE-DER-3495",["CARRIER-97215"]],["SLIDE-NEU-3578",["CARRIER-97216"]]],
    windows: [["BENCH-M2","07:45–08:05"],["BENCH-C5","10:30–10:50"],["BENCH-E1","13:40–14:00"],["BENCH-G4","16:15–16:35"]], views: [["slides","Slide register"],["windows","Bench windows"],["decision","Custody decision"]], toggle: "Include stain-log note", fieldLabel: "Custody registrar", validValue: "SLIDE-REN-3142 custody review", target: "SLIDE-REN-3142 + CARRIER-97210", evidence: "5 specimen groups · 7 slide carriers · 4 bench windows", state: "Review open", action: "Open custody record", footer: "Pathology archive · supplied custody evidence only",
    unknowns: ["diagnosis verified","stain complete","scanner calibrated","patient provenance validated","carrier seal verified","bench accepted","catalog published","custody approved"], palette: {canvas:"#EDF3F4",surface:"#FCFEFF",ink:"#2D2638",muted:"#69757A",border:"#A39AAD",primary:"#59436E",accent:"#795F42"}, columns: "repeat(3,286px)", windowColumns: "repeat(4,221px)", decisionMin: "572px", cardRadius: 5, domain: "microscopy slide-custody ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "manuscript-folio-transfer-v0.1", title: "Manuscript folio transfer review", eyebrow: "Rare-book room · folio transfer", heading: "Manuscript-folio transfer review", recordHeading: "Folio register", recordSummary: "Four supplied folio groups mapped to six archival folders.",
    records: [["FOLIO-GOS-4126",["FOLDER-58320","FOLDER-58321"]],["FOLIO-CHR-4271",["FOLDER-58322"]],["FOLIO-MAR-4395",["FOLDER-58323","FOLDER-58324"]],["FOLIO-COL-4468",["FOLDER-58325"]]],
    windows: [["ROOM-N3","08:15–08:35"],["ROOM-E6","11:20–11:40"],["ROOM-S2","14:50–15:10"]], views: [["folios","Folio register"],["windows","Room windows"],["decision","Transfer decision"]], toggle: "Include binding-note copy", fieldLabel: "Transfer librarian", validValue: "FOLIO-GOS-4126 transfer review", target: "FOLIO-GOS-4126 + FOLDER-58320", evidence: "4 folio groups · 6 archival folders · 3 room windows", state: "Review open", action: "Open transfer record", footer: "Rare-book room · supplied transfer evidence only",
    unknowns: ["script verified","folio complete","humidity calibrated","provenance validated","folder seal verified","room accepted","catalog published","transfer approved"], palette: {canvas:"#EDF3F4",surface:"#FCFEFF",ink:"#352B25",muted:"#69757A",border:"#AA9D95",primary:"#6A4B39",accent:"#5B657B"}, columns: "repeat(2,389px)", windowColumns: "repeat(3,275px)", decisionMin: "556px", cardRadius: 3, domain: "manuscript folio-transfer ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "geology-section-loan-v0.1", title: "Geology section loan review", eyebrow: "Earth-science collection · section loan", heading: "Thin-section loan review", recordHeading: "Section register", recordSummary: "Six supplied rock groups mapped to eight section cases.",
    records: [["SECTION-BAS-5140",["CASE-76420","CASE-76421"]],["SECTION-GRN-5253",["CASE-76422"]],["SECTION-SCH-5376",["CASE-76423","CASE-76424"]],["SECTION-LMS-5482",["CASE-76425"]],["SECTION-SST-5567",["CASE-76426"]],["SECTION-GAB-5691",["CASE-76427"]]],
    windows: [["STORE-A2","06:55–07:15"],["STORE-C5","09:35–09:55"],["STORE-F3","12:55–13:15"],["STORE-H6","15:40–16:00"]], views: [["sections","Section register"],["windows","Store windows"],["decision","Loan decision"]], toggle: "Include polish-note copy", fieldLabel: "Loan curator", validValue: "SECTION-BAS-5140 loan review", target: "SECTION-BAS-5140 + CASE-76420", evidence: "6 rock groups · 8 section cases · 4 store windows", state: "Review open", action: "Open loan record", footer: "Earth-science collection · supplied loan evidence only",
    unknowns: ["mineral verified","section stable","polish calibrated","provenance validated","case seal verified","store accepted","catalog published","loan approved"], palette: {canvas:"#EDF3F4",surface:"#FCFEFF",ink:"#21333A",muted:"#69757A",border:"#99A9AD",primary:"#315E69",accent:"#75604B"}, columns: "repeat(3,290px)", windowColumns: "repeat(4,220px)", decisionMin: "574px", cardRadius: 4, domain: "geology thin-section loan ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v8Cases = [
  {
    id: "herbarium-sheet-return-v0.1", title: "Herbarium sheet return review", eyebrow: "Botanical archive · sheet return", heading: "Herbarium-sheet return review", recordHeading: "Sheet register", recordSummary: "Five supplied plant groups mapped to seven archival folders.",
    records: [["SHEET-ALP-6124",["FOLDER-87510","FOLDER-87511"]],["SHEET-RIP-6238",["FOLDER-87512"]],["SHEET-FEN-6351",["FOLDER-87513","FOLDER-87514"]],["SHEET-DRY-6467",["FOLDER-87515"]],["SHEET-MNT-6580",["FOLDER-87516"]]],
    windows: [["VAULT-B2","07:20–07:40"],["VAULT-D5","10:05–10:25"],["VAULT-F1","13:15–13:35"],["VAULT-H4","15:55–16:15"]], views: [["sheets","Sheet register"],["windows","Vault windows"],["decision","Return decision"]], toggle: "Include mounting-note copy", fieldLabel: "Return curator", validValue: "SHEET-ALP-6124 return review", target: "SHEET-ALP-6124 + FOLDER-87510", evidence: "5 plant groups · 7 archival folders · 4 vault windows", state: "Review open", action: "Open return record", footer: "Botanical archive · supplied return evidence only",
    unknowns: ["species verified","sheet stable","mounting calibrated","provenance validated","folder seal verified","vault accepted","catalog published","return approved"], palette: {canvas:"#EDF3F4",surface:"#FCFEFF",ink:"#24342B",muted:"#69757A",border:"#9DA9A0",primary:"#3E6250",accent:"#745A69"}, columns: "repeat(3,288px)", windowColumns: "repeat(4,220px)", decisionMin: "570px", cardRadius: 4, domain: "herbarium sheet-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v9Cases = [
  {
    id: "photographic-negative-return-v0.1", title: "Photographic negative return review", eyebrow: "Photographic archive · negative return", heading: "Film-negative return review", recordHeading: "Negative register", recordSummary: "Four supplied negative groups mapped to six archival envelopes.",
    records: [["NEG-GLS-7124",["ENVELOPE-98610","ENVELOPE-98611"]],["NEG-STR-7238",["ENVELOPE-98612"]],["NEG-PRT-7351",["ENVELOPE-98613","ENVELOPE-98614"]],["NEG-ARC-7467",["ENVELOPE-98615"]]],
    windows: [["VAULT-N2","08:10–08:30"],["VAULT-E5","11:05–11:25"],["VAULT-S1","14:35–14:55"]], views: [["negatives","Negative register"],["windows","Vault windows"],["decision","Return decision"]], toggle: "Include sleeve-note copy", fieldLabel: "Return registrar", validValue: "NEG-GLS-7124 return review", target: "NEG-GLS-7124 + ENVELOPE-98610", evidence: "4 negative groups · 6 archival envelopes · 3 vault windows", state: "Review open", action: "Open return record", footer: "Photographic archive · supplied return evidence only",
    unknowns: ["image verified","negative stable","density calibrated","provenance validated","envelope seal verified","vault accepted","catalog published","return approved"], palette: {canvas:"#EDF3F4",surface:"#FCFEFF",ink:"#2E2B33",muted:"#69757A",border:"#A49EA8",primary:"#544C62",accent:"#765B4D"}, columns: "repeat(2,389px)", windowColumns: "repeat(3,275px)", decisionMin: "558px", cardRadius: 3, domain: "photographic negative-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v10Cases = [
  {
    id: "architectural-drawing-return-v0.1", title: "Architectural drawing return review", eyebrow: "Architecture archive · drawing return", heading: "Architectural-drawing return review", recordHeading: "Drawing register", recordSummary: "Five supplied drawing groups mapped to seven archival tubes.",
    records: [["DRAW-PLN-8124",["TUBE-10710","TUBE-10711"]],["DRAW-SEC-8238",["TUBE-10712"]],["DRAW-ELE-8351",["TUBE-10713","TUBE-10714"]],["DRAW-DTL-8467",["TUBE-10715"]],["DRAW-SIT-8580",["TUBE-10716"]]],
    windows: [["STORE-B2","07:25–07:45"],["STORE-D5","10:10–10:30"],["STORE-F1","13:20–13:40"],["STORE-H4","16:00–16:20"]], views: [["drawings","Drawing register"],["windows","Store windows"],["decision","Return decision"]], toggle: "Include condition-note copy", fieldLabel: "Return archivist", validValue: "DRAW-PLN-8124 return review", target: "DRAW-PLN-8124 + TUBE-10710", evidence: "5 drawing groups · 7 archival tubes · 4 store windows", state: "Review open", action: "Open return record", footer: "Architecture archive · supplied return evidence only",
    unknowns: ["authorship verified","drawing stable","scale calibrated","provenance validated","tube seal verified","store accepted","catalog published","return approved"], palette: {canvas:"#F1F2EF",surface:"#FEFFFC",ink:"#29312B",muted:"#69736D",border:"#A0AAA3",primary:"#4C6255",accent:"#746054"}, columns: "repeat(3,288px)", windowColumns: "repeat(4,220px)", decisionMin: "570px", cardRadius: 3, domain: "architectural drawing-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v11Cases = [
  {
    id: "ceramic-vessel-return-v0.1", title: "Ceramic vessel return review", eyebrow: "Ceramics archive · vessel return", heading: "Ceramic-vessel return review", recordHeading: "Vessel register", recordSummary: "Six supplied vessel groups mapped to eight archival crates.",
    records: [["VESSEL-GLZ-9124",["CRATE-21810","CRATE-21811"]],["VESSEL-CLY-9238",["CRATE-21812"]],["VESSEL-FIR-9351",["CRATE-21813","CRATE-21814"]],["VESSEL-DEC-9467",["CRATE-21815"]],["VESSEL-RIM-9580",["CRATE-21816"]],["VESSEL-BAS-9694",["CRATE-21817"]]],
    windows: [["STORE-C2","07:15–07:35"],["STORE-E5","09:55–10:15"],["STORE-G1","13:05–13:25"],["STORE-J4","15:45–16:05"]], views: [["vessels","Vessel register"],["windows","Store windows"],["decision","Return decision"]], toggle: "Include packing-note copy", fieldLabel: "Return registrar", validValue: "VESSEL-GLZ-9124 return review", target: "VESSEL-GLZ-9124 + CRATE-21810", evidence: "6 vessel groups · 8 archival crates · 4 store windows", state: "Review open", action: "Open return record", footer: "Ceramics archive · supplied return evidence only",
    unknowns: ["fabric verified","vessel stable","firing calibrated","provenance validated","crate seal verified","store accepted","catalog published","return approved"], palette: {canvas:"#F3F0EB",surface:"#FFFDF9",ink:"#342E29",muted:"#706E69",border:"#AAA39B",primary:"#654F42",accent:"#6A6078"}, columns: "repeat(3,290px)", windowColumns: "repeat(4,220px)", decisionMin: "574px", cardRadius: 4, domain: "ceramic vessel-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v12Cases = [
  {
    id: "glass-plate-return-v0.1", title: "Glass plate return review", eyebrow: "Image archive · plate return", heading: "Glass-plate return review", recordHeading: "Plate register", recordSummary: "Five supplied plate groups mapped to seven archival boxes.",
    records: [["PLATE-EMU-1124",["BOX-32910","BOX-32911"]],["PLATE-ORT-1238",["BOX-32912"]],["PLATE-PAN-1351",["BOX-32913","BOX-32914"]],["PLATE-STR-1467",["BOX-32915"]],["PLATE-ARC-1580",["BOX-32916"]]],
    windows: [["VAULT-A2","07:05–07:25"],["VAULT-C5","09:45–10:05"],["VAULT-F1","12:55–13:15"],["VAULT-H4","15:35–15:55"]], views: [["plates","Plate register"],["windows","Vault windows"],["decision","Return decision"]], toggle: "Include emulsion-note copy", fieldLabel: "Return conservator", validValue: "PLATE-EMU-1124 return review", target: "PLATE-EMU-1124 + BOX-32910", evidence: "5 plate groups · 7 archival boxes · 4 vault windows", state: "Review open", action: "Open return record", footer: "Image archive · supplied return evidence only",
    unknowns: ["image verified","plate stable","emulsion calibrated","provenance validated","box seal verified","vault accepted","catalog published","return approved"], palette: {canvas:"#EEF1F2",surface:"#FCFEFF",ink:"#273238",muted:"#6A7479",border:"#9FA9AE",primary:"#455E69",accent:"#765B68"}, columns: "repeat(3,288px)", windowColumns: "repeat(4,220px)", decisionMin: "570px", cardRadius: 3, domain: "glass plate-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const v13Cases = [
  {
    id: "photograph-album-return-v0.1", title: "Photograph album return review", eyebrow: "Social-history archive · album return", heading: "Photograph-album return review", recordHeading: "Album register", recordSummary: "Four supplied album groups mapped to six archival cases.",
    records: [["ALBUM-FAM-2124",["CASE-43010","CASE-43011"]],["ALBUM-CIV-2238",["CASE-43012"]],["ALBUM-IND-2351",["CASE-43013","CASE-43014"]],["ALBUM-TRV-2467",["CASE-43015"]]],
    windows: [["VAULT-B3","08:10–08:30"],["VAULT-E6","11:15–11:35"],["VAULT-H2","14:45–15:05"]], views: [["albums","Album register"],["windows","Vault windows"],["decision","Return decision"]], toggle: "Include interleaf-note copy", fieldLabel: "Return archivist", validValue: "ALBUM-FAM-2124 return review", target: "ALBUM-FAM-2124 + CASE-43010", evidence: "4 album groups · 6 archival cases · 3 vault windows", state: "Review open", action: "Open return record", footer: "Social-history archive · supplied return evidence only",
    unknowns: ["sitter verified","album stable","interleaf calibrated","provenance validated","case seal verified","vault accepted","catalog published","return approved"], palette: {canvas:"#F1F0ED",surface:"#FFFDF9",ink:"#312E29",muted:"#706F6B",border:"#AAA49C",primary:"#625548",accent:"#675D78"}, columns: "repeat(2,389px)", windowColumns: "repeat(3,275px)", decisionMin: "558px", cardRadius: 4, domain: "photograph album-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "mineral-drawer-return-v0.1", title: "Mineral drawer return review", eyebrow: "Mineralogy collection · drawer return", heading: "Mineral-drawer return review", recordHeading: "Specimen register", recordSummary: "Five supplied mineral groups mapped to seven cabinet drawers.",
    records: [["MIN-QUA-3124",["DRAWER-54110","DRAWER-54111"]],["MIN-FEL-3238",["DRAWER-54112"]],["MIN-MIC-3351",["DRAWER-54113","DRAWER-54114"]],["MIN-CAL-3467",["DRAWER-54115"]],["MIN-GAR-3580",["DRAWER-54116"]]],
    windows: [["CABINET-A2","07:20–07:40"],["CABINET-D5","10:05–10:25"],["CABINET-F1","13:25–13:45"],["CABINET-J4","16:00–16:20"]], views: [["specimens","Specimen register"],["windows","Cabinet windows"],["decision","Return decision"]], toggle: "Include mount-note copy", fieldLabel: "Return curator", validValue: "MIN-QUA-3124 return review", target: "MIN-QUA-3124 + DRAWER-54110", evidence: "5 mineral groups · 7 cabinet drawers · 4 cabinet windows", state: "Review open", action: "Open return record", footer: "Mineralogy collection · supplied return evidence only",
    unknowns: ["species verified","specimen stable","hardness calibrated","provenance validated","drawer seal verified","cabinet accepted","catalog published","return approved"], palette: {canvas:"#EEF2F1",surface:"#FCFFFE",ink:"#283432",muted:"#697572",border:"#9EAAA7",primary:"#45615B",accent:"#785D55"}, columns: "repeat(3,288px)", windowColumns: "repeat(4,220px)", decisionMin: "572px", cardRadius: 3, domain: "mineral drawer-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
  {
    id: "wax-cylinder-return-v0.1", title: "Wax cylinder return review", eyebrow: "Sound archive · cylinder return", heading: "Wax-cylinder return review", recordHeading: "Cylinder register", recordSummary: "Six supplied recording groups mapped to eight storage canisters.",
    records: [["CYL-VOX-4124",["CAN-65210","CAN-65211"]],["CYL-MUS-4238",["CAN-65212"]],["CYL-ORL-4351",["CAN-65213","CAN-65214"]],["CYL-ENV-4467",["CAN-65215"]],["CYL-LNG-4580",["CAN-65216"]],["CYL-CER-4694",["CAN-65217"]]],
    windows: [["ROOM-C2","07:10–07:30"],["ROOM-E5","09:50–10:10"],["ROOM-G1","13:00–13:20"],["ROOM-K4","15:40–16:00"]], views: [["cylinders","Cylinder register"],["windows","Room windows"],["decision","Return decision"]], toggle: "Include playback-note copy", fieldLabel: "Return engineer", validValue: "CYL-VOX-4124 return review", target: "CYL-VOX-4124 + CAN-65210", evidence: "6 recording groups · 8 canisters · 4 room windows", state: "Review open", action: "Open return record", footer: "Sound archive · supplied return evidence only",
    unknowns: ["recording verified","cylinder stable","speed calibrated","provenance validated","canister seal verified","room accepted","catalog published","return approved"], palette: {canvas:"#F0F1F3",surface:"#FEFEFF",ink:"#2B2D35",muted:"#6E717A",border:"#A3A6B0",primary:"#4E566C",accent:"#765C61"}, columns: "repeat(3,290px)", windowColumns: "repeat(4,220px)", decisionMin: "574px", cardRadius: 5, domain: "wax cylinder-return ledger", guidanceSelector: "header > p.guidance-copy",
  },
];

const cases = taskSet === "v13" ? v13Cases : taskSet === "v12" ? v12Cases : taskSet === "v11" ? v11Cases : taskSet === "v10" ? v10Cases : taskSet === "v9" ? v9Cases : taskSet === "v8" ? v8Cases : taskSet === "v7" ? v7Cases : taskSet === "v6" ? v6Cases : taskSet === "v5" ? v5Cases : taskSet === "v4" ? v4Cases : taskSet === "v3" ? v3Cases : taskSet === "v2" ? v2Cases : legacyCases;

function sourceContract(c, schema = "0.1", baselineSha = null) {
  const guidanceSelector = c.guidanceSelector ?? "header > p";
  const contract = {
    schema_version: schema,
    structured_css_only: true,
    product_path: "index.html",
    required_literals: [c.target, c.evidence],
    forbidden_literals: c.unknowns,
    forbidden_patterns: ["word-break\\s*:", "overflow-wrap\\s*:\\s*(?:anywhere|break-word)"],
    forbidden_css_declarations: [
      { selector: ".decision-target", property: "min-width", value_contract: "positive-length" },
      { selector: ".decision-evidence", property: "min-width", value_contract: "positive-length" },
    ],
    count_literals: [
      { literal: "data-bench-decision-role=\"target\"", expected_count: 1 },
      { literal: "data-bench-decision-role=\"evidence\"", expected_count: 1 },
    ],
    acceptance_debt_ledger: [
      { id:"record-register-reflow", gate:"responsive", selector:".record-grid", baseline_evidence:`fixed ${c.columns} register escapes narrow carriers`, required_correction:"reflow the supplied register without changing assignments", required_outcome:"the complete register remains contained", proof_mode:"browser-row", bound_row_group_ids:["target"], status:"must-fix-before-static-close", static_guardrail:{required_literals:[c.target],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:".record-grid",property:"grid-template-columns",value:"1fr",value_contract:"any-value"}],forbidden_css_declarations:[]} },
      { id:"window-strip-reflow", gate:"responsive", selector:".window-strip", baseline_evidence:`fixed ${c.windowColumns} window strip escapes narrow pages`, required_correction:"reflow the separate operational window strip", required_outcome:"every supplied window remains visible", proof_mode:"browser-row", bound_row_group_ids:["evidence"], status:"must-fix-before-static-close", static_guardrail:{required_literals:[c.evidence],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:".window-strip",property:"grid-template-columns",value:"1fr",value_contract:"any-value"}],forbidden_css_declarations:[]} },
      { id:"decision-reflow", gate:"responsive", selector:".decision", baseline_evidence:"fixed relationship widths collide with the action and escape the page", required_correction:"preserve separate target, evidence, state, and action hierarchy in a contained column", required_outcome:"the decision remains readable without page overflow or action wrapping", proof_mode:"browser-row", bound_row_group_ids:["target","evidence"], status:"must-fix-before-static-close", static_guardrail:{required_literals:[],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:".decision",property:"grid-template-columns",value:"1fr",value_contract:"exact-value"},{selector:".decision > div",property:"min-width",value:"0",value_contract:"exact-value"}],forbidden_css_declarations:[{selector:".decision-target",property:"min-width",value_contract:"positive-length"},{selector:".decision-evidence",property:"min-width",value_contract:"positive-length"}]} },
      { id:"canvas-text-contrast", gate:"accessibility", selector:`${guidanceSelector}, footer`, baseline_evidence:"muted normal-size guidance does not reach 4.5:1 on the canvas", required_correction:"use the verified ink role for canvas guidance", required_outcome:"header guidance and footer reach at least 4.5:1", proof_mode:"static-fail-close", bound_row_group_ids:[], status:"must-fix-before-static-close", static_guardrail:{required_literals:[],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:guidanceSelector,property:"color",value:"var(--ink)",value_contract:"exact-value"},{selector:"footer",property:"color",value:"var(--ink)",value_contract:"exact-value"}],forbidden_css_declarations:[]} },
    ],
    carriers: [
      { id:"target-carrier", selector:"[data-bench-decision-role='context'] > div > .decision-target", expected_count:1, binds_row_groups:["target"], containment_guardrail:{selector:".decision > div",property:"min-width",value:"0",value_contract:"exact-value"} },
      { id:"evidence-carrier", selector:"[data-bench-decision-role='context'] > div > .decision-evidence", expected_count:1, binds_row_groups:["evidence"], containment_guardrail:{selector:".decision > div",property:"min-width",value:"0",value_contract:"exact-value"} },
    ],
    row_groups: [
      { id:"target", selector:"[data-bench-decision-role='target']", role:"target", expected_count:1, longest_value:c.target, atomic_parts:c.target.split(" + "), line_contract:"parent-one-line", typography_contract:{source:"deterministic-pre-edit-snapshot"}, required_fit_reserve_css_px:8, planned_fit_reserve_css_px:16, decision:"comparison-scroll", scroll_contract:{container_selector:"[data-bench-decision-role='context'] > div > .decision-target",accessible_name:"Record and container relationship",keyboard_reachable:true,focus_visible:true,passive_text_scroll_container:false} },
      { id:"evidence", selector:"[data-bench-decision-role='evidence']", role:"evidence", expected_count:1, longest_value:c.evidence, line_contract:"single-token", typography_contract:{source:"deterministic-pre-edit-snapshot"}, required_fit_reserve_css_px:8, planned_fit_reserve_css_px:16, decision:"comparison-scroll", scroll_contract:{container_selector:"[data-bench-decision-role='context'] > div > .decision-evidence",accessible_name:"Supplied operational evidence",keyboard_reachable:true,focus_visible:true,passive_text_scroll_container:false} },
    ],
    invariants: { same_row_count:true, same_decision_boundary:true, all_registered_carriers_closed:true, no_text_hack:true },
  };
  if (schema === "0.2") {
    contract.baseline_evidence = { path:"baseline-critical-gates.json", sha256:baselineSha };
    contract.critical_gate_debt_coverage = [
      { gate:"responsive", debt_ids:["record-register-reflow","window-strip-reflow","decision-reflow"] },
      { gate:"accessibility", debt_ids:["canvas-text-contrast"] },
    ];
  }
  return contract;
}

function task(c, contract) {
  const unitCount = c.records.reduce((sum, [, units]) => sum + units.length, 0);
  const protectedSelectors = ["[data-bench='routing-view-option']","[data-bench='note-toggle']","[data-bench='review-form']","[data-bench='reviewer-name']","[data-bench='form-status']","[data-bench='record-case']","[data-bench='record-id']","[data-bench='unit-id']","[data-bench='window-strip']","[data-bench='window-owner']","[data-bench='window-id']","[data-bench='compact-control-copy']","[data-bench-design-role='record-register']","[data-bench-decision-role='context']","[data-bench-decision-role='target']","[data-bench-decision-role='evidence']","[data-bench-decision-role='state']","[data-bench-decision-role='action']"];
  const counts = [3,1,1,1,1,c.records.length,c.records.length,unitCount,1,c.windows.length,c.windows.length,1,1,1,1,1,1,1];
  return {
    id:c.id, version:"0.1.0", track:"repair", grounding:"design-md", locale:"en", behavior_adapter:"onboarding-v1",
    review_brief:`A ${c.domain}. Preserve ${c.records.length} record identifiers, ${unitCount} assigned container identifiers and exact assignments, the separate ${c.windows.length}-window operational strip, three review views, note setting, reviewer name, and supplied summary facts without inventing ${c.unknowns.join(", ")}.`,
    network:"disabled", entry:"index.html",
    semantic_oracle:{landmarks:{h1_count:{exact:1},main_count:{exact:1},nav_count:{min:1},footer_count:{min:1}}},
    viewports:[{name:"desktop",width:1440,height:1000},{name:"mobile",width:390,height:844},{name:"narrow-320",width:320,height:720},{name:"css-zoom-surrogate-200",width:640,height:900,zoom:2}],
    protected_selectors:protectedSelectors,
    protected_hook_counts:Object.fromEntries(protectedSelectors.map((selector,index)=>[selector,counts[index]])),
    journey_oracle:{choice:{selector:"[data-bench='routing-view-option']",value_attribute:"data-view",body_dataset:"view",values:c.views.map(([value])=>value),count:3,initial:c.views[0][0],selected:c.views[1][0]},toggle:{selector:"[data-bench='note-toggle']"},form:{form_selector:"[data-bench='review-form']",field_selector:"[data-bench='reviewer-name']",status_selector:"[data-bench='form-status']",invalid_value:"",valid_value:c.validValue}},
    text_geometry_oracle:{viewports:["mobile","narrow-320","css-zoom-surrogate-200"],scope_selectors:["[data-bench-design-role='record-register']","[data-bench='window-strip']","[data-bench-decision-role='context']"],atomic_scope_selectors:["[data-bench='record-id']","[data-bench='unit-id']","[data-bench='window-owner']","[data-bench='window-id']","[data-bench-decision-role='target']","[data-bench-decision-role='evidence']","[data-bench-decision-role='state']"],compact_copy_selectors:["[data-bench='compact-control-copy']"],max_short_text_chars:56,max_short_text_lines:1},
    decision_hierarchy_oracle:{viewports:["desktop","mobile","narrow-320","css-zoom-surrogate-200"],minimum_action_gap_px:8,roles:{container:"[data-bench-decision-role='context']",target:"[data-bench-decision-role='target']",evidence:"[data-bench-decision-role='evidence']",state:"[data-bench-decision-role='state']",action:"[data-bench-decision-role='action']"}},
    protected_unknown_patterns:["\\b(?:10x|99(?:\\.9)?%|guaranteed|revolutionary|supercharge|magical|seamless)\\b",`\\b(?:${c.unknowns.join("|")})\\b`,"\\btrusted by\\b","[★☆]{3,}"],
    protected_known_patterns:[c.target,c.evidence], protected_unknown_selectors:["blockquote","[class*='testimonial' i]","[class*='logo-wall' i]","[class*='social-proof' i]"],
    design_oracle:{page_background:c.palette.canvas,primary_action:c.palette.primary,accent:c.palette.accent,ink:c.palette.ink,surface:c.palette.surface,border:c.palette.border,muted_text:c.palette.muted,card_radius_px:c.cardRadius,control_radius_px:c.cardRadius,font_family:{body_any:["Arial"],display_any:["Georgia"]},selectors:{primary_action:"[data-primary-action]",card:"[data-bench-design-role='record-register']",display:"h1"}},
    omd_reflow_source_contract:contract,
  };
}

function html(c) {
  const records = c.records.map(([record, units])=>`<article class="record" data-bench="record-case"><span class="record-id" data-bench="record-id">${record}</span><div class="units">${units.map(unit=>`<span class="unit-id" data-bench="unit-id">${unit}</span>`).join("")}</div></article>`).join("");
  const windows = c.windows.map(([owner,window])=>`<article class="window"><strong class="window-owner" data-bench="window-owner">${owner}</strong><span class="window-id" data-bench="window-id">${window}</span></article>`).join("");
  const p=c.palette;
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${c.title}</title><style>
:root{--canvas:${p.canvas};--surface:${p.surface};--ink:${p.ink};--muted:${p.muted};--border:${p.border};--primary:${p.primary};--accent:${p.accent}}*{box-sizing:border-box}body{margin:0;background:var(--canvas);color:var(--ink);font:15px/1.5 Arial,sans-serif}button,input{font:inherit}button{cursor:pointer}header,main,footer{width:min(1120px,calc(100% - 40px));margin:auto}header{padding:34px 0 24px}h1{font:700 43px/1.06 Georgia,serif;margin:0 0 10px}.eyebrow{font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent)}nav{display:flex;gap:8px;margin:22px 0}.view{border:1px solid var(--border);border-radius:${c.cardRadius}px;background:var(--surface);padding:9px 13px}.view[aria-pressed=true]{background:var(--primary);color:white}.layout{display:grid;grid-template-columns:minmax(0,1fr) 304px;gap:18px}.panel{background:var(--surface);border:1px solid var(--border);border-radius:${c.cardRadius}px;padding:18px}.panel h2{font:700 23px/1.2 Georgia,serif;margin:0 0 8px}.muted{color:var(--muted)}.record-grid{display:grid;grid-template-columns:${c.columns};gap:12px;margin-top:16px}.record{border-top:3px solid var(--primary);padding:14px;background:color-mix(in srgb,var(--surface) 76%,var(--canvas))}.record-id,.unit-id,.window-owner,.window-id{white-space:normal}.record-id{display:block;font-weight:700;margin-bottom:8px}.units{display:flex;gap:8px;flex-wrap:wrap}.unit-id{border:1px solid var(--border);padding:5px 7px;background:var(--surface)}.window-strip{display:grid;grid-template-columns:${c.windowColumns};gap:10px;margin-top:18px}.window{border:1px solid var(--border);padding:12px;background:var(--surface)}.window-owner,.window-id{display:block}.decision{margin-top:18px;display:grid;grid-template-columns:1fr auto;gap:18px;align-items:start}.decision-target,.decision-evidence{min-width:${c.decisionMin}}.decision-evidence{margin-top:8px;color:var(--muted)}.state{display:block;margin-top:12px;font-weight:700}.primary{border:0;border-radius:${c.cardRadius}px;background:var(--primary);color:white;padding:11px 16px}.controls{display:grid;gap:12px}.toggle{display:flex;gap:8px;align-items:center}.review-form{display:grid;gap:8px}.review-form input{min-width:0;border:1px solid var(--border);border-radius:${c.cardRadius}px;padding:9px}.status{min-height:1.5em;color:var(--accent)}footer{padding:24px 0 36px;color:var(--muted)}@media(max-width:760px){header,main,footer{width:calc(100% - 24px)}h1{font-size:35px}.layout{grid-template-columns:1fr}.decision{grid-template-columns:1fr auto}}
</style></head><body data-view="${c.views[0][0]}"><header><div class="eyebrow">${c.eyebrow}</div><h1>${c.heading}</h1><p class="muted${c.guidanceSelector ? " guidance-copy" : ""}">Inspect supplied assignments and operational windows before recording a reviewer.</p><nav aria-label="Review views">${c.views.map(([value,label],index)=>`<button class="view" data-bench="routing-view-option" data-view="${value}" aria-pressed="${index===0}">${label}</button>`).join("")}</nav></header><main><div class="layout"><section class="panel" data-bench-design-role="record-register"><h2>${c.recordHeading}</h2><p class="muted">${c.recordSummary}</p><div class="record-grid">${records}</div></section><aside class="panel controls"><h2>Review controls</h2><button type="button" class="view toggle" data-bench="note-toggle" aria-pressed="false"><span data-bench="compact-control-copy">${c.toggle}</span></button><form class="review-form" data-bench="review-form"><label for="reviewer">${c.fieldLabel}</label><input id="reviewer" data-bench="reviewer-name" autocomplete="off"><button class="primary" type="submit">Record reviewer</button><div class="status" role="status" data-bench="form-status"></div></form></aside></div><section class="window-strip" data-bench="window-strip" aria-label="Operational windows">${windows}</section><section class="panel decision" data-bench-decision-role="context"><div><div class="decision-target"><strong data-bench-decision-role="target">${c.target}</strong></div><div class="decision-evidence"><span data-bench-decision-role="evidence">${c.evidence}</span></div><span class="state" data-bench-decision-role="state">${c.state}</span></div><button class="primary" data-primary-action data-bench-decision-role="action">${c.action}</button></section></main><footer>${c.footer}</footer><script>const views=[...document.querySelectorAll('[data-bench="routing-view-option"]')];views.forEach(button=>button.addEventListener('click',()=>{document.body.dataset.view=button.dataset.view;views.forEach(item=>item.setAttribute('aria-pressed',String(item===button)))}));const note=document.querySelector('[data-bench="note-toggle"]');note.addEventListener('click',()=>note.setAttribute('aria-pressed',String(note.getAttribute('aria-pressed')!=='true')));document.querySelector('[data-bench="review-form"]').addEventListener('submit',event=>{event.preventDefault();const field=document.querySelector('[data-bench="reviewer-name"]');const value=field.value.trim();const valid=Boolean(value);field.setAttribute('aria-invalid',String(!valid));document.querySelector('[data-bench="form-status"]').textContent=valid?\`Reviewer recorded: \${value}\`:'Enter a reviewer name.';if(!valid)field.focus()});</script></body></html>\n`;
}

function design(c) {
  const p=c.palette;
  return `# ${c.title} — DESIGN.md\n\n## Visual direction\n\nQuiet ${c.domain}. Dense evidence stays legible through explicit grouping, restrained contrast, and compact geometry. This is an operational record, not a promotional dashboard.\n\n## Tokens\n\n- Canvas: \`${p.canvas}\`\n- Surface: \`${p.surface}\`\n- Ink: \`${p.ink}\`\n- Muted text: \`${p.muted}\`\n- Border: \`${p.border}\`\n- Primary action: \`${p.primary}\`\n- Accent: \`${p.accent}\`\n- Card radius: \`${c.cardRadius}px\`\n- Control radius: \`${c.cardRadius}px\`\n- Body: Arial\n- Display: Georgia\n\n## Layout\n\n- Preserve the visible relationship between every supplied record and assigned container.\n- Keep operational windows separate from the main register.\n- Keep evidence, state, and the action distinct in the decision area.\n- Narrow layouts may reflow containers, but identifiers and concise relationship evidence remain atomic.\n\n## Content\n\n- State only supplied operational facts.\n- Unknown validation and institutional acceptance remain absent.\n- Use direct labels and concise status copy.\n`;
}

function prompt(c) {
  const unitCount=c.records.reduce((sum,[,units])=>sum+units.length,0);
  return `Improve the supplied ${c.domain} so operators can inspect assignments, operational windows, and the decision confidently on desktop and narrow screens.\n\nPreserve all ${c.records.length} record identifiers, all ${unitCount} assigned container identifiers and their exact assignments, all ${c.windows.length} supplied windows, the three review views, the note toggle, the reviewer form, and all stated summary evidence. Do not invent ${c.unknowns.join(", ")}. Use the existing DESIGN.md as ground truth.\n\nFinish the implementation in \`index.html\`, exercise the supplied controls and form, and verify the same route at desktop, 390px, 320px, and 200% zoom-equivalent conditions. The record register, separate window strip, and separate decision are independent relationship carriers; all must remain visible and understandable without page-level horizontal overflow or broken atomic identifiers.\n`;
}

function baselineScorePath(c) {
  const baselineRoot = taskSet === "v13"
    ? v13BaselineRoot
    : taskSet === "v12"
    ? v12BaselineRoot
    : taskSet === "v11"
    ? v11BaselineRoot
    : taskSet === "v10"
    ? v10BaselineRoot
    : taskSet === "v9"
    ? v9BaselineRoot
    : taskSet === "v8"
    ? v8BaselineRoot
    : taskSet === "v7"
    ? v7BaselineRoot
    : taskSet === "v6"
    ? v6BaselineRoot
    : taskSet === "v5"
    ? v5BaselineRoot
    : taskSet === "v4"
    ? v4BaselineRoot
    : taskSet === "v3"
      ? v3BaselineRoot
    : taskSet === "v2"
      ? v2BaselineRoot
      : legacyBaselineRoot;
  const root = c.id === "audio-archive-ingest-v0.1" ? `${baselineRoot}-audio-v2` : baselineRoot;
  return join(root,c.id,".benchmark/score.json");
}

function normalizeBaseline(c, score) {
  const failed = Object.entries(score.critical_gates).filter(([,pass])=>pass===false).map(([gate])=>gate).sort();
  if (JSON.stringify(failed) !== JSON.stringify(["accessibility","responsive"])) {
    throw new Error(`${c.id} baseline gates are not accessibility+responsive: ${failed.join(",")}`);
  }
  return {
    schema_version:"0.1",
    source:"provider-free raw-design-md objective evaluation",
    source_score_sha256:sha256(readFileSync(baselineScorePath(c))),
    methodology_epoch:score.methodology_epoch,
    task_id:c.id,
    variant_id:"raw-design-md",
    points:{...score.points,efficiency:undefined,ship_preference:undefined,final_total:undefined},
    critical_gates:score.critical_gates,
    failed_evidence:{
      responsive:["narrow viewport page-level overflow or protected text geometry failure","320px page-level overflow or protected text geometry failure","200% surrogate page-level overflow or protected text geometry failure"],
      accessibility:["serious color contrast on normal-size canvas guidance"],
    },
  };
}

for (const c of cases) {
  const root=join(tasksRoot,c.id);
  if (phase === "draft") {
    if (existsSync(root)) throw new Error(`refusing to overwrite existing task: ${c.id}`);
    mkdirSync(join(root,"starter"),{recursive:true});
    writeFileSync(join(root,"PROMPT.md"),prompt(c));
    writeFileSync(join(root,"starter","DESIGN.md"),design(c));
    writeFileSync(join(root,"starter","index.html"),html(c));
    writeFileSync(join(root,"task.json"),json(task(c,sourceContract(c))));
    console.log(`drafted ${c.id}`);
    continue;
  }
  const scorePath=baselineScorePath(c);
  if (!existsSync(scorePath)) throw new Error(`missing provider-free baseline: ${scorePath}`);
  const score=JSON.parse(readFileSync(scorePath,"utf8"));
  const evidenceBytes=json(normalizeBaseline(c,score));
  writeFileSync(join(root,"baseline-critical-gates.json"),evidenceBytes);
  writeFileSync(join(root,"task.json"),json(task(c,sourceContract(c,"0.2",sha256(evidenceBytes)))));
  console.log(`finalized ${c.id} baseline=${score.points.deterministic_total}/${score.points.deterministic_max}`);
}
