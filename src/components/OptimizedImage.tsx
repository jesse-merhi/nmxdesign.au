import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  loading?: "eager" | "lazy";
  placeholder?: boolean;
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  aspectRatio = "auto",
  loading = "lazy",
  placeholder = true,
  fit = "contain",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const containerStyle = {
    aspectRatio,
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  };

  return (
    <div 
      className={`relative overflow-hidden bg-white ${className}`}
      style={containerStyle}
    >
      {/* Placeholder/Loading state */}
      {placeholder && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Failed to load image</div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full transition-opacity duration-300 ${
          fit === "cover"
            ? "object-cover"
            : fit === "fill"
            ? "object-fill"
            : fit === "none"
            ? "object-none"
            : fit === "scale-down"
            ? "object-scale-down"
            : "object-contain"
        } ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          minHeight: height ? `${height}px` : undefined,
          minWidth: width ? `${width}px` : undefined,
        }}
      />
    </div>
  );
};

export default OptimizedImage;
