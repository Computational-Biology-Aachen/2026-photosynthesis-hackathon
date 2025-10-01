<script lang="ts">
	import Link from './pico/Link.svelte';
	import H2 from './pico/text/H2.svelte';
	import Text from './pico/text/Text.svelte';

	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	import { asset } from '$app/paths';

	console.log(asset('/cpbl-rwth-logo.jpg'));
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
				Design und Umsetzung Dr. Marvin van Aalst <Link
					color="white"
					href="https://github.com/Computational-Biology-Aachen/Computational-Biology-Aachen.github.io"
					><Fa icon={faGithub} /></Link
				><br />
				(c) 2025 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
			</Text>
		</div>
		<div class="row">
			<Link href="https://www.cpbl.rwth-aachen.de/go/id/sazuq/?lidx=1">
				<img
					src={asset('/cpbl-rwth-logo.jpg')}
					alt="CPBL logo" />
			</Link>
		</div>
	</div>
</footer>

<style>
	footer {
		margin: 0;
		padding: var(--section-ypad) 2rem;
		min-height: 12rem;
		background-color: var(--black);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (min-width: 96rem) {
		footer {
			padding: var(--section-ypad) 0;
		}
	}

	.inner {
		margin: 0 auto;
		width: 100%;
		max-width: var(--max-width);
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		gap: 2rem;
		align-items: center;
	}

	@media (min-width: 64rem) {
		.inner {
			padding: 0;
			grid-template-columns: 1fr 1fr;
		}
	}

	.row {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		padding: 0 2rem;
	}

	img {
		width: 100%;
		max-width: 600px;
		transition: all 0.5s ease;
	}
	img:hover {
		/* border: 1px solid var(--primary); */
		transform: scale(1.07);
	}
</style>
