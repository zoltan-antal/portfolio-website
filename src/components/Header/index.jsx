import './index.css';
import { useState, useEffect } from 'react';
import Nav from './Nav';

const Header = () => {
  const mobileLayout =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const rootElement = document.querySelector('#root');
    let prevScrollPos = rootElement.scrollTop;
    const topClearance = 100;

    const handleScroll = () => {
      const currentScrollPos = rootElement.scrollTop;

      if (currentScrollPos === 0) {
        // Scrolled to the top
        setHeaderFixed(false);
      } else if (
        rootElement.clientHeight + topClearance >=
        rootElement.scrollHeight
      ) {
        // Scrolling range is small
        setHeaderFixed(true);
      } else if (
        rootElement.clientHeight + rootElement.scrollTop >=
          rootElement.scrollHeight &&
        !mobileLayout
      ) {
        // Scrolled to the bottom
        setHeaderFixed(true);
      } else if (currentScrollPos < prevScrollPos) {
        // Scrolling up
        setHeaderFixed(true);
      } else {
        // Scrolling down
        setHeaderFixed(false);
      }

      prevScrollPos = currentScrollPos;
    };

    rootElement.addEventListener('scroll', handleScroll);

    return () => {
      rootElement.removeEventListener('scroll', handleScroll);
    };
  }, [mobileLayout]);

  return (
    <header className={`${headerFixed ? 'fixed' : ''}`}>
      <Nav></Nav>
    </header>
  );
};

export default Header;
