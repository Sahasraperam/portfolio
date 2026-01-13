import { Header } from './components/Header';
import { SmoothScroll } from './components/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import Antigravity from './components/Antigravity';
import { Hero } from './components/Hero';
import { Preloader } from './components/Preloader';


import { ClickSpark } from './components/ClickSpark';
import { useState } from 'react';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* BASE BACKGROUND COLOR */}
      <div className="fixed inset-0 bg-[#050505] -z-[200]" />

      {/* GLOBAL ANTIGRAVITY BACKGROUND */}
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeIn" }}
              className="w-full h-full"
            >
              <Antigravity
                color="#e6c88c"
                count={1000}
                magnetRadius={5}
                ringRadius={5}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={0.5}
                lerpSpeed={0.1}
                autoAnimate={false}
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={3}
                particleShape="sphere"
                fieldStrength={10}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* INTERACTION OVERLAY */}
      <ClickSpark
        sparkColor="rgba(255, 191, 0, 0.5)"
        sparkSize={40}
        sparkRadius={40}
        sparkCount={12}
        duration={600}
      />

      {/* PRELOADER */}
      <Preloader onComplete={() => setShowContent(true)} />

      {/* MAIN CONTENT */}
      <AnimatePresence>
        {showContent && (
          <SmoothScroll>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="relative z-[1] w-full"
            >
              <Header />

              <main className="bg-transparent">
                <Hero />
              </main>

            </motion.div>
          </SmoothScroll>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
