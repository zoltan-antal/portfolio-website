const Projects = () => {
  const domain =
    process.env.NODE_ENV === 'production'
      ? window.location.hostname
      : 'zoltan-antal.dev';

  return (
    <>
      <h2>Projects</h2>
      <h3>Algorithm Visualiser</h3>
      <a href={`https://algorithms.${domain}`}>Link</a>
    </>
  );
};

export default Projects;
