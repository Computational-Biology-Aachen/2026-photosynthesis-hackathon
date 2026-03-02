<script>
	import { base } from '$app/paths';
	import R2 from '$lib/R2.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Main from '$lib/sections/Main.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import H6 from '$lib/text/H6.svelte';
	import Text from '$lib/text/Text.svelte';
</script>

<Header>
	<H1 color="white">Contact us</H1>
</Header>

<Main>
	<Section>
		<R2>
			<img
				src="{base}/people-working.png"
				alt="people working" />
			<div>
				<H2 color="secondary">You can find us at</H2>

				<H6 color="secondary">EMAIL</H6>
				<Text>anna.matuszynska@cpbl.rwth-aachen.de</Text>

				<H6 color="secondary">PHONE</H6>
				<Text>Tel.: +49 (241) 80 25817</Text>

				<H6 color="secondary">LOCATION</H6>
				<Text>Computational Life Science</Text>
				<Text>Department of Biology</Text>
				<Text>RWTH Aachen University</Text>
				<Text>Sammelbau Biologie 1, 42C041</Text>
				<Text>Worringerweg 1 (Campus Melaten)</Text>
				<Text>52074 Aachen, Germany</Text>
			</div>
		</R2>
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
