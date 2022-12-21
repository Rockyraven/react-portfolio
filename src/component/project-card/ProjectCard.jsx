import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({projectName, image, link, description, github}) => {
  return (
    <main class="projects-main main">
      <section class=" container " id="projects">
        <ol class="list-style-none project-list-container"></ol>
        <li class="project project-quizardry-quiz flex-container flex-column justify-center align-start">
          <h2 class="">{projectName}</h2>
          <p>{description}</p>
          <div class="project-card">
            <img
              src={image}
              alt="Quizardry quiz app image"
            />
          </div>
          <div class="project-content">
            <p class="section-text"></p>
            <Link to={link} target="_blank" className='btn btn-primary primary' >Live Project</Link>
            <Link to={github} target="_blank" className='btn btn-secondary' > Github Code</Link>
          </div>
        </li>
      </section>
    </main>
  );
};
