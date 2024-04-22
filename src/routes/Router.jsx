import { createHashRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../Home.jsx';
import Portfolio from '../Portfolio.jsx';

const router = createHashRouter([
  {
    basename: '/',
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Portfolio /> },
    ],
  },
]);

export default router;
