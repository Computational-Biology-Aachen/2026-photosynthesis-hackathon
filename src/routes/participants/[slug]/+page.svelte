<script lang="ts">
	import Link from '$lib/Link.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import Text from '$lib/text/Text.svelte';
	import type { Participant } from '$lib/types';
	import {
		faGithub,
		faGitlab,
		faOrcid
	} from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	const images = import.meta.glob(['$lib/assets/people/*'], {
		eager: true,
		query: '?url',
		import: 'default'
	});

	let { data } = $props();
	let person: Participant = data.meta;

	let filename = `/people/${data.slug.split('/').at(-1)}.jpg`;
	let img: string =
		(images[`/src/lib/assets${filename}`] as string)
		|| '/src/lib/assets/people/placeholder.jpg';

	let imageError = $state(false);

	function handleError() {
		imageError = true;
	}
	const name: string = person.name;
	const mail: string | undefined = person.mail;
	const github: string | undefined = person.github;
	const gitlab: string | undefined = person.gitlab;
	const website: string | undefined = person.website;
	const orcid: string | undefined = person.orcid;
</script>

<svelte:head>
	<title>{person.name}</title>
	<meta
		property="og:type"
		content="article" />
</svelte:head>

<Section color="primary">
	<div class="grid">
		<div class="info">
			<H1 color="white">{name}</H1>
			<Text color="white">Department of Biology</Text>
			<Text color="white"
				>Faculty of Mathematics, Computer Science and Natural Sciences</Text>
			<!-- <Text color="white">anna.matuszynska@rwth-aachen.de</Text> -->
			<Text color="white">Worringerweg 1 52074 Aachen</Text>
			{#if mail != null}
				<Link
					color="white"
					href="mailto:{mail}"><Fa icon={faEnvelope} /></Link>
			{/if}
			{#if github != null}
				<Link
					color="white"
					href={github}><Fa icon={faGithub} /></Link>
			{/if}
			{#if gitlab != null}
				<Link
					color="white"
					href={gitlab}><Fa icon={faGitlab} /></Link>
			{/if}
			{#if orcid != null}
				<Link
					color="white"
					href={orcid}><Fa icon={faOrcid} /></Link>
			{/if}
			{#if website != null}
				<Link
					color="white"
					href={website}><Fa icon={faHome} /></Link>
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
				onerror={handleError} />
		{/if}
	</div>
</Section>

<Section><data.content /></Section>

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
		margin: 0 auto;
		width: 300px;
		height: 300px;
		border-radius: 50%;
		border: 4px solid var(--white);
	}

	.placeholder {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		color: var(--white);
		background-color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
		border: 4px solid var(--white);
	}
</style>
