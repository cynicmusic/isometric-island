# Publishing Discipline

Local sim state is the source of truth.

- `presets.json` at the repo root is the live local/dev preset bank written by Vite.
- `public/presets.json` is only the committed/static projection that GitHub Pages serves.
- Before publishing, always stomp `public/presets.json` with root `presets.json`.
- Do not compare production presets against local as if production is authoritative. GitHub Pages is downstream.

Fast publish flow:

```sh
cp presets.json public/presets.json
npm run build
git add public/presets.json src package.json package-lock.json scripts
git commit -m "Checkpoint ..."
git push origin main

rm -rf /tmp/isometric-gh-pages
git worktree add /tmp/isometric-gh-pages gh-pages
rsync -a --delete --exclude .git dist/ /tmp/isometric-gh-pages/
cd /tmp/isometric-gh-pages
git add -A
git commit -m "Deploy ..."
git push origin gh-pages
```

Action note:

A GitHub Action can build and deploy committed code plus committed `public/presets.json`, but it cannot see ignored local `presets.json`. If we automate deploy, keep a local helper script for the first step (`presets.json` -> `public/presets.json`) or stop ignoring root presets.
