import Title from "./Title";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <Title title="Portfolio" />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
