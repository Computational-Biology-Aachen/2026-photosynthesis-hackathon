<script>
	import Nav from '$lib/nav/Nav.svelte';
	import NavItem from '$lib/nav/NavItem.svelte';
	import Header from '$lib/pico/sections/Header.svelte';
	import Main from '$lib/pico/sections/Main.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import H2 from '$lib/pico/text/H2.svelte';
	import H6 from '$lib/pico/text/H6.svelte';
	import Text from '$lib/pico/text/Text.svelte';
	import R2 from '$lib/R2.svelte';
</script>

<Nav>
	<NavItem href="/" name="Home" />
	<NavItem href="/presenters" name="Presenters" />
	<NavItem href="/info" name="Info" />
	<NavItem href="/contact" name="Contact" />
</Nav>
<Header>
	<H1 color="white">Info</H1>
</Header>

<Main>
	<Section>
		<R2>
			<img src="/people-working.png" alt="people working" />
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
</Main>

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
