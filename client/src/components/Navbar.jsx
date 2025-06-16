import { useState, useEffect, forwardRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import NavLinks from './nav/NavLinks';
import MainIcon from './icons/MainIcon';
import FadeIn from './style/FadeIn';

const Navbar = forwardRef((props, ref) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      ref={ref}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 
        ${show
          ? 'translate-y-0 pointer-events-auto'
          : '-translate-y-full pointer-events-none'
        } bg-primary/25 backdrop-blur-md`}
    >
      <div className="mx-auto px-2 py-1 flex justify-between items-center">
        {/* <h1 className="text-xl font-bold">MySite</h1> */}

        <FadeIn className={'flex w-full justify-between items-center'}>
          <MainIcon />
          {/* Desktop Menu */}
          <NavLinks />
        </FadeIn>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 transition-all">
          <NavLinks isMobile />
        </div>
      )}
    </nav>
  );
});

// Add display name for debugging
Navbar.displayName = 'Navbar';

export default Navbar;