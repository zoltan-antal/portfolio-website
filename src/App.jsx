import './App.css';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('ZoltanAntalDarkMode') !== null
      ? JSON.parse(localStorage.getItem('ZoltanAntalDarkMode'))
      : window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <Outlet context={{ darkMode }} />
      <Footer darkMode={darkMode}></Footer>
    </>
  );
};

export default App;
