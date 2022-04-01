import Image from 'next/image';
import BaseHead from '../components/BaseHead';
import ChannelItem from '../components/ChannelItem';
import SeriesItem from '../components/SeriesItem';
import YTFrame from '../components/YTFrame';
import styles from '../styles/Animations.module.scss';

export default function Home() {
  return (
    <main>
      <BaseHead title="Home" description="Your momma gay" />
      {/* image scroll thingy */}
      <section className="overflow-x-hidden h-80 relative">
        <div className="flex flex-col justify-center h-80 z-10">
          {/* <Image src="" alt="" /> */}
          <h1
            className="font-8bit text-lg uppercase mx-auto w-96 text-center text-white"
            id={styles.popupText}
          >
            The Unofficial Plainrock124 Website!
          </h1>
          <div className="font-8bit text-sm uppercase mx-auto my-0 text-center text-white">
            Created by skepfusky
          </div>
        </div>
        <div className="absolute top-0 w-full h-80 bg-slate-800 -z-10"></div>
      </section>
      <section className="max-w-screen-2xl mx-auto my-0 py-2 px-5">
        <h1>Popular Series</h1>
        <div className="grid gap-3 grid-cols-3">
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
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-5">
          <YTFrame link="znxqh60w5p8" />
          <YTFrame link="Sxxw3qtb3_g" />
          <YTFrame link="tNuWwp23ei4" />
          <YTFrame link="Gv52gzXOLGc" />
        </div>
      </section>
    </main>
  );
}
