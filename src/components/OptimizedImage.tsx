import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy'
}) => {
  // Crear versión WebP de la URL si es de Pexels
  const webpSrc = src.includes('pexels.com') 
    ? src.replace(/\.(jpg|jpeg|png)/, '.webp')
    : src;

  return (
    <picture>
      {src.includes('pexels.com') && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
      />
    </picture>
  );
};

export default OptimizedImage;