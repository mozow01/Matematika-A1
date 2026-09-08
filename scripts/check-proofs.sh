#!/usr/bin/env bash
set -euo pipefail

proof_dir="examples/eloadas_01"
set_base="$proof_dir/set_algebra_base.v"
set_definitions="$proof_dir/set_algebra_definitions.v"

coqc "$set_base"
coqc "$set_definitions"

for proof in "$proof_dir"/*.v; do
  case "$(basename "$proof")" in
    set_algebra_base.v|set_algebra_definitions.v)
      ;;
    empty_subset.v|set_*.v)
      coqc -l "$set_definitions" "$proof"
      ;;
    *)
      coqc "$proof"
      ;;
  esac
done
