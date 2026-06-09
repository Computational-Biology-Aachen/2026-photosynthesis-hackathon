<script lang="ts">
  import type { Participant } from "$lib/types";
  import {
    CardPerson,
    GridPerson,
    H1,
    Section,
    SectionHeader,
    Text,
  } from "@computational-biology-aachen/design";

  const images = import.meta.glob(["$lib/assets/participants/*"], {
    eager: true,
    query: "?url",
    import: "default",
  });

  const placeholder = import.meta.glob(["$lib/assets/people/placeholder.jpg"], {
    eager: true,
    query: "?url",
    import: "default",
  });

  function resolveImg(slug: string): string | undefined {
    const key = `/src/lib/assets/participants/${slug}.jpg`;
    return (
      (images[key] as string) ??
      (placeholder["/src/lib/assets/people/placeholder.jpg"] as string) ??
      undefined
    );
  }

  let { data } = $props();
  // svelte-ignore state_referenced_locally
  let members: Participant[] = data.members;
</script>

<svelte:head>
  <title>Participants - 2026 Photosynthesis Hackathon</title>
</svelte:head>

<SectionHeader width="narrow">
  <H1 color="light">Participants</H1>
  <Text color="white">Get to know all the participants in this hackathon.</Text>
</SectionHeader>

<Section width="narrow">
  <GridPerson columns={5}>
    {#each members as { slug, name } (slug)}
      <CardPerson
        title={name}
        slug={slug}
        href="participants/{slug}"
        img={resolveImg(slug)}
      />
    {/each}
  </GridPerson>
</Section>
