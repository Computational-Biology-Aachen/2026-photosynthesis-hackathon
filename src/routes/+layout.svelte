<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { updated } from "$app/state";
  import * as config from "#lib/config.js";
  import {
    CollapseToBurger,
    Imprint,
    Navbar,
    NavItem,
  } from "@computational-biology-aachen/design";
  import "../app.css";

  let { children } = $props();

  // A new deploy was detected while this tab was open: force a full reload on
  // the next navigation instead of client-side routing into a stale bundle.
  beforeNavigate(({ willUnload, to }) => {
    if (updated.current && !willUnload && to?.url) {
      location.href = to.url.href;
    }
  });
</script>

<!-- SEO -->
<svelte:head>
  <title>2026 Photosynthesis Hackathon</title>
  <meta
    name="description"
    content={config.description}
  />
  <meta
    property="og:title"
    content={config.title}
  />
  <meta
    property="og:description"
    content={config.description}
  />
  <meta
    property="og:url"
    content={config.url}
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    name="twitter:card"
    content="summary"
  />
</svelte:head>

<Navbar>
  {#snippet brand()}
    <span class="brand">Photosynthesis Hackathon</span>
  {/snippet}
  <CollapseToBurger>
    <NavItem href={resolve("/")}>Home</NavItem>
    <NavItem href={resolve("/trainers")}>Trainers</NavItem>
    <NavItem href={resolve("/challenge")}>Challenge</NavItem>
    <NavItem href={resolve("/participants")}>Participants</NavItem>
    <NavItem href={resolve("/contact")}>Contact</NavItem>
  </CollapseToBurger>
</Navbar>

{@render children()}

<Imprint
  github="https://github.com/Computational-Biology-Aachen/2026-photosynthesis-hackathon"
/>

<style>
  .brand {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }
</style>
