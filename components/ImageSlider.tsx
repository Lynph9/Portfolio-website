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
    <div className="relative w-full rounded-xl overflow-hidden" style={{ height }}>
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
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-dark-800/80 hover:bg-accent/80 text-white w-9 h-9 rounded-full flex items-center justify-center z-10 transition-colors text-sm"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-dark-800/80 hover:bg-accent/80 text-white w-9 h-9 rounded-full flex items-center justify-center z-10 transition-colors text-sm"
          >
            →
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent w-5' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
