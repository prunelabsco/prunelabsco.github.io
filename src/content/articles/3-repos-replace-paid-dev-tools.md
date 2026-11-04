---
title: 3 Repos That Replace Paid Dev Tools
summary: Three common monthly bills for developers building with AI (hosting, voice, prompt testing) and the repos that can replace them.
published: 2026-10-18
category: Repos
youtube: https://www.youtube.com/watch?v=tcQuCnApcEU
instagram: https://www.instagram.com/reel/DenWKMpkmJi/
---

## 1. Coolify, for hosting

A self-hosted alternative to Vercel, Netlify and Heroku. You deploy your apps and databases on your own server instead of paying per project.

- Repo: [coollabsio/coolify](https://github.com/coollabsio/coolify)
- License: Apache-2.0
- You need: a server you control (a VPS works)

## 2. Fish Speech, for voice

A text-to-speech model you can run on your own machine, instead of paying for a voice API.

- Repo: [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)
- License: the code and the model weights use the Fish Audio Research License, not a standard open source license. **Read it before any commercial use.**
- You need: hardware that can run the model. Check the README for current requirements.

## 3. Promptfoo, for testing prompts

Test your prompts, compare models, and red-team your AI app before your users find the problems.

- Repo: [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)
- License: MIT
- Evals can run fully on your machine. The README says Promptfoo is now part of OpenAI and stays open source.

## If you only try one

Start with **Promptfoo**. It works with the stack you already have: no server, no GPU.

> I'm not quoting savings here. What you save depends on what you pay now, and I didn't measure it.

Facts checked against each repo's README on 11 October 2026. Licenses change, so check again before you depend on one.
