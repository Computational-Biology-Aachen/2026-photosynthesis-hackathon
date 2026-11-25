import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    mdsvex({
      extensions: [".md"],
      templates: { default: "./src/lib/MdDisplay.svelte" },
      smart_punctuation: true,
    }),
    sveltekit({
      extensions: [".svelte", ".md"],
      preprocess: [vitePreprocess()],
      adapter: adapter({
        pages: "build",
        assets: "build",
        precompress: false,
        strict: true,
        fallback: "404.html",
      }),
      paths: {
        base: process.argv.includes("dev")
          ? ""
          : "/2026-photosynthesis-hackathon",
      },
      version: {
        // Poll for new deploys so long-lived tabs upgrade proactively instead of
        // only recovering reactively after a failed navigation.
        pollInterval: 300_000,
      },
    }),
  ],
  server: { port: 5180, strictPort: true },
});
