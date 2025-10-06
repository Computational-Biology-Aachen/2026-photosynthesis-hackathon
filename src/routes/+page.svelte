<script>
	import { resolve } from '$app/paths';
	import BtnGrp from '$lib/BtnGrp.svelte';
	import ButtonGroup from '$lib/ButtonGroup.svelte';
	import Footer from '$lib/Footer.svelte';
	import GridSponsor from '$lib/GridSponsor.svelte';
	import Hero from '$lib/Hero.svelte';
	import Button from '$lib/pico/Button.svelte';
	import Link from '$lib/pico/Link.svelte';
	import Li from '$lib/pico/lists/Li.svelte';
	import Ul from '$lib/pico/lists/Ul.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import Bold from '$lib/pico/text/Bold.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import H2 from '$lib/pico/text/H2.svelte';
	import Text from '$lib/pico/text/Text.svelte';
	import R2 from '$lib/R2.svelte';
	import Sponsor from '$lib/Sponsor.svelte';

	import jiiLogo from '$lib/assets/jan-ingenhousz-institute-logo.png';
	import mcLogo from '$lib/assets/mastercard-climate.png';
</script>

<svelte:head>
	<title>Photosynthesis hackathon</title>
</svelte:head>

<Hero />
<Section color="white">
	<R2>
		<img
			src="hand.png"
			alt="placeholder" />
		<div>
			<H1 color="secondary">Photosynthesis hackathon</H1>
			<Text>
				How do genetic differences shape the way plants capture light, process
				carbon, and survive drought? Join us for <Bold
					>“Hacking for Photosynthesis: From Field Photosynthesis to Genetic
					Architecture”</Bold
				>: a unique, fast-paced hackathon bringing together data scientists,
				plant researchers, software engineers, and innovators to uncover the
				links between <Bold
					>genotypic variation and photosynthetic performance.</Bold
				></Text>
			<Text><Bold>When?</Bold> 09. - 13.03.2026</Text>
			<Text
				><Bold>Where?</Bold> International Institute of Tropical Agriculture (IITA),
				Ibadan, Nigeria</Text>
			<Text><Bold>Registration opens:</Bold> TBA</Text>
			<Text><Bold>Registration open until:</Bold> 9th of November</Text>
			<Text
				>📅 Apply now and be part of a new community driving innovation at the
				intersection of genetics, physiology, and data.</Text>
		</div>
	</R2>
	<Text
		>The hackathon is hosted at the International Institute of Tropical
		Agriculture (IITA) in Ibadan, Nigeria. <Bold
			>Travel support may be available for selected participants</Bold
		>.</Text>
	<Text>Over five days, participants will</Text>
	<Ul>
		<Li>
			Dive into curated, real-world datasets provided by JanIngenhousz Institute
		</Li>
		<Li>
			Explore photosynthesis traits, genetic variation, and environmental
			interactions
		</Li>
		<Li>
			Work in interdisciplinary teams to tackle a high-impact research
			challenge. Present their findings at a public outreach event
		</Li>
		<Li>Build lasting connections and shape future collaborations</Li>
	</Ul>
	<Text>
		We're looking for <Bold>data scientists</Bold>, <Bold
			>plant physiologists</Bold
		>,
		<Bold>geneticists</Bold>, <Bold>engineers</Bold>, <Bold>breeders</Bold>, <Bold
			>policy specialists</Bold
		>, and <Bold>motivated problem solvers</Bold> at Master's level and above. Bring
		your skills — and your curiosity — to help push the boundaries of crop improvement
		and climate resilience.
	</Text>
	<Text>Application from both Europe and Africa is highly encouraged.</Text>

	<ButtonGroup>
		<BtnGrp href={resolve('/trainers')}>Trainers</BtnGrp>
		<BtnGrp href={resolve('/info')}>Info</BtnGrp>
		<BtnGrp href="https://forms.gle/MXxyyvYGtWpdVGN46">Apply</BtnGrp>
	</ButtonGroup>
</Section>
<Section color="secondary">
	<H2 color="white">Questions</H2>
	<Text color="white"
		>Whether you're curious about features, research, or publication, we're here
		to answer any questions.</Text>
	<Button
		><Link
			color="white"
			href={resolve('/contact')}>Let's Talk Now</Link
		></Button>
</Section>
<Section color="white">
	<H2 color="secondary">Sponsors</H2>
	<Text
		>We would like to thank the the Mastercard Foundation and University of
		Cambridge Climate Resilience and Sustainability Research Fund JanIngenhousz
		Intitute under JII Open Challenge Fund for the generous funding of this
		hackathon.</Text>
	<GridSponsor>
		<Sponsor
			href="https://mastercardfdn.org/en/"
			img={mcLogo} />
		<Sponsor
			href="https://www.jan-ingenhousz-institute.org/"
			img={jiiLogo} />
	</GridSponsor>
</Section>

<Footer />

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
