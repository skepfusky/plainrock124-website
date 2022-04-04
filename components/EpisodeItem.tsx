interface IEpisodeItemProps {
  title: string;
  link?: string;
  description?: string;
}

export default function EpisodeItem({title, link, description}: IEpisodeItemProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
};
