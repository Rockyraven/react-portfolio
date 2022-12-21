import React from "react";

export const Blogs = () => {
  return (
    <main class="blogs-main main">
      <section class="blogs container" id="blogs">
        <h1 class="hero-text text-center">My Blogs</h1>
        <div className="blog-container">
          <div class="blog-post-container">
            <h2 class="lead-text">Memoization In React</h2>
            <img
              class="project-card"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=200"
            />
          </div>
          <div className="blog-desc">
            <h3>First Blog</h3>
          </div>
        </div>
      </section>
    </main>
  );
};
