import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Projetos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;