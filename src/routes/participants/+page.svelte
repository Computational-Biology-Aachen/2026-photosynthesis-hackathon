<script lang="ts">
	import PersonCard from '$lib/cards/PersonCard.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import Text from '$lib/text/Text.svelte';
	import type { Member } from '$lib/types';

	let { data } = $props();
	let members: Member[] = data.members;
</script>

<Header>
	<H1 color="white">Participants</H1>
	<Text color="white">Get to know all the participants in this hackathon.</Text>
</Header>

<Section>
	<div class="grid">
		{#each members as { slug, name }}
			<PersonCard
				title={name}
				{slug}>
			</PersonCard>
		{/each}
	</div>
</Section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		align-items: center;
		justify-content: center;
		grid-gap: 10px;
	}
</style>
