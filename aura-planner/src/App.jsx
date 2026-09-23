import React, { useState } from 'react';
import HeroLanding from './components/HeroLanding';

export default function App() {
  const [page, setPage] = useState('hero');

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {page === 'hero' ? (
        <HeroLanding onStart={() => setPage('lobby')} />
      ) : (
        <div className="min-h-screen flex items-center justify-center text-white text-2xl font-bold">
          Welcome to Central Lobby! (We will build this view next)
        </div>
      )}
    </div>
  );
}
