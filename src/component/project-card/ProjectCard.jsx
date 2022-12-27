import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({projectName, image, link, description, github}) => {
  return ( 
      <section class=" container project" id="projects">
        <ol class="list-style-none project-list-container"></ol>
        <li class="project project-quizardry-quiz flex-container flex-column justify-center align-start">
          <h2 class="">{projectName}</h2>
          <p class="description">{description}</p>
          <div class="project-card">
            <img
              src={image}
              alt="Quizardry quiz app image"
            />
          </div>
          <div class="project-content">
            <a
							href={link}
							className='btn btn-primary primary'
							target="_blank"
						>
							Live Project
						</a>
            <a
							href={github}
							className='btn btn-secondary'
							target="_blank"
						>
							Github Code
						</a>
          </div>
        </li>
      </section>
  );
};
