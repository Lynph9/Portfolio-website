import { useState, useRef, useEffect } from 'react';

interface GifCarouselProps {
  gifs: string[];
}

export default function GifCarousel({ gifs }: GifCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Dragged right - go to previous
        setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
      } else {
        // Dragged left - go to next
        setCurrentIndex((prev) => (prev + 1) % gifs.length);
      }
      setIsDragging(false); // Reset drag state after changing slide
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Add touch support
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % gifs.length);
      }
      setIsDragging(false);
    }
  };

  useEffect(() => {
    console.log('Loading GIFs:', gifs);
  }, [gifs]);

  const handleImageError = (gif: string) => {
    console.error(`Failed to load GIF: ${gif}`);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="relative w-full h-full">
        {gifs.map((gif, index) => (
          <div
            key={gif}
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'opacity-100 translate-x-0' : 
              index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
            }`}
          >
            <img 
              src={gif}
              alt={`Game Animation ${index + 1}`}
              className="w-full h-full object-contain"
              onError={() => handleImageError(gif)}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
        onClick={() => setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length)}
      >
        ←
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % gifs.length)}
      >
        →
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {gifs.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
} 