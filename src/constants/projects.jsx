import algorithmVisualiserScreenshot from '../assets/images/screenshots/algorithm-visualiser.png';
import cvCreatorScreenshot from '../assets/images/screenshots/cv-creator.png';
import weatherAppScreenshot from '../assets/images/screenshots/weather-app.png';
import todoListScreenshot from '../assets/images/screenshots/todo-list.png';
import adminDashboardScreenshot from '../assets/images/screenshots/admin-dashboard.png';
// import libraryScreenshot from '../assets/images/screenshots/library.png';
// import ticTacToeScreenshot from '../assets/images/screenshots/tic-tac-toe.png';
import etchASketchScreenshot from '../assets/images/screenshots/etch-a-sketch.png';
import calculatorScreenshot from '../assets/images/screenshots/calculator.png';
import spaceInvadersCloneScreenshot from '../assets/images/screenshots/space-invaders-clone.png';

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
          An open-source web app offering interactive visualisations of popular
          sorting algorithms. Users can observe the sorting process in
          real-time, adjust the flow of the visualisation with interactive
          control buttons, and customise the input data. It serves as a handy
          learning tool for understanding algorithmic concepts.
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
          An open-source web app that simplifies the process of crafting and
          managing professional CVs. It features an intuitive editor where users
          can input their information to generate their CV in real-time. There
          are options for duplicating or creating multiple CVs, allowing users
          to tailor their CVs for various job applications. The app also
          supports user accounts for accessing work from any device, making it a
          convenient tool for jobseekers.
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
  {
    name: 'Household Inventory Manager',
    category: 'main',
    wip: true,
    description: (
      <>
        <p>
          An upcoming open-source web app designed to be a solution for
          household consumable inventory management. From groceries to
          toiletries, this app aims to streamline inventory tracking and
          shopping trips. Features include barcode scanning for inventory
          updates, expiry date tracking, predictive shopping list generation
          based on consumption patterns, customisable categorisation and
          labelling options, and household collaboration. With this tool, users
          can efficiently track their household items, simplify their shopping
          experience, avoid running out of essentials, and prevent food waste.
        </p>
      </>
    ),
    url: false,
    githubUrl: 'https://github.com/zoltan-antal/household-inventory',
    screenshot: cvCreatorScreenshot,
    desktop: true,
    mobile: true,
    darkMode: true,
    colourblindFriendly: false,
    technologies: [
      'nodejs',
      'express',
      'postgresql',
      'typescript',
      'react',
      'passportjs',
      'jwt',
      'redux',
      'axios',
      'reactrouter',
    ],
  },
  {
    name: 'Weather App',
    category: 'learning',
    wip: false,
    description: (
      <>
        <p>
          A weather app created to practise fetching data from third-party APIs.
        </p>
        <p>
          Users can look up weather anywhere in the world and switch between
          hourly and daily forecasts.
        </p>
      </>
    ),
    url: 'https://zoltan-antal.github.io/weather-app/',
    githubUrl: 'https://github.com/zoltan-antal/weather-app',
    screenshot: weatherAppScreenshot,
    desktop: true,
    mobile: false,
    darkMode: false,
    colourblindFriendly: false,
    technologies: ['javascript'],
  },
  {
    name: 'To-Do List',
    category: 'learning',
    wip: false,
    description: (
      <>
        <p>Created to practise object-oriented design concepts.</p>
        <p>
          Users can create projects and populate them with tasks, which have
          properties such as description, due date and priority. The tasks can
          later be modified, deleted or marked as completed.
        </p>
      </>
    ),
    url: 'https://zoltan-antal.github.io/todo-list/',
    githubUrl: 'https://github.com/zoltan-antal/todo-list',
    screenshot: todoListScreenshot,
    desktop: true,
    mobile: false,
    darkMode: false,
    colourblindFriendly: false,
    technologies: ['javascript'],
  },
  {
    name: 'Admin Dashboard',
    category: 'learning',
    wip: false,
    description: (
      <>
        <p>
          An imaginary admin dashboard created to practise CSS Grid & Flexbox.
        </p>
      </>
    ),
    url: 'https://zoltan-antal.github.io/admin-dashboard/',
    githubUrl: 'https://github.com/zoltan-antal/admin-dashboard',
    screenshot: adminDashboardScreenshot,
    desktop: true,
    mobile: false,
    darkMode: false,
    colourblindFriendly: false,
    technologies: ['css'],
  },
  // {
  //   name: 'Library',
  //   category: 'learning',
  //   wip: false,
  //   description: (
  //     <>
  //       <p>Created to practise object-oriented design concepts.</p>
  //       <p>
  //         Users can create books with properties such as title, author and page
  //         count. The books can later be modified, deleted or marked as read.
  //       </p>
  //     </>
  //   ),
  //   url: 'https://zoltan-antal.github.io/library/',
  //   githubUrl: 'https://github.com/zoltan-antal/library',
  //   screenshot: libraryScreenshot,
  //   desktop: true,
  //   mobile: false,
  //   darkMode: false,
  //   colourblindFriendly: false,
  //   technologies: ['javascript'],
  // },
  // {
  //   name: 'Tic-tac-toe',
  //   category: 'learning',
  //   wip: false,
  //   description: (
  //     <>
  //       <p>Created to practise object-oriented design concepts.</p>
  //       <p>
  //         The classic tic-tac-toe game playable by two players.
  //       </p>
  //     </>
  //   ),
  //   url: 'https://zoltan-antal.github.io/tic-tac-toe/',
  //   githubUrl: 'https://github.com/zoltan-antal/tic-tac-toe',
  //   screenshot: ticTacToeScreenshot,
  //   desktop: true,
  //   mobile: false,
  //   darkMode: false,
  //   colourblindFriendly: false,
  //   technologies: ['javascript'],
  // },
  {
    name: 'Etch-A-Sketch',
    category: 'learning',
    wip: false,
    description: (
      <>
        <p>
          Created to practise event-handling and DOM-manipulation techniques in
          JavaScript.
        </p>
        <p>
          A recreation of the classic game with fill, shade, colour & eraser
          modes and options to change the grid size, toggle gridlines, and clear
          the grid.
        </p>
      </>
    ),
    url: 'https://zoltan-antal.github.io/etch-a-sketch/',
    githubUrl: 'https://github.com/zoltan-antal/etch-a-sketch',
    screenshot: etchASketchScreenshot,
    desktop: true,
    mobile: false,
    darkMode: false,
    colourblindFriendly: false,
    technologies: ['javascript'],
  },
  {
    name: 'Calculator',
    category: 'learning',
    wip: false,
    description: (
      <>
        <p>
          A simple calculator created to practise basic JavaScript and general
          programming techniques.
        </p>
      </>
    ),
    url: 'https://zoltan-antal.github.io/calculator/',
    githubUrl: 'https://github.com/zoltan-antal/calculator',
    screenshot: calculatorScreenshot,
    desktop: true,
    mobile: false,
    darkMode: false,
    colourblindFriendly: false,
    technologies: ['javascript'],
  },
  {
    name: 'Space Invaders Clone',
    category: 'learning',
    wip: false,
    description: (
      <>
        <p>
          Written in the Lisp-like language Racket to practise functional
          programming concepts.
        </p>
        <p>
          Final project of the University of British Columbia&apos;s systematic
          programming design course &lsquo;How to Code&lsquo; based on the
          &lsquo;How to Design Programs&lsquo; book by Felleisen et al.
        </p>
      </>
    ),
    url: false,
    githubUrl:
      'https://github.com/zoltan-antal/how-to-code/blob/main/Final%20Project%20-%20Space%20Invaders/space-invaders-clone%20v2.rkt',
    screenshot: spaceInvadersCloneScreenshot,
    desktop: true,
    mobile: false,
    darkMode: false,
    colourblindFriendly: false,
    technologies: ['racket'],
  },
];

export default projects;
