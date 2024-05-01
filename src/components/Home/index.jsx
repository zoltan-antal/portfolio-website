import './index.css';
import { Link } from 'react-router-dom';
import AnimatedWordDisplay from './AnimatedWordDisplay';

const Home = () => {
  return (
    <main className="home">
      <h1 className="greeting">Hi, I&apos;m Zoltán.</h1>
      <AnimatedWordDisplay
        words={['Software developer', 'Problem solver', 'Engineer']}
      />
      <p className="introduction">
        I&apos;m a full-stack software developer specialising in web
        development, based in Berkshire, UK.
      </p>
      <div className="links">
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
