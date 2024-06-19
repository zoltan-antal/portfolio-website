import './index.css';
import { Link } from 'react-router-dom';
import AnimatedWordDisplay from './AnimatedWordDisplay';

const Home = () => {
  return (
    <main className="home">
      <h1 id="greeting">Hi, I&apos;m Zoltán.</h1>
      <AnimatedWordDisplay
        words={['Software developer', 'Problem solver', 'Engineer']}
      />
      <p id="introduction">
        I&apos;m a software developer specialising in full-stack web
        development, based in Berkshire, UK.
      </p>
      <div className="button-group">
        <Link to="/about">
          <button>Learn more about me</button>
        </Link>
        <Link to="/projects">
          <button>Take a look at my work</button>
        </Link>
        <Link to="/contact">
          <button>Get in touch</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
