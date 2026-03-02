<script lang="ts">
	import TrainerCard from '$lib/cards/TrainerCard.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import Text from '$lib/text/Text.svelte';
	import type { Trainer } from '$lib/types';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	let members: Trainer[] = data.members;
	const link = 'trainers';
</script>

<Header>
	<H1 color="white">Trainers</H1>
	<Text color="white">
		Get to know our distinguished team of trainers at the forefront of
		photosynthesis research, quantitative genetics, and data-driven plant
		science. Combining deep domain expertise with hands-on experience, they
		bring rigorous scientific insight and practical guidance to every stage of
		the hackathon. Their leadership ensures participants gain both cutting-edge
		knowledge and the skills to translate data into biological understanding.</Text>
</Header>

<Section>
	<div class="grid">
		{#each members as { slug, name }}
			<TrainerCard
				title={name}
				{link}
				{slug}>
			</TrainerCard>
		{/each}
	</div>
</Section>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
		grid-gap: 1rem;

		@media (min-width: 650px) {
			grid-template-columns: 1fr 1fr;
			grid-gap: 1.25rem;
		}
		@media (min-width: 1100px) {
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 1.5rem;
		}
		@media (min-width: 1200px) {
			grid-gap: 1.75rem;
		}
	}
</style>
