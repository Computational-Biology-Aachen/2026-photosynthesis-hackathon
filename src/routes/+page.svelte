<script>
	import { base } from '$app/paths';
	import BtnGrp from '$lib/BtnGrp.svelte';
	import ButtonGroup from '$lib/ButtonGroup.svelte';
	import Footer from '$lib/Footer.svelte';
	import GridSponsor from '$lib/GridSponsor.svelte';
	import Hero from '$lib/Hero.svelte';
	import Button from '$lib/pico/Button.svelte';
	import Link from '$lib/pico/Link.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import Bold from '$lib/pico/text/Bold.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import H2 from '$lib/pico/text/H2.svelte';
	import Text from '$lib/pico/text/Text.svelte';
	import R2 from '$lib/R2.svelte';
	import Sponsor from '$lib/Sponsor.svelte';
</script>

<Hero />
<Section>
	<R2>
		<img src="hand.png" alt="placeholder" />
		<div>
			<H1 color="secondary">Photosynthesis hackathon</H1>
			<Text
				>Building stress-resilient crops is crucial for consistent yields under climate change, as
				enhancing tolerance to drought or high light directly boosts productivity.</Text
			>
			<Text>Let's understand it together in a Hackathon Workshop!</Text>
			<Text><Bold>When?</Bold> 09. - 13.03.2026</Text>
			<Text><Bold>Where?</Bold> TBD</Text>
			<Text><Bold>Registration opens:</Bold> TBA</Text>
			<Text><Bold>Registration open until:</Bold> 9.11</Text>

			<ButtonGroup>
				<BtnGrp href="{base}/presenters">Presenters</BtnGrp>
				<BtnGrp href="{base}/info">Info</BtnGrp>
				<BtnGrp href="{base}/apply" disabled={true}>Apply</BtnGrp>
			</ButtonGroup>
		</div>
	</R2>
</Section>
<Section color="secondary">
	<H2 color="white">Sponsors</H2>
	<GridSponsor>
		<Sponsor name="" href="{base}/" img="{base}/placeholder.jpg" />
		<Sponsor name="" href="{base}/" img="{base}/placeholder.jpg" />
		<Sponsor name="" href="{base}/" img="{base}/placeholder.jpg" />
	</GridSponsor>
</Section>
<Section color="white">
	<H2 color="secondary">Questions</H2>
	<Text
		>Whether you're curious about features, research, or publication, we're here to answer any
		questions.</Text
	>
	<Button><Link color="white" href="contact">Let's Talk Now</Link></Button>
</Section>
<Footer />

<style>
	img {
		display: none;
	}
	@media screen and (min-width: 800px) {
		img {
			display: block;
			max-width: 100%;
			margin: 0 auto 1rem;
		}
	}
</style>
