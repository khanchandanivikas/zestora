import Image from "next/image";

const LIFESTYLE_IMAGES = [
  {
    src: "/zestora-hands-on-1.png",
    alt: "Enjoying a cold Zestora juice outdoors",
  },
  {
    src: "/zestora-hands-on-2.png",
    alt: "A refreshing sip of Zestora in the sunshine",
  },
] as const;

export const LifestylePhotos = ({
  className = "",
  photoClassName = "",
}: {
  className?: string;
  photoClassName?: string;
}) => {
  return (
    <div className={`flex gap-2.5 ${className}`}>
      {LIFESTYLE_IMAGES.map((photo) => (
        <div
          className={`relative overflow-hidden rounded-[17px] aspect-square flex-1 ${photoClassName}`}
          key={photo.src}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 600px) 35vw, 240px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
