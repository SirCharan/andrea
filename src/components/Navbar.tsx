
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="font-dancing text-2xl sm:text-3xl font-bold">
          <span className={isScrolled ? 'text-primary' : 'text-white'}>Aindrila</span>
          <span className={isScrolled ? 'text-accent' : 'text-white/90'}> Bhowmik</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/travel-diary" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}
          >
            Travel Diary
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}
          >
            Contact
          </NavLink>
          <a 
            href="https://www.instagram.com/aindrila_bhowmik/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-1 ${isScrolled ? 'text-secondary' : 'text-white/90'} hover:text-secondary transition-colors`}
          >
            <Instagram size={18} />
            <span className="font-medium">@aindrila_bhowmik</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-1 ${isScrolled ? 'text-foreground' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''} py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''} py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/travel-diary" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''} py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Travel Diary
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''} py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <a 
              href="https://www.instagram.com/aindrila_bhowmik/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-secondary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Instagram size={18} />
              <span className="font-medium">@aindrila_bhowmik</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
