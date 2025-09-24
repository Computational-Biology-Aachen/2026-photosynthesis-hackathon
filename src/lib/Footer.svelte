<script lang="ts">
	import Link from './pico/Link.svelte';
	import H2 from './pico/text/H2.svelte';
	import Text from './pico/text/Text.svelte';
</script>

<footer>
	<div class="inner">
		<div>
			<H2 color="white">Imprint</H2>
			<Text color="white">
				Anbieter i.S.d. TDG/MDStV: Prof. Dr. Anna B. Matuszyńska <br />
				Worringerweg 1 52074 Aachen <br />
				Work Phone: +49 241 80 25817 <br />

				Verantwortlich i.S.d. § 6 Abs. 2 MDStV: <br />
				Prof. Dr. Anna B. Matuszyńska <br />
				Design und Umsetzung Dr. Marvin van Aalst<br />
				(c) 2025 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
			</Text>
		</div>
		<div class="row">
			<Link href="https://www.cpbl.rwth-aachen.de/go/id/sazuq/?lidx=1">
				<img src="/cpbl-rwth-logo.jpg" alt="CPBL logo" />
			</Link>
			<Link href="https://www.jan-ingenhousz-institute.org/">
				<img src="/jan-ingenhousz-institute-logo.png" alt="CPBL logo" />
			</Link>
		</div>
	</div>
</footer>

<style>
	footer {
		margin: 0;
		padding: var(--section-ypad) 0;
		min-height: 12rem;
		background-color: var(--black);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.inner {
		margin: 0 auto;
		padding: 0 2rem;
		width: 100%;
		max-width: var(--max-width);
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		gap: 2rem;
		align-items: center;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		padding: 0 2rem;
	}

	@media screen and (min-width: 800px) {
		.inner {
			padding: 0;
			grid-template-columns: 1fr 1fr;
		}
	}

	img {
		width: 100%;
		max-width: 600px;
	}
</style>
