import Image from "next/image";

interface ISeriesItemProps {
  title: string;
  id?: string;
  description?: string;
  episodes?: number;
}

export default function SeriesItem({
  id = "lq6xuOw2mP8",
  title = "Title",
  description = "Description",
  episodes,
}: ISeriesItemProps) {
  return (
    <div className="relative flex flex-col mt-7">
      <div
        className="relative overflow-hidden lg:w-[19.5rem] lg:h-[11rem] md:w-[16rem] md:h-[9rem] z-10 shadow-lg mr-auto"
      >
        <Image
          className="rounded-md"
          layout="fill"
          objectFit="contain"
          src={"https://img.youtube.com/vi/" + id + "/maxresdefault.jpg"}
          alt={title}
        />
      </div>
      <div className="relative -top-7 -z-1 bg-white rounded-lg shadow-xl border-2 border-amber-500 p-4 ml-8">
        <h2 className="text-xl text-center font-bold mt-9">{title}</h2>
        <p className="text-center">{description}</p>
        <span>{episodes} episodes</span>
      </div>
    </div>
  );
};
