<script lang="ts">
	import type { Trainer } from '$lib/types';
	import {
		H1,
		Link,
		Section,
		SectionHeader,
		Text
	} from '@computational-biology-aachen/design';
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
	// svelte-ignore state_referenced_locally
	let person: Trainer = data.meta;
	// svelte-ignore state_referenced_locally
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
	const affiliation: string | undefined = person.affiliation;
	const city: string | undefined = person.city;
	const country: string | undefined = person.country;
</script>

<svelte:head>
	<title>{person.name} - 2026 Photosynthesis Hackathon</title>
	<meta
		property="og:type"
		content="article" />
</svelte:head>

<SectionHeader width="narrow">
	<div class="grid">
		<div class="info">
			<H1 color="light">{name}</H1>
			{#if affiliation != null}
				<Text color="white">{affiliation}</Text>
			{/if}
			{#if city != null}
				<Text color="white">{city}</Text>
			{/if}
			{#if country != null}
				<Text color="white">{country}</Text>
			{/if}
			{#if mail != null}
				<Link
					color="light"
					href="mailto:{mail}"><Fa icon={faEnvelope} /></Link>
			{/if}
			{#if github != null}
				<Link
					color="light"
					href={github}><Fa icon={faGithub} /></Link>
			{/if}
			{#if gitlab != null}
				<Link
					color="light"
					href={gitlab}><Fa icon={faGitlab} /></Link>
			{/if}
			{#if orcid != null}
				<Link
					color="light"
					href={orcid}><Fa icon={faOrcid} /></Link>
			{/if}
			{#if website != null}
				<Link
					color="light"
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
