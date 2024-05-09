import './index.css';
import { useState, useEffect } from 'react';
import Nav from './Nav';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const bodyElement = document.querySelector('.body');

    const handleScroll = () => {
      if (bodyElement.scrollTop === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    bodyElement.addEventListener('scroll', () => {
      handleScroll();
    });

    return () => {
      bodyElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <Nav></Nav>
    </header>
  );
};

export default Header;
