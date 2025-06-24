'use client';

import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const winnings = [
  'João sacou R$500 via Pix 💸',
  'Maria fez R$900 agora mesmo 💰',
  'Carlos faturou R$230 em minutos 🚀',
];

export default function WinningsSlideshow() {
  const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % winnings.length);
      setAnimationKey(prevKey => prevKey + 1); // Reset animation by changing key
    }, 4000); // Duration should match animation in tailwind.config
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 w-full max-w-md mx-auto bg-black/50 border border-primary/50 rounded-lg flex items-center px-4 overflow-hidden shadow-lg shadow-primary/10">
      <Terminal className="text-primary mr-4 flex-shrink-0" />
      <div className="flex-1 text-left relative h-full">
        <div key={animationKey} className="absolute inset-0 flex items-center text-foreground animate-slide-in-right">
          <span>{winnings[index]}</span>
        </div>
      </div>
    </div>
  );
}
