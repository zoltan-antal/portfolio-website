import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
