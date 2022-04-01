import Image from 'next/image'
import BaseHead from '../components/BaseHead';
import ChannelItem from '../components/ChannelItem';
import SeriesItem from '../components/SeriesItem';
import YTFrame from '../components/YTFrame';

export default function Home() {
  return (
    <main>
      <BaseHead title="Home" description="Your momma gay" />
      <section className="max-w-screen-2xl mx-auto my-0 py-2 px-5">
        <h1>Series</h1>
        <div className="grid gap-3 grid-cols-4">
          <SeriesItem title={"Bored Smashing"} />
          <SeriesItem title={"Mac Review or something"} />
          <SeriesItem title={"Moving On..."} />
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto my-0 py-2 px-5">
        <h1>My Main Channels</h1>
        <div className="grid gap-3 grid-cols-2">
          <ChannelItem
            title={"Plainrock124"}
            description={"Main channel"}
            subscribers={696969}
          />
          <ChannelItem
            title={"PlainrockVlogs"}
            description={"Vlog channel"}
            subscribers={696969}
          />
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto my-0 py-2 px-5">
        <h1>Channel highlights</h1>
        <div className="grid grid-cols-4 gap-x-5">
          <YTFrame link="znxqh60w5p8" />
          <YTFrame link="Sxxw3qtb3_g" />
          <YTFrame link="tNuWwp23ei4" />
          <YTFrame link="Gv52gzXOLGc" />
        </div>
      </section>
    </main>
  );
}
