import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  type?: 'video/mp4' | 'image/gif';
  alt?: string;
}

export default function VideoPlayer({ src, type = 'video/mp4', alt }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current && type === 'video/mp4') {
      videoRef.current.play().catch(err => {
        console.error('Error playing video:', err);
        setError(true);
      });
    }
  }, [type]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  if (type === 'image/gif') {
    return (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={src}
            alt={alt || 'Animation'}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-contain rounded-lg"
        loop
        muted
        playsInline
        onLoadedData={handleLoad}
        onError={handleError}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          Loading...
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          Failed to load media
        </div>
      )}
    </div>
  );
} 