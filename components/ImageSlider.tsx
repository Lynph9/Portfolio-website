import { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  height?: string;
}

export default function ImageSlider({ images, height = '400px' }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images.length) return null;

  return (
    <div className="relative w-full rounded-sm overflow-hidden border-2 border-ink shadow-hard bg-paper-light" style={{ height }}>
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-paper-light border-2 border-ink shadow-hard-sm hover:bg-ink hover:text-paper-light text-ink w-9 h-9 rounded-sm flex items-center justify-center z-10 transition-colors text-sm"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-paper-light border-2 border-ink shadow-hard-sm hover:bg-ink hover:text-paper-light text-ink w-9 h-9 rounded-sm flex items-center justify-center z-10 transition-colors text-sm"
          >
            →
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to image ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 border border-ink transition-all ${
                  index === currentIndex ? 'bg-accent w-5' : 'bg-paper-light w-2 hover:bg-paper-dark'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
