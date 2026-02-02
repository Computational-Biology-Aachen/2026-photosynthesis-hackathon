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

	const images = import.meta.glob(['$lib/assets/participants/*'], {
		eager: true,
		query: '?url',
		import: 'default'
	});

	let { data } = $props();
	let person: Participant = data.meta;

	let filename = `/participants/${data.slug.split('/').at(-1)}.jpg`;
	let img: string =
		(images[`/src/lib/assets${filename}`] as string)
		|| '/src/lib/assets/people/placeholder.jpg';

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
	<title>{person.name}</title>
	<meta
		property="og:type"
		content="article" />
</svelte:head>

<Section color="primary">
	<div class="grid">
		<div class="info">
			<H1 color="white">{name}</H1>
			{#if nationality != null}
				<Text color="white">{nationality}</Text>
			{/if}
			{#if nationality != null}
				<Text color="white">{institution}</Text>
			{/if}
			{#if mail != null}
				<Link
					color="white"
					href="mailto:{mail}"><Fa icon={faEnvelope} /></Link>
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
		object-fit: cover;
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
