import Link from "next/link";

interface IChannelItemProps {
  link?: string;
  title: string;
  description: string;
  subscribers: number;
}

export default function ChannelItem({
  link = "https://youtube.com/", title, description, subscribers
}: IChannelItemProps) {
  return (
    <Link href={link}>
      <a className="card-item flex flex-col items-center">
        <h2 className="font-8bit text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <span>{subscribers}</span>
      </a>
    </Link>
  );
}