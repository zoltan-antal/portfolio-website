import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../Home.jsx';
import Projects from '../Projects.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
]);

export default router;
