import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* <p>
        Hey there! I&apos;m Zoltan, a full-stack software developer specialising
        in web development. With a background in Aerospace Engineering I bring a
        unique blend of analytical thinking and creative problem-solving to
        every project.
      </p>
      <p>
        My web development toolkit includes React for front-end, ExpressJS for
        back-end, and MongoDB & PostgreSQL for database management. Whether
        it&apos;s building engaging user-interfaces or designing scalable
        backend systems, I&apos;m dedicated to delivering high-quality solutions
        that exceed expectations.
      </p>
      <p>
        In my free time, I enjoy tackling coding challenges using Python,
        constantly seeking to hone my problem-solving skills and explore new
        concepts.
      </p> */}
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/projects">
        <button>See my projects</button>
      </Link>
    </>
  );
};

export default Home;
