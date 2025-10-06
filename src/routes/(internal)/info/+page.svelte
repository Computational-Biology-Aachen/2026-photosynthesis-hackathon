<script>
	import { base } from '$app/paths';
	import BtnGrp from '$lib/BtnGrp.svelte';
	import Link from '$lib/pico/Link.svelte';
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
				class="hide-on-sm"
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

				<br />
				<BtnGrp href="https://forms.gle/MXxyyvYGtWpdVGN46">Apply now</BtnGrp>
			</div>
		</R2>
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
					href="/">
					Dr. Sansa Olakunle, International Institute of Tropical Agriculture,
					Nigeria</Link
				></Li>
			<Li color="white"
				><Link
					color="white"
					href="https://www.jan-ingenhousz-institute.org/team/dr.-tom-theeuwen"
					>Dr. Tom Theeuwen, Jan Ingenhousz Institute Wageningen, Netherlands</Link
				></Li>
			<Li color="white"
				><Link
					color="white"
					href="https://www.jan-ingenhousz-institute.org/team/prof.-david-m.-kramer"
					>Prof. Dr. David M. Kramer, Jan Ingenhousz Institute Wageningen,
					Netherlands</Link
				></Li>
		</Ul>
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
	<Section color="primary">
		<H2 color="white">Host & Venue</H2>
		<R2>
			<img
				src="{base}/iita.jpg"
				alt="iita" />

			<div>
				<Text color="white"
					>The International Institute of Tropical Agriculture (<Bold>IITA</Bold
					>) is a leading non-profit research for development institution and a
					member of CGIAR, providing agricultural innovations that address
					Africa's most pressing challenges, including climate change, hunger,
					malnutrition, and poverty. IITA headquarters is located in Ibadan, Oyo
					state, Nigeria, with five regional hubs and several research stations
					across Africa, IITA's main priority is to transform African
					agriculture, improve farmers' livelihoods, and ensure a food secure
					future for sub-Saharan Africa.</Text>
			</div>
		</R2>
		<Text color="white">
			<Bold>Venue</Bold><br />
			International Institute of Tropical Agriculture (IITA) Headquarters PMB 5320,
			Oyo Road, Ibadan, Oyo State, Nigeria.<br /><br />
			<Bold>Accomodation</Bold><br />
			International House, IITA Headquarters, Ibadan, Nigeria
		</Text>
	</Section>
	<Section>
		<H2>Data</H2>
		<Text>Describe the JII and obtained data here.</Text>
	</Section>
</Main>

<style>
	img {
		display: block;
		max-width: 100%;
		margin: 0 auto 1rem;
	}
	.hide-on-sm {
		display: none;
	}
	@media (min-width: 64rem) {
		.hide-on-sm {
			display: block;
		}
	}
</style>
