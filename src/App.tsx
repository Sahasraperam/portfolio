import { Header } from './components/Header';
import { SmoothScroll } from './components/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import Hyperspeed from './components/Hyperspeed';
// @ts-ignore
import { hyperspeedPresets } from './components/HyperSpeedPresets';
import { Preloader } from './components/Preloader';
import { ClickSpark } from './components/ClickSpark';
// @ts-ignore
import FloatingLines from './components/FloatingLines';
import { useState } from 'react';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-bgMain -z-10" />

      {/* Full-screen Background Floating Lines */}
      <div className="fixed inset-0 z-[-5] opacity-25 pointer-events-none">
        <FloatingLines
          linesGradient={[
            "#C9A24D",
            "#8B5A3C",
            "#B06A5A"
          ]}
          animationSpeed={0.4}
          lineCount={12}
          interactive={false}
        />
      </div>

      <ClickSpark
        sparkColor="rgba(230, 200, 140, 1)"
        sparkSize={40}
        sparkRadius={40}
        sparkCount={15}
        duration={600}
        easing="ease-out"
        extraScale={1.5}
      >
        <Preloader onComplete={() => setShowContent(true)} />

        <AnimatePresence>
          {showContent && (
            <SmoothScroll>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="app-container text-textPrimary min-h-screen"
              >
                <Header />

                <main>
                  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-100">
                      <Hyperspeed
                        effectOptions={hyperspeedPresets.three}
                      />
                    </div>


                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="hero-content relative z-10 text-center"
                    >
                      <h1 className="text-7xl font-bold mb-4">
                        Building <span className="gold-gradient-text">Experiences</span>
                      </h1>
                      <p className="text-textSecondary text-xl max-w-2xl mx-auto italic">
                        Premium digital solutions crafted with precision and elegance.
                      </p>
                    </motion.div>
                  </section>

                  <section id="about" className="bg-bgSecondary min-h-[60vh]">
                    <h2 className="gold-gradient-text text-4xl font-bold mb-12">About Me</h2>
                    <p className="text-textSecondary mt-8 text-lg max-w-3xl text-center">
                      Exploring the boundaries of technology and design to create digital experiences that resonate and inspire. Crafted with precision and passion for premium aesthetics.
                    </p>
                  </section>

                  <section id="projects">
                    <h2 className="gold-gradient-text text-4xl font-bold">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="glass p-8 rounded-[24px] h-[300px] flex items-center justify-center border border-borderSubtle">
                          <h3 className="text-goldMain text-2xl font-semibold">Project {i}</h3>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="tech-stack" className="bg-bgSecondary">
                    <h2 className="gold-gradient-text text-4xl font-bold">Tech Stack</h2>
                    <div className="flex flex-wrap gap-4 justify-center mt-12">
                      {['React', 'TypeScript', 'Node.js', 'Framer Motion', 'Three.js', 'Tailwind', 'Next.js'].map((tech) => (
                        <span key={tech} className="glass px-6 py-3 rounded-full text-base font-medium border border-borderSubtle transition-all hover:scale-110 hover:border-goldMain cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section id="journey">
                    <h2 className="gold-gradient-text text-4xl font-bold">The Journey</h2>
                    <div className="mt-12 w-full max-w-3xl">
                      <div className="p-8 border-l-2 border-goldDeep relative ml-4">
                        <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-goldMain shadow-[0_0_10px_var(--gold-main)]"></div>
                        <h3 className="text-textPrimary text-2xl font-bold">Present</h3>
                        <p className="text-textSecondary mt-2 text-lg">Crafting high-end web applications with modern technologies and a focus on premium aesthetics.</p>
                      </div>
                    </div>
                  </section>

                  <section id="contact" className="bg-bgSecondary">
                    <h2 className="gold-gradient-text text-4xl font-bold">Get In Touch</h2>
                    <p className="text-textSecondary text-xl mb-12 italic">Ready to start your next premium project?</p>
                    <a href="mailto:hello@example.com" className="glass px-12 py-4 rounded-full text-goldMain font-bold text-lg hover:scale-105 transition-transform border border-goldMuted">
                      Say Hello
                    </a>
                  </section>
                </main>

                <footer className="py-10 text-center text-textMuted text-sm border-t border-borderSubtle bg-bgMain">
                  © 2026 Sahasra Peram. Crafted with Elegance.
                </footer>
              </motion.div>
            </SmoothScroll>
          )}
        </AnimatePresence>
      </ClickSpark>
    </>
  );
}

export default App;
