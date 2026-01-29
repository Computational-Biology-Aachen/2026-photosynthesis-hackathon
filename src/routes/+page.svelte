<script>
	import { base, resolve } from '$app/paths';
	import BtnGrp from '$lib/buttons/BtnGrp.svelte';
	import ButtonGroup from '$lib/buttons/ButtonGroup.svelte';
	import Sponsor from '$lib/cards/Sponsor.svelte';
	import GridSponsor from '$lib/GridSponsor.svelte';
	import Link from '$lib/Link.svelte';
	import Li from '$lib/lists/Li.svelte';
	import Ul from '$lib/lists/Ul.svelte';
	import R2 from '$lib/R2.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Section from '$lib/sections/Section.svelte';
	import Bold from '$lib/text/Bold.svelte';
	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Italic from '$lib/text/Italic.svelte';
	import Text from '$lib/text/Text.svelte';

	import jiiLogo from '$lib/assets/jan-ingenhousz-institute-logo.png';
	import mcLogo from '$lib/assets/mastercard-cambridge.png';
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
				Accra, Ghana (moved from Ibadan, Nigeria)</Text>
			<!-- <Text><Bold>Registration opens?</Bold> 06.10.2025</Text> -->

			<!-- <Text
				><Bold>Registration open until?</Bold>
				<Strikethrough>09.11.2025</Strikethrough> 16.11.2025</Text>
			<Text
				>📅 Apply now and be part of a new community driving innovation at the
				intersection of genetics, physiology, and data.</Text> -->

			<!-- <div style="background-color: var(--primary); padding: 1rem;">
				<Text
					color="white"
					padding="none"
					><Bold>REGISTRATION EXTENDED</Bold>
				</Text>
			</div> -->
			<BtnGrp
				disabled
				href="/">Registration closed - thanks for all your submissions</BtnGrp>
		</div>
	</R2>
	<Text
		>The hackathon is hosted at the International Institute of Tropical
		Agriculture (IITA) in Accra, Ghana. <Bold
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
		<BtnGrp
			disabled
			href={resolve('/challenge')}>Challenge</BtnGrp>
		<BtnGrp
			disabled
			href="/participants">Participants</BtnGrp>
	</ButtonGroup>
</Section>
<Section color="secondary">
	<H2 color="white">Organizing Committee</H2>
	<Ul>
		<Li color="white"
			><Link
				color="white"
				href="https://computational-biology-aachen.github.io/team/anna-matuszy%C5%84ska"
				>Prof. Dr. Anna Matuszyńska, RWTH Aachen, Germany</Link
			></Li>
		<Li color="white"
			><Link
				color="white"
				href="https://www.jan-ingenhousz-institute.org/team/prof.-david-m.-kramer"
				>Prof. Dr. David M. Kramer, Jan Ingenhousz Institute Wageningen,
				Netherlands</Link
			></Li>
		<Li color="white"
			><Link
				color="white"
				href="https://computational-biology-aachen.github.io/team/marvin-van-aalst"
				>Dr. Marvin van Aalst, RWTH Aachen, Germany</Link
			></Li>
		<Li color="white"
			><Link
				color="white"
				href="https://www.plantsci.cam.ac.uk/directory/johannes-kromdijk"
				>Dr. Johannes Kromdijk, University of Cambridge, United Kingdom</Link
			></Li>
		<Li color="white"
			><Link
				color="white"
				href="https://www.iita.org/">
				Dr. Sansa Olakunle, International Institute of Tropical Agriculture,
				Nigeria</Link
			></Li>
	</Ul>
</Section>

<Section color="white">
	<H2 color="secondary">Partners</H2>
	<Text
		>We would like to thank our partners of the <Italic
			>Mastercard Foundation and University of Cambridge Climate Resilience and
			Sustainability Research Fund</Italic> and the <Italic
			>JanIngenhousz Intitute under JII Open Challenge Fund</Italic> for the generous
		funding of this hackathon.</Text>
	<GridSponsor>
		<Sponsor
			href="https://mastercardfdn.org/en/"
			img={mcLogo} />
		<Sponsor
			href="https://www.jan-ingenhousz-institute.org/"
			img={jiiLogo} />
	</GridSponsor>
</Section>
<Section color="primary">
	<H2 color="white">Host</H2>
	<R2>
		<img
			src="{base}/iita.jpg"
			alt="iita" />

		<div>
			<Text color="white"
				>The International Institute of Tropical Agriculture (<Bold>IITA</Bold>)
				is a leading non-profit research for development institution and a
				member of CGIAR, providing agricultural innovations that address
				Africa's most pressing challenges, including climate change, hunger,
				malnutrition, and poverty. IITA headquarters is located in Ibadan, Oyo
				state, Nigeria, with five regional hubs and several research stations
				across Africa, IITA's main priority is to transform African agriculture,
				improve farmers' livelihoods, and ensure a food secure future for
				sub-Saharan Africa.</Text>
		</div>
	</R2>
	<!-- <Text color="white"> -->
	<!-- <Bold>Venue</Bold><br /> -->
	<!-- International Institute of Tropical Agriculture (IITA) CSIR Campus opp. Old Chinese -->
	<!-- Embassy Off Agostino Neto Road, Airport Residential Area Accra, Ghana<br /><br /> -->
	<!-- <Bold>Accomodation</Bold><br /> -->
	<!-- International House, IITA Headquarters, Ibadan, Nigeria -->
	<!-- </Text> -->
</Section>
<Section>
	<H2>Program overview</H2>
	<Text>The event runs over <Bold>five days</Bold>:</Text>
	<Ul>
		<Li
			><Bold>Days 1-2:</Bold> Interactive lectures and hands-on sessions introduce
			the challenge and datasets, ensuring all participants share a common foundation.</Li>
		<Li
			><Bold>Days 3-4 (first half):</Bold> Teams work intensively on the hackathon
			challenge, developing solutions and preparing their pitches.</Li>
		<Li
			><Bold>Day 4 (second half):</Bold> Final presentations take place at an open
			outreach event for the host institution and wider community.</Li>
		<Li
			><Bold>Day 5:</Bold> Participants shape follow-up actions and explore opportunities
			for continued collaboration</Li>
	</Ul>
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
