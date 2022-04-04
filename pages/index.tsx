import BaseHead from '../components/BaseHead';
import ChannelItem from '../components/ChannelItem';
import SectionContainer from '../components/SectionContainer';
import SeriesItem from '../components/SeriesItem';
import YTFrame from '../components/YTFrame';
import YTIcon from '../components/YTThumbnail';
import styles from '../styles/Animations.module.scss';

export default function Home() {
  return (
    <main>
      <BaseHead title="Home" description="Your momma gay" />
      {/* image scroll thingy with a bunch of nested components */}
      <section className="relative overflow-x-hidden h-80">
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
      <SectionContainer>
        <section className="py-2 px-5">
          <h1>Popular Series</h1>
          <div className="grid gap-3 xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1">
            <SeriesItem
              title={"Bored Smashing"}
              description={"Bored Smashing is a series where I smash various tech! Either cheap or expensive!"}
            />
            <SeriesItem
              title={"50 Ways to Break..."}
              description={"yes"}
            />
            <SeriesItem
              title={"Moving On..."}
              description={"Lorem ipsum dor et asasfahsdl kjahdlkjhas df k ja s hdflk absdflakjbsjb"}
            />
            <SeriesItem
              title={"Mac Review or something"}
              description={"Lorem ipsum dor et asasfahsdl kjahdlkjhas df k ja s hdflk absdflakjbsjb"}
            />
            {/* <YTIcon /> */}
          </div>
        </section>
        <section className="py-2 px-5">
          <h1>My Main Channels</h1>
          <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1">
            {/* <ChannelItem
              title={"Plainrock124"}
              description={"Main channel"}
              subscribers={696969}
            />
            <ChannelItem
              title={"PlainrockVlogs"}
              description={"Vlog channel"}
              subscribers={696969}
            /> */}
          </div>
        </section>
        <section className="py-2 px-5">
          <h1>Channel highlights</h1>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-5">
            <YTFrame link="6X5kP6NjDTw" />
            <YTFrame link="Sxxw3qtb3_g" />
            <YTFrame link="tNuWwp23ei4" />
            <YTFrame link="Gv52gzXOLGc" />
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
