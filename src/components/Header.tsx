import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-container">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="brand-name gold-gradient-text"
      >
        SAHASRA PERAM
      </motion.div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pill-nav glass ${scrolled ? 'scrolled' : ''}`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={`nav-link ${activeItem === item.name ? 'active' : ''}`}
          >
            {item.name}
          </a>
        ))}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <button className="hire-me-btn">Hire Me</button>
      </motion.div>
    </div>
  );
};
