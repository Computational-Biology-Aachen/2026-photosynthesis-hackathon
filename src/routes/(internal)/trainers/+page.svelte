<script>
	import { base } from '$app/paths';
	import Header from '$lib/pico/sections/Header.svelte';
	import Main from '$lib/pico/sections/Main.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import H4 from '$lib/pico/text/H4.svelte';
	import Text from '$lib/pico/text/Text.svelte';
</script>

<Header>
	<H1 color="white">Trainers</H1>
</Header>

<Main>
	<Section>
		<div class="row">
			<img
				src="{base}/anna.png"
				alt="Prof. Dr. Anna Matuszyńska" />
			<div>
				<H1 color="primary">Prof. Dr. Anna Matuszyńska</H1>
				<H4 color="secondary">Computational Life Science</H4>
				<H4 color="secondary">Department of Biology</H4>
				<H4 color="secondary">RWTH Aachen University Germany</H4>
				<Text>
					Prof. Anna is a highly skilled mathematician who holds a second
					diploma in pharmacy. Her expertise lies in the development of dynamic
					models for biological processes. She completed her mathematics degree
					at Gdansk University of Technology in 2011 and gained valuable
					experience as a cost allocation specialist in a liability portfolio
					company prior to pursuing further education. In 2016, Prof. Anna
					obtained her PhD in computational biology from Heinrich-Heine
					University Düsseldorf. Her doctoral research focused on computational
					models pertaining to the light acclimation of photosynthetic
					organisms. Since November 2021, Prof. Anna has been serving as a
					professor at RWTH Aachen University, where she leads a computational
					life science lab. Her research team utilizes a variety of
					computational techniques to explore diverse areas, including in silico
					investigations of photosynthesis (ranging from plants to algae and
					cyanobacteria), carbon metabolism, cell bioenergetics, and organism
					interactions. Additionally, Prof. Anna actively engages in public
					dissemination of her work and participates in outreach activities. She
					is a passionate advocate for open science, promoting transparency and
					accessibility in research. Alongside her professional endeavors, Prof.
					Anna cherishes her role as a mother to two remarkable children.
				</Text>
			</div>
		</div>
	</Section>
	<Section color="secondary">
		<div class="row">
			<img
				src="{base}/johannes.jpg"
				alt="Dr. Johannes Kromdijk" />
			<div>
				<H1 color="white">Dr. Johannes Kromdijk</H1>
				<H4 color="white">University of Cambridge</H4>
				<H4 color="white">United Kingdom</H4>
				<Text color="white">
					Growing up in an area of The Netherlands with an abundance of
					glasshouses, Johannes became interested in plants at an early age. He
					obtained his BSc and MSc in Plant Sciences at Wageningen University
					(NL). In 2007 he was awarded the Alexander James Keith PhD studentship
					to work with Prof. Howard Griffiths at the University of Cambridge
					(UK), where he studied the effects of light limitation on the
					efficiency of the carbon concentrating mechanism in C4 photosynthesis.
					After finishing his PhD, he worked as a research scientist in
					greenhouse horticulture in Wageningen (NL) for three years, focusing
					on crop management strategies to optimize photosynthesis and energy
					use efficiency. In 2013, he joined the Carl R. Woese Institute for
					Genomic Biology (University of Illinois, USA) to work on genetic
					improvement of the efficiency of photosynthesis. Johannes has since
					returned to Cambridge and currently is an Associate-Professor at the
					Department of Plant Sciences and a fellow at Pembroke College.
					Johannes is a UKRI Future Leaders Fellow and recipient of the SEB
					President’s medal in 2020. His research group employs a range of
					techniques from ecophysiology, mathematical modelling, biotechnology
					and genetic engineering to study plant physiology at the nexus of
					basic understanding of plant function and applications to improve
					sustainability and food security.
				</Text>
			</div>
		</div>
	</Section>
	<Section>
		<div class="row">
			<img
				src="{base}/marvin.png"
				alt="Dr. Marvin van Aalst" />
			<div>
				<H1 color="primary">Dr. Marvin van Aalst</H1>
				<H4 color="secondary">Computational Life Science</H4>
				<H4 color="secondary">Department of Biology</H4>
				<H4 color="secondary">RWTH Aachen University Germany</H4>
				<Text>
					Marvin is a software architect and computational biologist working on
					building scientific software and quantitative models based on
					differential equations. He is currently working as a research software
					engineer at RWTH University Germany. Marvin recreationally develops
					web applications. In addition, he has national and international
					teaching experience, having taught introductory courses in
					mathematical modeling, computation and systems biology.
				</Text>
			</div>
		</div>
	</Section>

	<Section color="secondary">
		<div class="row">
			<img
				src="{base}/sansa.jpg"
				alt="Dr. Olakunle Sansa" />
			<div>
				<H1 color="white">Dr. Olakunle Sansa</H1>
				<H4 color="white">Genetic Resources Center</H4>
				<H4 color="white">International Institute of Tropical Agriculture</H4>
				<H4 color="white">Nigeria</H4>

				<Text color="white">
					Olakunle Sansa holds a bachelors degree in Plant breeding and Seed
					Technology as well as an MSc and PhD in Plant Breeding from the
					Federal University of Agriculture, Abeokuta, Nigeria. In 2020, He
					joined the Genetic Resources Center, International Institute of
					Tropical Agriculture (IITA), Ibadan as a doctoral research fellow. His
					work focused on studying photosynthesis under real field conditions
					and exploring novel sources of tolerance to drought, heat stress and
					Striga gesnerioides in diverse cowpea germplasm collections. In 2021,
					he was awarded a UK/FCDO Commonwealth Split-site PhD Scholarship at
					the Natural Resources Institute, University of Greenwich, U.K.
					Following the completion of his PhD, he had a visiting research stay
					at the John Innes Center, UK, where he worked on peas. He returned
					back to IITA as a postdoctoral researcher where he is now advancing
					research on improving photosynthesis and breeding for climate
					resilience in cowpea. He is strongly passionate about strengthening
					the capacity of African researchers and supporting smallholder farmers
					for improved livelihood and sustainable food production in sub-Saharan
					Africa.
				</Text>
			</div>
		</div>
	</Section>
</Main>

<style>
	img {
		display: block;
		width: 100%;
		max-width: 25rem;
		margin: 0 auto 1rem;
	}
	.row {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		gap: 2rem;
		padding-bottom: var(--text-ypad);
		align-items: center;
	}

	@media (min-width: 64rem) {
		.row {
			grid-template-columns: 1fr 1fr;
			margin: 2rem 0;
		}
	}
</style>
