import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // CSS for the floating background animation
  const animationStyles = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
      20% { opacity: 0.8; } /* Increased opacity here too for better visibility */
      100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    .floating-heart {
      position: absolute;
      animation: float 15s linear infinite;
      bottom: -10%;
      opacity: 0;
    }
  `;

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <style>{animationStyles}</style>

      {/* --- FLASHY BACKGROUND ELEMENTS (Royal Blue Theme) --- */}
      {/* 1. Large Glow Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-cyan-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* 2. Floating Hearts (MORE VIVID RED) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            // Changed to text-red-500/60 for more vividness
            className="floating-heart text-red-500/60 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${20 + Math.random() * 30}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* --- MAIN CARD --- */}
      <div className={`
        relative z-10 max-w-2xl w-full 
        bg-white/5 backdrop-blur-2xl border border-white/10 
        p-8 md:p-12 rounded-3xl text-center shadow-2xl shadow-blue-900/50
        transform transition-all duration-1000 ease-out
        ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}
      `}>
        
        {/* Bouncing Envelope */}
        <div className="text-7xl mb-6 animate-bounce drop-shadow-lg">💌</div>
        
        {/* Title with Gradient Text (Blue/Cyan) */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Hello <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Darling.</span>
        </h1>

        {/* --- BODY TEXT --- */}
        <div className="space-y-6 text-blue-100/90 text-lg md:text-xl leading-relaxed mb-10 font-light">
          {/* Part 1 */}
          <p className={`transform transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            So this is me trying to put into words how much you mean to me and how you make me feel.
            You have a way of making things feel steady, even on ordinary days. 
            Being around you feels easy, like nothing needs to be forced.
          </p>
          
          {/* Part 2 */}
          <p className={`transform transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            I like the pace we’ve found and how naturally everything seems to fall into place. 
            I’m comfortable here, and I don’t take that lightly. 
          </p>
        </div>

        {/* --- GLOWING BUTTON (Blue Gradient) --- */}
        <Link 
          to="/proposal" 
          className={`
            group relative inline-flex items-center gap-3 px-10 py-5 
            bg-gradient-to-r from-blue-600 to-cyan-600 
            text-white rounded-full font-bold text-xl tracking-wide
            shadow-lg shadow-blue-600/40 
            transition-all duration-300 
            hover:scale-110 hover:shadow-cyan-500/60 hover:-translate-y-1
            transform ${mounted ? 'opacity-100' : 'opacity-0'}
            delay-[1500ms]
          `}
        >
          <span className="relative z-10">So...</span>
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          
          {/* Button inner glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>

      </div>
      
      <p className="absolute bottom-6 text-blue-400/60 text-xs font-medium uppercase tracking-[0.2em] animate-pulse">
        Made with ❤️ for you
      </p>
    </div>
  );
}