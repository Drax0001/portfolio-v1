import Image from "next/image";

interface Props {
  title: string;
  image?: any;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

// Renders the project image, or a branded placeholder when none is set yet
export default function ProjectThumbnail({
  title,
  image,
  className = "",
  imageClassName = "",
  priority,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover ${imageClassName}`}
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-reddish via-purple-custom to-teal-custom">
          <span className="font-inter font-bold text-white text-center px-2 text-[clamp(0.75rem,4vw,2rem)] leading-tight drop-shadow">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
