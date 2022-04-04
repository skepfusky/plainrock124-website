import BaseHead from "../../components/BaseHead";
import EpisodeItem from "../../components/EpisodeItem";
import SectionContainer from "../../components/SectionContainer";

export default function BoredSmashing() {
  return (
    <main>
      <BaseHead title="Bored Smashing" description="Smashing your mom!" />
      <SectionContainer>
        <section>
          <EpisodeItem title={'Your mom'} />
          <EpisodeItem title={'Your mom'} />
          <EpisodeItem title={'Your mom'} />
          <EpisodeItem title={'Your mom'} />
          <EpisodeItem title={'Your mom'} />
          <EpisodeItem title={'Your mom'} />
        </section>
      </SectionContainer>
    </main>
  );
}