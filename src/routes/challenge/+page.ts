import type { Component } from "svelte";

type MdModule = {
  default: Component;
  metadata: Record<string, unknown>;
};

export function load() {
  const pages = import.meta.glob<MdModule>("../../md/challenge.md", {
    eager: true,
  });
  const page = Object.values(pages)[0];
  return { ...page };
}
