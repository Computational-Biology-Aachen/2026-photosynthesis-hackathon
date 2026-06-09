<script>
  import { base } from "$app/paths";
  import {
    Bold,
    Button,
    CardSponsor,
    Div,
    Grid,
    GridSponsor,
    H1,
    H2,
    Hero,
    Italic,
    Li,
    Link,
    Section,
    Text,
    Ul,
  } from "@computational-biology-aachen/design";

  import iitaLogo from "$lib/assets/iita_logo.png";
  import jiiLogo from "$lib/assets/jan-ingenhousz-institute-logo.png";
  import mcLogo from "$lib/assets/mastercard-cambridge.png";
</script>

<svelte:head>
  <title>2026 Photosynthesis Hackathon</title>
</svelte:head>

<Hero src="{base}/hero2.jpg">
  <h1 class="hero-title">JII OPEN CHALLENGE</h1>
  <div class="hero-highlight">
    <p>From field photosynthesis to genetic architecture</p>
  </div>
</Hero>

<Section
  variant="light"
  width="narrow"
>
  <Grid
    columns={2}
    gap="var(--space-8)"
  >
    <img
      src="{base}/kenya1.jpg"
      alt="placeholder"
    />
    <Div>
      <H1>Photosynthesis hackathon</H1>
      <Text>
        How do genetic differences shape the way plants capture light, process
        carbon, and survive drought? Join us for <Bold
          >"Hacking for Photosynthesis: From Field Photosynthesis to Genetic
          Architecture"</Bold
        >: a unique, fast-paced hackathon bringing together data scientists,
        plant researchers, software engineers, and innovators to uncover the
        links between <Bold
          >genotypic variation and photosynthetic performance.</Bold
        ></Text
      >
      <Text><Bold>When?</Bold> 09. - 13.03.2026</Text>
      <Text
        ><Bold>Where?</Bold> International Institute of Tropical Agriculture (IITA),
        Accra, Ghana (moved from Ibadan, Nigeria)</Text
      >
      <Button disabled
        >Registration closed - thanks for all your submissions</Button
      >
    </Div>
  </Grid>
  <Text
    >The hackathon is hosted at the International Institute of Tropical
    Agriculture (IITA) in Accra, Ghana. <Bold
      >Travel support may be available for selected participants</Bold
    >.</Text
  >
  <Text>Over five days, participants will</Text>
  <Ul>
    <Li
      >Dive into curated, real-world datasets provided by JanIngenhousz
      Institute</Li
    >
    <Li
      >Explore photosynthesis traits, genetic variation, and environmental
      interactions</Li
    >
    <Li
      >Work in interdisciplinary teams to tackle a high-impact research
      challenge. Present their findings at a public outreach event</Li
    >
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

  <Grid columns={3}>
    <Button
      href="{base}/trainers"
      fullWidth>Trainers</Button
    >
    <Button
      href="{base}/challenge"
      fullWidth>Challenge</Button
    >
    <Button
      href="{base}/participants"
      fullWidth>Participants</Button
    >
  </Grid>
</Section>

<Section
  variant="dark"
  width="narrow"
>
  <H2 color="light">Organizing Committee</H2>
  <Ul color="light">
    <Li color="light"
      ><Link
        color="light"
        href="https://computational-biology-aachen.github.io/team/anna-matuszy%C5%84ska"
        >Prof. Dr. Anna Matuszyńska, RWTH Aachen, Germany</Link
      ></Li
    >
    <Li color="light"
      ><Link
        color="light"
        href="https://www.jan-ingenhousz-institute.org/team/prof.-david-m.-kramer"
        >Prof. Dr. David M. Kramer, Jan Ingenhousz Institute Wageningen,
        Netherlands</Link
      ></Li
    >
    <Li color="light"
      ><Link
        color="light"
        href="https://computational-biology-aachen.github.io/team/marvin-van-aalst"
        >Dr. Marvin van Aalst, RWTH Aachen, Germany</Link
      ></Li
    >
    <Li color="light"
      ><Link
        color="light"
        href="https://www.plantsci.cam.ac.uk/directory/johannes-kromdijk"
        >Dr. Johannes Kromdijk, University of Cambridge, United Kingdom</Link
      ></Li
    >
    <Li color="light"
      ><Link
        color="light"
        href="https://www.iita.org/iita-staff/dr-sansa-olakunle-opeyemi/"
        >Dr. Sansa Olakunle, International Institute of Tropical Agriculture,
        Nigeria</Link
      ></Li
    >
  </Ul>
</Section>

<Section
  variant="light"
  width="narrow"
>
  <H2 color="secondary">Partners</H2>
  <Text
    >We would like to thank our partners of the <Italic
      >Mastercard Foundation and University of Cambridge Climate Resilience and
      Sustainability Research Fund</Italic
    > and the <Italic
      >JanIngenhousz Intitute under JII Open Challenge Fund</Italic
    > for the generous funding of this hackathon. We would also like to thank the
    International Institute of Tropical Agriculture for hosting the event.
  </Text>
  <GridSponsor>
    <CardSponsor
      href="https://mastercardfdn.org/en/"
      img={mcLogo}
      name="Mastercard Foundation"
    />
    <CardSponsor
      href="https://www.jan-ingenhousz-institute.org/"
      img={jiiLogo}
      name="Jan Ingenhousz Institute"
    />
    <CardSponsor
      href="https://www.iita.org/"
      img={iitaLogo}
      name="IITA"
    />
  </GridSponsor>
</Section>

<Section
  variant="primary"
  width="narrow"
>
  <H2 color="light">Host</H2>
  <Grid columns={2}>
    <img
      src="{base}/iita.jpg"
      alt="iita"
    />
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
        sub-Saharan Africa.</Text
      >
    </div>
  </Grid>
</Section>

<Section width="narrow">
  <H2>Program overview</H2>
  <Text>The event runs over <Bold>five days</Bold>:</Text>
  <Ul>
    <Li
      ><Bold>Days 1-2:</Bold> Interactive lectures and hands-on sessions introduce
      the challenge and datasets, ensuring all participants share a common foundation.</Li
    >
    <Li
      ><Bold>Days 3-4 (first half):</Bold> Teams work intensively on the hackathon
      challenge, developing solutions and preparing their pitches.</Li
    >
    <Li
      ><Bold>Day 4 (second half):</Bold> Final presentations take place at an open
      outreach event for the host institution and wider community.</Li
    >
    <Li
      ><Bold>Day 5:</Bold> Participants shape follow-up actions and explore opportunities
      for continued collaboration</Li
    >
  </Ul>
</Section>

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

  .hero-title {
    color: var(--color-bg);
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 3rem;
    padding: 0;
    margin: 0 0 0.5rem 0;
    max-width: 30rem;
  }

  .hero-highlight {
    width: fit-content;
    background-color: var(--color-primary);
    padding: 1.5rem;
    border-radius: 1rem;
  }

  .hero-highlight p {
    color: var(--color-bg);
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }

  @media (min-width: 64rem) {
    .hero-title {
      font-size: 5rem;
    }
  }
</style>
