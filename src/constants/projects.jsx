import algorithmVisualiserScreenshot from '../assets/images/screenshots/algorithm-visualiser.png';
import cvCreatorScreenshot from '../assets/images/screenshots/cv-creator.png';

const domain =
  process.env.NODE_ENV === 'production'
    ? window.location.hostname
    : 'zoltan-antal.dev';

const projects = [
  {
    name: 'Algorithm Visualiser',
    category: 'main',
    wip: false,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
    url: `https://algorithms.${domain}`,
    githubUrl: 'https://github.com/zoltan-antal/algorithm-visualiser',
    screenshot: algorithmVisualiserScreenshot,
    desktop: true,
    mobile: true,
    darkMode: true,
    colourblindFriendly: true,
    technologies: ['typescript', 'react'],
  },
  {
    name: 'CV Creator',
    category: 'main',
    wip: false,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </>
    ),
    url: `https://cv-creator.${domain}`,
    githubUrl: 'https://github.com/zoltan-antal/cv-creator',
    screenshot: cvCreatorScreenshot,
    desktop: true,
    mobile: false,
    darkMode: false,
    colourblindFriendly: false,
    technologies: [
      'nodejs',
      'express',
      'mongodb',
      'javascript',
      'react',
      'mongoose',
      'passportjs',
      'jwt',
      'redux',
      'axios',
    ],
  },
];

export default projects;
