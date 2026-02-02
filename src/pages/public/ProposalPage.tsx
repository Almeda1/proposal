import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "2347080779953"; 
const WHATSAPP_MESSAGE = encodeURIComponent("Yes daddy, I'll be your valentine");

// --- ICONS ---
const HeartIcon = ({ className, fill = "currentColor" }: { className?: string, fill?: string }) => (
  <svg className={className} fill={fill} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.787-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

type PageState = 'question' | 'success' | 'error';

export function ProposalPage() { 
  const [pageState, setPageState] = useState<PageState>('question');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- OPTIMIZED ANIMATIONS ---
  const customStyles = `
    @keyframes floatUp {
      0% { transform: translateY(0) scale(0.5); opacity: 0; }
      20% { opacity: 0.6; }
      100% { transform: translateY(-110vh) scale(1.1); opacity: 0; }
    }
    .floating-bg {
      position: fixed;
      bottom: -10vh;
      animation: floatUp 15s infinite linear;
      z-index: 0;
      opacity: 0;
      will-change: transform; /* Critical for mobile perf */
    }

    @keyframes zoomIn {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
    }
    .animate-zoom-in {
      animation: zoomIn 0.4s ease-out both;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-8px); }
      75% { transform: translateX(8px); }
    }
    .animate-shake {
      animation: shake 0.3s ease-in-out both;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  return (
    <div 
      className="min-h-screen text-white font-sans overflow-x-hidden relative selection:bg-rose-500 flex flex-col items-center justify-center"
      // Optimized Background Gradient
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(8, 145, 178, 0.2) 0%, transparent 50%),
          #172554
        `
      }}
    >
      <style>{customStyles}</style>

      {/* --- REDUCED FLOATING ICONS (Count: 12) --- */}
      <div className="fixed inset-0 pointer-events-none transition-all duration-500">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`floating-bg ${pageState === 'error' ? 'text-3xl' : 'text-red-500/50'}`} 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${20 + Math.random() * 30}px`
            }}
          >
            {pageState === 'error' ? '😡' : '❤️'}
          </div>
        ))}
      </div>

      {/* --- BACK BUTTON --- */}
      {pageState === 'question' && (
        <Link 
          to="/" 
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium active:scale-95 transition-transform"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </Link>
      )}

      <main className={`relative z-10 w-full max-w-4xl px-6 text-center transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* --- STATE 1: THE QUESTION --- */}
        {pageState === 'question' && (
          // Reduced backdrop blur to 'md'
          <div className="animate-fade-in bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-800/50 text-blue-200 border border-blue-400/30 font-semibold text-xs tracking-widest uppercase mb-6">
                Top Secret Question
              </span>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Will you be my <br /> <span className="text-red-500 inline-block">Valentine?</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <button
                onClick={() => setPageState('success')}
                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xl font-bold rounded-full shadow-lg active:scale-95 transition-transform duration-150 flex justify-center items-center gap-2"
              >
                <HeartIcon className="w-6 h-6" fill="currentColor" />
                <span>YES, Absolutely!</span>
              </button>

              <button
                onClick={() => setPageState('error')}
                className="w-full md:w-auto px-10 py-4 bg-transparent border-2 border-blue-300/30 text-blue-200 text-xl font-bold rounded-full active:bg-blue-800/30 active:scale-95 transition-transform duration-150"
              >
                No, I Hate You.
              </button>
            </div>
          </div>
        )}

        {/* --- STATE 2: SUCCESS (YES) --- */}
        {pageState === 'success' && (
          <div className="animate-zoom-in bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-2xl">
            <div className="inline-flex justify-center items-center w-24 h-24 bg-red-500/20 rounded-full mb-6">
              <HeartIcon className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              SHE SAID YES!
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium mb-10">
              I LOVE YOU SO MUCH! ❤️‍🔥
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-green-500 text-white font-bold shadow-lg active:scale-95 transition-transform duration-150 flex justify-center items-center gap-2"
              >
                <WhatsappIcon className="w-6 h-6" />
                Send Response
              </a>

              {/* Replay Button */}
              <button 
                onClick={() => window.location.reload()} 
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-blue-900 font-bold shadow-lg active:scale-95 transition-transform duration-150"
              >
                Replay Proposal
              </button>
            </div>
          </div>
        )}

        {/* --- STATE 3: ERROR (NO) --- */}
        {pageState === 'error' && (
          <div className="animate-shake bg-red-950/60 backdrop-blur-md border border-red-500/30 p-10 rounded-3xl shadow-xl">
            <div className="inline-flex justify-center items-center w-24 h-24 bg-red-600/20 rounded-full mb-6">
              <XIcon className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-red-500 mb-6 uppercase">
              Wrong Answer
            </h1>
            <p className="text-lg md:text-xl text-red-200 mb-10">
              System Error: That option is not available for this user.
            </p>
            
            <button 
              onClick={() => setPageState('question')} 
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-red-600 font-bold shadow-lg active:scale-95 transition-transform duration-150 uppercase tracking-wide"
            >
              Kindly Correct Yourself
            </button>
          </div>
        )}
      </main>
    </div>
  );
}