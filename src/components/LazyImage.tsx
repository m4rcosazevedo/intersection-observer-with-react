import { memo, useEffect, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface LazyImageProps {
  placeholderSrc: string
  src: string
  alt: string
}


const LazyImage = memo(({ placeholderSrc, src, alt, ...props }: LazyImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(imgRef);

  useEffect(() => {
    const imgContainer = imgContainerRef.current;
    const imgElement = imgRef.current;

    if (isVisible && imgContainer && imgElement) {
      const highResImage = new Image();

      Object.assign(highResImage, {
        src,
        alt: alt ?? '',
        className: 'lazy-load-image loaded'
      });

      highResImage.onload = () => {
        if (imgContainer) {
          imgRef.current?.remove();
          imgContainer.appendChild(highResImage);
        }
      };

      highResImage.onerror = () => {
        console.error(`Erro ao carregar a imagem ${src}`)
      };
    }
  }, [isVisible, src, alt]);

  return (
    <section className="image-container" ref={imgContainerRef}>
      <img
        ref={imgRef}
        src={isVisible ? placeholderSrc : undefined}
        alt={alt}
        className="lazy-load-image"
        {...props}
      />
    </section>
  );
});

export {
  LazyImage,
  type LazyImageProps
}
