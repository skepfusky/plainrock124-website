import Image from "next/image"

interface IYTThumbnailProps {
  id?: string
  alt?: any
}

export default function YTThumbnail({ id = "lq6xuOw2mP8", alt }: IYTThumbnailProps) {
  return (
    <div>
      <Image 
        src={"https://img.youtube.com/vi/" + id + "/maxresdefault.jpg"}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
};
