import { useState } from "react";
import OptimizedImage from "./OptimizedImage";
import ImageModal from "./ImageModal";

export interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

const ClickableImage = ({
  src,
  alt,
  className = "",
  caption,
}: ClickableImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center flex-col">
      <div
        className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full rounded-lg shadow-lg"
          aspectRatio="16/9"
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="text-center text-xl text-gray-600 mt-3 italic">{caption}</p>
      )}
      <ImageModal
        src={src}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ClickableImage;

