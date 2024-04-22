import { createHashRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../Home.jsx';
import About from '../About.jsx';
import Contact from '../Contact.jsx';
import Portfolio from '../Portfolio.jsx';
import Skills from '../Skills.jsx';

const router = createHashRouter([
  {
    basename: '/',
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'skills', element: <Skills /> },
    ],
  },
]);

export default router;
