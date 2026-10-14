import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex, type MdsvexOptions } from "mdsvex";
import { createHighlighter } from "shiki";
import { defineConfig } from "vite";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path_to_layout = join(__dirname, "./src/lib/MdDisplay.svelte");

const mdsvexOptions: MdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await createHighlighter({
        themes: ["poimandres"],
        langs: ["javascript", "typescript"],
      });
      await highlighter.loadLanguage("javascript", "typescript");
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang: lang ?? "text",
          theme: "poimandres",
        }),
      );
      return `{@html \`${html}\` }`;
    },
  },
  layout: path_to_layout,
};

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: [".svelte", ".md"],
      preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
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
