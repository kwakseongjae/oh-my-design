#!/usr/bin/env bash
# Record a walk through an app on a connected iPhone (or a Simulator): the device's own PNG of each distinct,
# settled screen, the accessibility tree of the app in front, and the order they came in.
#
#   tools/phone-recorder/record.sh <device-id|simulator-udid> [bundle-id] [seconds] [--launch]
#
# <device-id> is the identifier `xcrun devicectl list devices` prints (a physical phone) or a Simulator UDID.
# [bundle-id] is the app whose tree is read (omit for screenshots only); --launch brings it to the front first,
# otherwise the phone is left as it is and you open the app yourself. Default 90 seconds, at most 60 frames.
#
# The phone must be unlocked, paired with this Mac, with Developer Mode on. The first run installs two small apps
# on it ("Recorder" and its test runner), signed with your development team; delete them from the home screen to
# remove. Nothing leaves this Mac: frames go to ~/.omd-workers/screens/walks/<name>/ and are not in the repository.
# A signed-in phone shows personal data on most screens: look through a walk before sharing any frame.
set -euo pipefail
DEV=${1:?usage: record.sh <device-id> [bundle-id] [seconds] [--launch]}; BUNDLE=${2:-}; SECS=${3:-90}; LAUNCH=0
for a in "$@"; do [ "$a" = "--launch" ] && LAUNCH=1; done
HERE=$(cd "$(dirname "$0")" && pwd)
OUT_ROOT=${OMD_SCREENS_HOME:-$HOME/.omd-workers/screens}
STAMP=$(date +%Y%m%d-%H%M%S)
WALK="$OUT_ROOT/walks/${BUNDLE:-screen}-$STAMP"
DD="$OUT_ROOT/build"
mkdir -p "$WALK" "$DD"
cd "$HERE"
[ -d PhoneRecorder.xcodeproj ] || xcodegen generate >/dev/null
if xcrun simctl list devices | grep -q "$DEV"; then
  DEST="platform=iOS Simulator,id=$DEV"; SIGN=()
else
  DEST="id=$DEV"
  TEAM=$(security find-certificate -a -c "Apple Development" -p | openssl x509 -noout -subject | sed -E 's/.*OU ?= ?([A-Z0-9]{10}).*/\1/' | head -1)
  [ ${#TEAM} -eq 10 ] || { echo "no Apple Development certificate in the keychain" >&2; exit 2; }
  SIGN=(-allowProvisioningUpdates "DEVELOPMENT_TEAM=$TEAM")
fi
echo "recording $SECS s on $DEV${BUNDLE:+ ($BUNDLE)} …"
TEST_RUNNER_REC_BUNDLE="$BUNDLE" TEST_RUNNER_REC_LAUNCH="$LAUNCH" TEST_RUNNER_REC_SECONDS="$SECS" \
  xcodebuild test -project PhoneRecorder.xcodeproj -scheme Recorder -destination "$DEST" -derivedDataPath "$DD" \
  -resultBundlePath "$WALK/result.xcresult" ${SIGN[@]+"${SIGN[@]}"} > "$WALK/xcodebuild.log" 2>&1 \
  || { grep -E "error|locked|could not" "$WALK/xcodebuild.log" | head -5 >&2; echo "recording failed; see $WALK/xcodebuild.log" >&2; exit 1; }
xcrun xcresulttool export attachments --path "$WALK/result.xcresult" --output-path "$WALK/raw" >/dev/null
python3 - "$WALK" <<'PY'
import json, pathlib, shutil, sys
walk = pathlib.Path(sys.argv[1]); raw = walk / "raw"
for test in json.loads((raw / "manifest.json").read_text()):
    for a in test.get("attachments", []):
        name = a["suggestedHumanReadableName"]            # frame-001_0_<uuid>.png, frame-001.tree_0_<uuid>.json, flow_0_<uuid>.json
        stem, _, rest = name.partition("_0_")
        ext = pathlib.Path(rest or name).suffix
        shutil.move(str(raw / a["exportedFileName"]), str(walk / (stem + ext)))
shutil.rmtree(raw); shutil.rmtree(walk / "result.xcresult", ignore_errors=True)
flow = json.loads((walk / "flow.json").read_text())
print(f"{len(flow['frames'])} frame(s) from {flow['device']} (iOS {flow['system']}) → {walk}")
for f in flow["frames"]:
    print(f"  {f['frame']}  t={f['t']:.1f}s  {int(f['width'])}x{int(f['height'])}  tree: {f.get('tree', 'none')}")
PY
