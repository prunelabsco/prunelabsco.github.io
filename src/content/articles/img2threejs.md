---
title: This 3D Model Is Just Code
summary: "img2threejs takes one reference image and writes a Three.js model from primitives and procedural shaders. No mesh files, no downloads."
published: 2026-12-14
category: Repos
---

- Repo: [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs)

You give it one reference image, and it writes a Three.js model from primitives and procedural shaders. No mesh files, no downloads. 21K stars on GitHub (as of Nov 25, 2026), Apache 2.0.

The README is clear about what it isn't: reconstruction by code, not photogrammetry, mesh extraction, or downloaded art packs.

## It builds in passes

1. Blockout
2. Structure
3. Form
4. Material
5. Surface
6. Lighting

Then interaction and optimization. After each pass it looks at the render and fixes what's off.

## Install

```bash
npx --yes img2threejs@latest install
```

It runs in Claude Code, Codex, OpenCode and Hermes. You need Node.js 18+, Git and Python 3.10+.

## My take

Editable code instead of a mesh is the real win. Just know the model grades its own homework: the same model that builds it judges the render. I haven't tested how close it gets to the photo.
