import React from "react";

export const BlogCard = ({ blogName, description, image, link }) => {
  return (
   <>
      <h2 class="lead-text">{blogName}</h2>
      <div className="blog-container">
        <div>
          <img
            class="project-card"
            src={image}
          />
        </div>
        <div className="blog-desc">
          <p className="description">{description}</p>
          <a href={link} className="btn btn-primary primary" target="_blank">
            Live Project
          </a>
        </div>
      </div>
      </>
    // </section>
  );
};
