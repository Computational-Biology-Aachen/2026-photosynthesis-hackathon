<script>
	import { base } from '$app/paths';
	import {
		Div,
		Grid,
		H1,
		H2,
		H6,
		Section,
		SectionHeader,
		SectionMain,
		Text
	} from '@computational-biology-aachen/design';
</script>

<svelte:head>
	<title>Contact us - 2026 Photosynthesis Hackathon</title>
</svelte:head>

<SectionHeader width="narrow">
	<H1 color="light">Contact us</H1>
</SectionHeader>

<SectionMain width="narrow">
	<Section>
		<Grid
			columns={2}
			gap="var(--space-8)">
			<img
				src="{base}/people-working.png"
				alt="people working" />
			<Div>
				<H2>You can find us at</H2>

				<H6>EMAIL</H6>
				<Text>anna.matuszynska@cpbl.rwth-aachen.de</Text>

				<H6>PHONE</H6>
				<Text>Tel.: +49 (241) 80 25817</Text>

				<H6>LOCATION</H6>
				<Text>Computational Life Science</Text>
				<Text>Department of Biology</Text>
				<Text>RWTH Aachen University</Text>
				<Text>Sammelbau Biologie 1, 42C041</Text>
				<Text>Worringerweg 1 (Campus Melaten)</Text>
				<Text>52074 Aachen, Germany</Text>
			</Div>
		</Grid>
	</Section>
</SectionMain>

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
