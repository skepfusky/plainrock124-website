interface ISeriesItemProps {
  title: string;
  description?: string;
  episodes?: number;
}

export default function SeriesItem({
  title = "Title",
  description = "Description",
  episodes
}: ISeriesItemProps) {
  return (
    <div className="card-item">
      <h2 className="font-8bit text-xl font-bold mt-9">{title}</h2>
      <p>{description}</p>
      <span>{episodes} episodes</span>
    </div>
  )
};
