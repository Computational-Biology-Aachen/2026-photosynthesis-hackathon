<script lang="ts">
  import type { Participant } from "$lib/types";
  import {
    H1,
    Link,
    Section,
    SectionHeader,
    Text,
  } from "@computational-biology-aachen/design";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  const images = import.meta.glob(["$lib/assets/participants/*"], {
    eager: true,
    query: "?url",
    import: "default",
  });

  let { data } = $props();
  // svelte-ignore state_referenced_locally
  let person: Participant = data.meta;
  // svelte-ignore state_referenced_locally
  let filename = `/participants/${data.slug.split("/").at(-1)}.jpg`;
  let img: string =
    (images[`/src/lib/assets${filename}`] as string) ||
    "/src/lib/assets/people/placeholder.jpg";

  let imageError = $state(false);

  function handleError() {
    imageError = true;
  }
  const name: string = person.name;
  const mail: string | undefined = person.mail;
  const institution: string | undefined = person.institution;
  const nationality: string | undefined = person.nationality;
</script>

<svelte:head>
  <title>{person.name} - 2026 Photosynthesis Hackathon</title>
  <meta
    property="og:type"
    content="article"
  />
</svelte:head>

<SectionHeader width="narrow">
  <div class="grid">
    <div class="info">
      <H1 color="light">{name}</H1>
      {#if nationality != null}
        <Text color="white">{nationality}</Text>
      {/if}
      {#if institution != null}
        <Text color="white">{institution}</Text>
      {/if}
      {#if mail != null}
        <Link
          color="light"
          href="mailto:{mail}"><Fa icon={faEnvelope} /></Link
        >
      {/if}
    </div>
    {#if imageError}
      <div class="placeholder">
        <span>Image not found</span>
      </div>
    {:else}
      <img
        src={img}
        alt={name}
        onerror={handleError}
      />
    {/if}
  </div>
</SectionHeader>

<Section width="narrow"><data.content /></Section>

<style>
  .grid {
    display: grid;
    margin: 0 auto;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 300px;
    }
  }

  img {
    object-fit: cover;
    margin: 0 auto;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 4px solid var(--color-bg);
  }

  .placeholder {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    color: var(--color-bg);
    background-color: var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    border: 4px solid var(--color-bg);
  }
</style>
