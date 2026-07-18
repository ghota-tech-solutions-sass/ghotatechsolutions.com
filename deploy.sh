#!/bin/sh
set -eu

ROOT="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT"

command -v bun >/dev/null 2>&1 || { echo "Bun is required." >&2; exit 2; }
command -v gh >/dev/null 2>&1 || { echo "GitHub CLI is required." >&2; exit 2; }

BRANCH="$(git branch --show-current)"
[ -n "$BRANCH" ] || { echo "Deploy from a named branch." >&2; exit 2; }
[ -z "$(git status --porcelain --untracked-files=no)" ] || {
  echo "Commit tracked website changes before deployment." >&2
  exit 1
}

bun install --frozen-lockfile
bun run lint
bun run build

git fetch origin "$BRANCH"
[ "$(git rev-parse HEAD)" = "$(git rev-parse "origin/$BRANCH")" ] || {
  echo "Push the exact reviewed commit before deployment." >&2
  exit 1
}

gh workflow run deploy.yml --ref "$BRANCH"
echo "GitHub Pages deployment requested for $BRANCH."
echo "Follow it with: gh run watch --exit-status"
