<script>
	import { base } from '$app/paths';
	import Li from '$lib/pico/lists/Li.svelte';
	import Ul from '$lib/pico/lists/Ul.svelte';
	import Header from '$lib/pico/sections/Header.svelte';
	import Main from '$lib/pico/sections/Main.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import Bold from '$lib/pico/text/Bold.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import H2 from '$lib/pico/text/H2.svelte';
	import H6 from '$lib/pico/text/H6.svelte';
	import Text from '$lib/pico/text/Text.svelte';
	import R2 from '$lib/R2.svelte';
</script>

<Header>
	<H1 color="white">Info</H1>
</Header>

<Main>
	<Section>
		<R2>
			<img
				src="{base}/people-working.png"
				alt="people working" />
			<div>
				<H2 color="secondary">Important dates</H2>
				<H6 color="secondary">Date of the hackathon</H6>
				<Text>09. - 13.03.2026</Text>

				<H6 color="secondary">Registration closes</H6>
				<Text>9.11</Text>

				<H6 color="secondary">Shortlisting</H6>
				<Text>10-15.11</Text>

				<H6 color="secondary">Announcements</H6>
				<Text>16.11</Text>
			</div>
		</R2>
	</Section>
	<Section color="secondary">
		<H2 color="white">Organizing Committee</H2>
		<Ul>
			<Li color="white">Prof. Dr. Anna Matuszyńska / Coordinator</Li>
			<Li color="white">Dr. Marvin van Aalst, RWTH Aachen</Li>
			<Li color="white">Dr Johannes Kromdijk, Universitz of Cambridge</Li>
			<Li color="white">Dr. Sansa Olakunle, IITA</Li>
			<Li color="white">Dr. Tom Theeuwen, JII</Li>
			<Li color="white">Prof. Dr. David M. Kramer, JII</Li>
		</Ul>
	</Section>
	<Section>
		<H2>Data</H2>
		<Text>Describe the JII and obtained data here.</Text>
	</Section>
	<Section color="primary">
		<H2 color="white">Program overview</H2>
		<Text color="white">The event runs over <Bold>five days</Bold>:</Text>
		<Ul>
			<Li color="white"
				><Bold>Days 1-2:</Bold> Interactive lectures and hands-on sessions introduce
				the challenge and datasets, ensuring all participants share a common foundation.</Li>
			<Li color="white"
				><Bold>Days 3-4 (first half):</Bold> Teams work intensively on the hackathon
				challenge, developing solutions and preparing their pitches.</Li>
			<Li color="white"
				><Bold>Day 4 (second half):</Bold> Final presentations take place at an open
				outreach event for the host institution and wider community.</Li>
			<Li color="white"
				><Bold>Day 5:</Bold> Participants shape follow-up actions and explore opportunities
				for continued collaboration</Li>
		</Ul>
	</Section>
</Main>

<style>
	img {
		display: none;
	}
	@media (min-width: 64rem) {
		img {
			display: block;
			max-width: 100%;
			margin: 0 auto 1rem;
		}
	}
</style>
