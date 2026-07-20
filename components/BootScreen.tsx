import { useEffect, useRef, useState } from 'react';

const BOOT_LINES = [
  'ERKIN.SYS BIOS v2.6',
  'MEMORY CHECK ......... 64K OK',
  'LOADING PORTFOLIO .... OK',
  'CARTRIDGE DETECTED ... ERKIN ERDOGAN',
];

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [exiting, setExiting] = useState(false);
  const finished = useRef(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setLines(BOOT_LINES.slice(0, i));
      if (i >= BOOT_LINES.length) {
        clearInterval(timer);
        setTimeout(() => finish(), 700);
      }
    }, 350);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    setExiting(true);
    setTimeout(onDone, 400);
  };

  useEffect(() => {
    const skip = () => finish();
    window.addEventListener('keydown', skip);
    window.addEventListener('pointerdown', skip);
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`boot-screen ${exiting ? 'boot-done' : ''}`} aria-hidden="true">
      <div className="w-full max-w-md px-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="led" />
          <span className="pixel-tag lcd-text">POWER</span>
        </div>
        <div className="space-y-2 min-h-[7.5rem]">
          {lines.map((line) => (
            <p key={line} className="lcd-text text-sm">{line}</p>
          ))}
          <span className="cursor-blink" />
        </div>
        <p className="pixel-tag lcd-text mt-8 opacity-60">PRESS ANY KEY</p>
      </div>
    </div>
  );
}
