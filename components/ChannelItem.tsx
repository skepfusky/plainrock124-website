import Image from "next/image";
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
      <a className="rounded-lg shadow-md p-4 flex flex-col items-center">
        <Image
          className="rounded-full"
          src="https://yt3.ggpht.com/ytc/AKedOLRckh3zd9qyXi_IwKF-1iwzMsvZ1aQjv1MoE1tovw"
          layout="fill"
          alt={title + "'s avatar"}
        />
        <h2 className="font-8bit text-xl font-bold mt-3">{title}</h2>
        <p>{description}</p>
        <span>{subscribers} subscribers</span>
      </a>
    </Link>
  );
}