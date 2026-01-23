<script lang="ts">
	import GridPerson from '$lib/GridPerson.svelte';
	import Person from '$lib/cards/Person.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Main from '$lib/sections/Main.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import Text from '$lib/text/Text.svelte';
	import type { Member } from '$lib/types';

	let { data } = $props();
	let members: Member[] = data.members;
</script>

<Header>
	<H1 color="white">Participants</H1>
	<Text color="white">...</Text>
</Header>
<Main>
	<Section>
		<GridPerson>
			{#each members as { slug, name }}
				<Person
					title={name}
					{slug}></Person>
			{/each}
		</GridPerson>
	</Section>
</Main>
