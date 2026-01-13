import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
// @ts-ignore
import Hyperspeed from './Hyperspeed';
// @ts-ignore
import { hyperspeedPresets } from './HyperSpeedPresets';

const revealWords = ["WELCOME", "THIS IS", "SAHASRA PERAM"];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Paced timing for a more cinematic feel (Total ~6.5 seconds)
    const wordTimers = [
      setTimeout(() => setWordIndex(1), 1800), // Show 'THIS IS' at 1.8s
      setTimeout(() => setWordIndex(2), 3600), // Show 'SAHASRA PERAM' at 3.6s
    ];

    const exitTimer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 1200); // Wait for final fade
    }, 6000); // Start exit at 6.0s

    return () => {
      wordTimers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Enhanced Background traversal */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
            <Hyperspeed effectOptions={hyperspeedPresets.three} />
          </div>

          {/* Vignette overlay for depth */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)',
            pointerEvents: 'none'
          }} />

          <div className="relative z-10 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={wordIndex}
                initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(15px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -40, scale: 1.1, filter: 'blur(15px)' }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1], // Custom cinematic cubic-bezier
                }}
                style={{ textAlign: 'center' }}
              >
                <h1
                  className={wordIndex === 2 ? "gold-gradient-text" : "text-white"}
                  style={{
                    fontSize: wordIndex === 2 ? '6rem' : '4.5rem',
                    fontWeight: 900,
                    letterSpacing: wordIndex === 2 ? '0.15em' : '0.1em',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                    textShadow: wordIndex === 2 ? '0 0 30px rgba(255, 191, 0, 0.3)' : 'none'
                  }}
                >
                  {revealWords[wordIndex]}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Premium Subtle Progress Indicator */}
            <div style={{
              marginTop: '60px',
              width: '300px',
              height: '1px',
              background: 'rgba(255, 191, 0, 0.1)',
              position: 'relative'
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: "linear" }}
                style={{
                  height: '100%',
                  background: 'var(--gold-main)',
                  boxShadow: '0 0 15px var(--gold-main)'
                }}
              />
            </div>
          </div>

          {/* Luxury Frame Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              border: '1px solid var(--gold-deep)',
              margin: '30px',
              borderRadius: '4px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
