#!/bin/sh
set -eu

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
artifact=${OMD_REFLOW_ARTIFACT:-.omd/reflow-closure.json}

if [ ! -f "$artifact" ]; then
  echo "reflow-browser-runner: missing artifact: $artifact" >&2
  exit 2
fi

product=${OMD_REFLOW_PRODUCT:-$(
  node --input-type=module -e '
    import { readFileSync } from "node:fs";
    const artifact = JSON.parse(readFileSync(process.argv[1], "utf8"));
    const product = artifact?.static_closure_manifest?.product_path;
    if (typeof product !== "string" || !product) process.exit(2);
    process.stdout.write(product);
  ' "$artifact"
)}

if [ -z "$product" ]; then
  echo "reflow-browser-runner: artifact has no locked product path" >&2
  exit 2
fi

export OMD_REFLOW_ARTIFACT="$artifact"
export OMD_REFLOW_PRODUCT="$product"
export OMD_REFLOW_HELPER="${OMD_REFLOW_HELPER:-$script_dir/reflow-artifact.mjs}"

exec browser-harness < "$script_dir/reflow-browser.py"
