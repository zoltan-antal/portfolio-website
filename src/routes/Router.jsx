import { createHashRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const router = createHashRouter([
  {
    basename: '/',
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'skills', element: <Skills /> },
    ],
  },
]);

export default router;
