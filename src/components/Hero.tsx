import { motion } from 'framer-motion';
import RotatingText from './RotatingText';

const rotatingWords = ['Products', 'Systems', 'Experiences', 'Intelligence', 'Platforms'];
const capabilities = ['Web', 'Backend', 'AI', 'UI/UX', 'Automation', 'Performance'];

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 px-4 sm:px-8">

      {/* Main Headline Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-5xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-8 md:mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {/* Stable First Line */}
          <span className="text-white/90 whitespace-nowrap">
            From Idea to Interface to
          </span>

          {/* Rotating Text Component */}
          <span className="relative inline-flex items-center justify-start h-[1.2em] w-[280px] sm:w-[350px] md:w-[450px] overflow-visible">
            <RotatingText
              texts={rotatingWords}
              mainClassName="px-2 sm:px-3 md:px-0 overflow-visible text-[#FFBF00]"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitBy="characters"
              rotationInterval={3000}
              auto={true}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white/60 font-medium tracking-wide max-w-2xl mx-auto mb-16"
        >
          Designing, engineering, and scaling technology across domains.
        </motion.p>

        {/* Capability Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8"
        >
          {capabilities.map((cap, index) => (
            <div key={cap} className="flex items-center">
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-white/40">
                {cap}
              </span>
              {index !== capabilities.length - 1 && (
                <span className="hidden sm:block w-1.5 h-1.5 bg-white/20 rounded-full ml-8" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
