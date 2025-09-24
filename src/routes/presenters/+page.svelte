<script>
	import Nav from '$lib/nav/Nav.svelte';
	import NavItem from '$lib/nav/NavItem.svelte';
	import Header from '$lib/pico/sections/Header.svelte';
	import Main from '$lib/pico/sections/Main.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import H4 from '$lib/pico/text/H4.svelte';
	import Text from '$lib/pico/text/Text.svelte';
</script>

<Nav>
	<NavItem href="/" name="Home" />
	<NavItem href="/presenters" name="Presenters" />
	<NavItem href="/info" name="Info" />
	<NavItem href="/contact" name="Contact" />
</Nav>
<Header>
	<H1 color="white">Presenters</H1>
</Header>

<Main>
	<Section>
		<div class="row">
			<img src="/anna.png" alt="Prof. Dr. Anna Matuszyńska" />
			<div>
				<H1 color="primary">Prof. Dr. Anna Matuszyńska</H1>
				<H4 color="secondary">Computational Life Science</H4>
				<H4 color="secondary">Department of Biology</H4>
				<H4 color="secondary">RWTH Aachen University</H4>
				<Text>
					Prof. Anna is a highly skilled mathematician who holds a second diploma in pharmacy. Her
					expertise lies in the development of dynamic models for biological processes. She
					completed her mathematics degree at Gdansk University of Technology in 2011 and gained
					valuable experience as a cost allocation specialist in a liability portfolio company prior
					to pursuing further education. In 2016, Prof. Anna obtained her PhD in computational
					biology from Heinrich-Heine University Düsseldorf. Her doctoral research focused on
					computational models pertaining to the light acclimation of photosynthetic organisms.
					Since November 2021, Prof. Anna has been serving as a professor at RWTH Aachen University,
					where she leads a computational life science lab. Her research team utilizes a variety of
					computational techniques to explore diverse areas, including in silico investigations of
					photosynthesis (ranging from plants to algae and cyanobacteria), carbon metabolism, cell
					bioenergetics, and organism interactions. Additionally, Prof. Anna actively engages in
					public dissemination of her work and participates in outreach activities. She is a
					passionate advocate for open science, promoting transparency and accessibility in
					research. Alongside her professional endeavors, Prof. Anna cherishes her role as a mother
					to two remarkable children.
				</Text>
			</div>
		</div>
	</Section>
	<Section color="secondary">
		<div class="row">
			<img src="/marvin.png" alt="Dr. Marvin van Aalst" />
			<div>
				<H1 color="white">Dr. Marvin van Aalst</H1>
				<H4 color="white">Computational Life Science</H4>
				<H4 color="white">Department of Biology</H4>
				<H4 color="white">RWTH Aachen University</H4>
				<Text color="white">
					Marvin is a software architect and computational biologist working on building scientific
					software and quantitative models based on differential equations. He is currently working
					on his PhD in Biology at Heinrich-Heine University Düsseldorf. Marvin recreationally
					develops web applications. In addition, he has national and international teaching
					experience, having taught introductory courses in mathematical modeling, computation and
					systems biology.
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

	@media screen and (min-width: 800px) {
		.row {
			grid-template-columns: 1fr 1fr;
			margin: 2rem 0;
		}
	}
</style>
