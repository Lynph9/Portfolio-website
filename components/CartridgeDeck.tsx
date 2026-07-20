import { useState } from 'react';

interface Cart {
  id: string;
  label: string;
  title: string;
  body: string;
}

const CARTS: Cart[] = [
  {
    id: 'player',
    label: 'PLAYER',
    title: 'Erkin Erdoğan — Software Developer',
    body: 'Based in Sakarya, Turkey. Builds mobile and web apps with TypeScript, Node.js and React Native — and prototypes games with Unity/C#.',
  },
  {
    id: 'shipped',
    label: 'SHIPPED',
    title: 'EdicorAi — 4.8 stars on the App Store',
    body: 'Offline-first photo editing and AI prompt app. Designed, built, released and maintained solo — the full product lifecycle.',
  },
  {
    id: 'backend',
    label: 'BACKEND',
    title: 'VetAide — Pet health platform',
    body: 'Supabase/PostgreSQL backend tracking long-term pet health, with Node.js services generating weekly AI-driven health summaries.',
  },
  {
    id: 'gamedev',
    label: 'GAME DEV',
    title: 'Unity 6 co-op game in production',
    body: 'First-person co-op targeting PC/Steam. Day/night cycle, faction AI, P2P networking. Godot and pixel art on the side.',
  },
  {
    id: 'status',
    label: 'STATUS',
    title: 'Open to work',
    body: 'Looking for a fullstack or game dev role with end-to-end feature ownership. erkinerdogan.dev@gmail.com',
  },
];

export default function CartridgeDeck() {
  const [inserted, setInserted] = useState<string | null>('player');
  const active = CARTS.find((c) => c.id === inserted) ?? null;

  const handleClick = (id: string) => {
    setInserted((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Console: screen + slot */}
      <div className="cart-card p-3 sm:p-4">
        <div className="crt px-5 py-6 sm:px-8 sm:py-8 min-h-[130px] flex flex-col justify-center">
          {active ? (
            <div key={active.id} className="crt-content relative z-[1]">
              <p className="pixel-tag text-accent mb-2">{active.label}</p>
              <h3 className="text-paper-light font-bold text-lg sm:text-xl mb-2">{active.title}</h3>
              <p className="text-paper-dark text-sm leading-relaxed max-w-2xl">{active.body}</p>
            </div>
          ) : (
            <p className="pixel-tag text-paper-dark/50 relative z-[1]">INSERT CARTRIDGE ▸</p>
          )}
        </div>
        {/* Slot */}
        <div className="relative z-10 mt-3 h-4 bg-ink rounded-sm shadow-hard-sm">
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-1 bg-black/60 rounded-full" />
        </div>
      </div>

      {/* Cartridge shelf */}
      <div className="flex gap-3 sm:gap-4 mt-2 overflow-x-auto pb-2 px-1 justify-start sm:justify-center">
        {CARTS.map((cart) => {
          const isActive = cart.id === inserted;
          return (
            <button
              key={cart.id}
              onClick={() => handleClick(cart.id)}
              aria-pressed={isActive}
              className={`group shrink-0 w-[88px] sm:w-[100px] rounded-t-sm border-2 border-ink bg-ink transition-all duration-200 relative
                ${isActive
                  ? '-translate-y-4 shadow-hard-accent'
                  : 'shadow-hard-sm hover:-translate-y-2'
                }`}
            >
              {/* Grip ridges */}
              <div className="cart-ridges h-4 border-b-2 border-ink rounded-t-sm" />
              {/* Label sticker */}
              <div className="m-1.5 bg-paper-light border border-ink rounded-[2px] p-1.5 h-[74px] sm:h-[82px] flex flex-col">
                <div className={`h-1.5 mb-1.5 ${isActive ? 'bg-accent' : 'bg-ink/80 group-hover:bg-accent'} transition-colors`} />
                <p className="pixel-tag text-ink leading-relaxed">{cart.label}</p>
                <p className="font-mono text-[9px] text-ink-faint mt-auto">ERKIN.SYS</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
