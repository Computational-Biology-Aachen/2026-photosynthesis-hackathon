<script lang="ts">
  import {
    H1,
    Section,
    SectionHeader,
  } from "@computational-biology-aachen/design";

  let { data } = $props();
  // svelte-ignore state_referenced_locally
  let page = data;
</script>

<svelte:head>
  <title>Challenge - 2026 Photosynthesis Hackathon</title>
</svelte:head>

<SectionHeader width="narrow">
  <H1 color="light">Challenge</H1>
</SectionHeader>

<Section width="narrow">
  <page.default />
</Section>
