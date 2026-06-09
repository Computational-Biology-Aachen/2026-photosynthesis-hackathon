<script lang="ts">
  import type { Trainer } from "$lib/types";
  import {
    CardPerson,
    GridPerson,
    H1,
    Section,
    SectionHeader,
    Text,
  } from "@computational-biology-aachen/design";

  const images = import.meta.glob(["$lib/assets/people/*"], {
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
    const key = `/src/lib/assets/people/${slug}.jpg`;
    return (
      (images[key] as string) ??
      (placeholder["/src/lib/assets/people/placeholder.jpg"] as string) ??
      undefined
    );
  }

  let { data } = $props();
  // svelte-ignore state_referenced_locally
  let members: Trainer[] = data.members;
</script>

<svelte:head>
  <title>Trainers - 2026 Photosynthesis Hackathon</title>
</svelte:head>

<SectionHeader width="narrow">
  <H1 color="light">Trainers</H1>
  <Text color="white">
    Get to know our distinguished team of trainers at the forefront of
    photosynthesis research, quantitative genetics, and data-driven plant
    science. Combining deep domain expertise with hands-on experience, they
    bring rigorous scientific insight and practical guidance to every stage of
    the hackathon. Their leadership ensures participants gain both cutting-edge
    knowledge and the skills to translate data into biological understanding.</Text
  >
</SectionHeader>

<Section width="narrow">
  <GridPerson
    columns={3}
    gap="var(--space-8)"
  >
    {#each members as { slug, name } (slug)}
      <CardPerson
        title={name}
        slug={slug}
        href="trainers/{slug}"
        img={resolveImg(slug)}
      />
    {/each}
  </GridPerson>
</Section>
