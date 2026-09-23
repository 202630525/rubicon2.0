import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const NATURE_BACKGROUNDS = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80',
];

const INSPIRATIONAL_QUOTES = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "You don't have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
];

export default function HeroLanding({ onStart }) {
  const [bgUrl, setBgUrl] = useState('');
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    // Pick a random background image and quote each time page loads
    const randomBg = NATURE_BACKGROUNDS[Math.floor(Math.random() * NATURE_BACKGROUNDS.length)];
    const randomQuote = INSPIRATIONAL_QUOTES[Math.floor(Math.random() * INSPIRATIONAL_QUOTES.length)];
    
    setBgUrl(randomBg);
    setQuote(randomQuote);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-between p-8 select-none">
      {/* Background Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />
      </div>

      {/* Quote Card */}
      <div className="relative z-10 my-auto max-w-2xl mx-auto text-center px-4">
        <div className="glass-panel p-8 sm:p-10 animate-fade-in">
          <Sparkles className="w-7 h-7 text-amber-300 mx-auto mb-3 animate-pulse" />
          <p className="text-2xl sm:text-3xl font-light text-white leading-relaxed italic mb-4">
            "{quote.text}"
          </p>
          <p className="text-sm text-white/80 font-medium uppercase tracking-widest">
            — {quote.author}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="relative z-10 text-center pb-8">
        <button
          onClick={onStart}
          className="glass-button px-8 py-4 text-lg font-bold tracking-wide text-white flex items-center gap-3 mx-auto group border-2 border-white/50 hover:border-white"
        >
          <span>공부 시작하자!^^</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
