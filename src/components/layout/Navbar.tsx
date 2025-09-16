import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '../../data/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDivisionsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Business Divisions', 
      href: '/divisions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Divisions', href: '/divisions' },
        { name: 'Catering Services', href: '/divisions/catering-services' },
        { name: 'Facility Management', href: '/divisions/facility-management' },
        { name: 'Board & Lodging', href: '/divisions/board-lodging' },
        { name: 'Contracting', href: '/divisions/contracting-construction' },
        { name: 'Industrial Services', href: '/divisions/industrial-services' },
        { name: 'Transportation', href: '/divisions/transportation-services' },
      ]
    },
    { name: 'Tamimi Markets', href: '/markets' },
    { name: 'CSR', href: '/csr' },
    { name: 'News & Investors', href: '/news' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'glass backdrop-blur-xl border-b border-line shadow-lg text-text-primary' 
          : 'bg-transparent text-text-inverse'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-luxury">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/TamimiGroup.png"
              alt="Tamimi Group"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 font-medium transition-all duration-300 ${
                        isActiveLink(item.href) 
                          ? 'text-gold' 
                          : (isScrolled || isMenuOpen ? 'text-text-primary hover:text-ivory' : 'text-white/90 hover:text-white')
                      }`}
                      onMouseEnter={() => setIsDivisionsOpen(true)}
                      onMouseLeave={() => setIsDivisionsOpen(false)}
                      aria-expanded={isDivisionsOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          isDivisionsOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isDivisionsOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 glass backdrop-blur-xl border border-line rounded-2xl shadow-luxury overflow-hidden"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          onMouseEnter={() => setIsDivisionsOpen(true)}
                          onMouseLeave={() => setIsDivisionsOpen(false)}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-6 py-3 text-ivory hover:text-gold hover:bg-surface-secondary transition-all duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative font-medium transition-all duration-300 ${
                      isActiveLink(item.href) 
                        ? 'text-gold' 
                        : (isScrolled || isMenuOpen ? 'text-text-primary hover:text-ivory' : 'text-white/90 hover:text-white')
                    }`}
                  >
                    {item.name}
                    {isActiveLink(item.href) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                        layoutId="navbar-underline"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-ivory hover:text-gold hover:bg-surface-secondary transition-all duration-300"
            aria-expanded={isMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden glass backdrop-blur-xl border-t border-line"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="py-6" role="navigation" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                          className="flex items-center justify-between w-full px-6 py-3 text-ivory hover:text-gold transition-colors duration-200"
                          aria-expanded={isDivisionsOpen}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              isDivisionsOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {isDivisionsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-surface-secondary"
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="block px-10 py-2 text-steel hover:text-gold transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-6 py-3 font-medium transition-colors duration-200 ${
                          isActiveLink(item.href) 
                            ? 'text-gold bg-surface-secondary' 
                            : 'text-ivory hover:text-gold hover:bg-surface-secondary'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;