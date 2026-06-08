# 2026 Photosynthesis Hackathon

Site for the JII Open Challenge — "Hacking for Photosynthesis: From Field Photosynthesis to Genetic Architecture", a fast-paced hackathon bringing together data scientists and plant biologists. SvelteKit 5, adapter-static. Deployed at `/2026-photosynthesis-hackathon`.

Routes cover the challenge, participants, trainers, and contact pages. Styling and shared UI come from the lab [`@computational-biology-aachen/design`](https://github.com/Computational-Biology-Aachen/design) system (design tokens + Svelte components).

## Dev

```bash
npm install
npm run dev          # dev server on :5173 (add `-- --open` to open a browser)
npm run build        # static build → build/
npm run preview      # preview the build
npm run check        # TypeScript + Svelte type checking
npm run lint         # Prettier + ESLint check
npm run format       # auto-format with Prettier
```
