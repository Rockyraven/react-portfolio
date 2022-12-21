import React from "react";
import { ProjectCard } from "../../component";
import { projects } from "../../db/project-db";

export const Projects = () => {
  console.log(projects);
  return (
    <div>
      {projects.map((item) => (
        <ProjectCard
          key={item._id}
          projectName={item.projectName}
          image={item.image}
          link={item.link}
          description={item.description}
          github={item.github}
        />
      ))}
    </div>
  );
};
