import Image from 'next/image'
import BaseHead from '../components/BaseHead';
import ChannelItem from '../components/ChannelItem';
import SeriesItem from '../components/SeriesItem';

export default function Home() {
  return (
    <div className="container">
      <BaseHead title="Home" description="Your momma gay"/>
      <main>
        <section className="grid gap-3 grid-cols-4">
          <SeriesItem title={'Bored Smashing'} />
          <SeriesItem title={'Mac Review or something'} />
          <SeriesItem title={'Moving On...'} />
        </section>
        <section className="flex">
          {/* TODO: Channel components son */}
          <ChannelItem title={'Plainrock124'} description={'Main channel'} subscribers={696969} />
          <ChannelItem title={'PlainrockVlogs'} description={'Vlog channel'} subscribers={696969} />
        </section>
      </main>
    </div>
  );
}
