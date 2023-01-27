import React from "react";

export const HomePage = () => {
  return (

    
    



    <div className="body-wrapper">
      <section class="showcase flex-container justify-center align-center flex-column">
        <article class="text-content flex-container flex-column align-start justify-center">
          <h1 class="hero-text">
            Hi, I am
            <strong class="hero-name ">Rocky</strong>
          </h1>
          <p class="lead-text">
            I am a frontend developer who is currently exploring and developing
            Fullstack applications using React, JavaScript/ TypeScript, Express,
            Node.js and MongoDB.
          </p>
          <div class="buttons-container showcase-buttons flex-container align-center justify-center">
            <a href="/" target="_blank" class="btn btn-primary">
              Download Resume
            </a>
            <a href="#about" class="btn btn-secondary">
              About Me
            </a>
          </div>
        </article>
      </section>


      <main class="main">
      
				
				 <section
					class="about container flex-container flex-column align-center justify-center"
					id="about"
				>
					<article class="about-container">
						<h2 class="section-head">About me</h2>
						<p class="section-lead lead-text">
							Front-End Developer
						</p>
						
						<p class="section-text">
							I'm pursing MCA Computer Applications from NIT Raipur 2021-24 <br />
							I am a frontend developer who is currently exploring
							and developing Fullstack applications using React,
							JavaScript/ TypeScript, Express, Node.js and
							MongoDB.
							<br /><br />

							I also enjoy problem-solving and have invested quite
							some time to strengthen my ability in the domain.
							I've explored techniques to choose the best possible
							data structures and apply algorithms for solving
							problems on coding platforms such as LeetCode. I
							enjoy web designing and would love to learn and gain
							experience in UI/UX designing too.
							
						</p>
					</article>
				</section> 
				
				<section class="projects container" id="projects">
					<h2 class="section-head">Projects</h2>
					<article
						class="content flex-container flex-row-reverse align-center justify-center"
					>
						<div class="flex-item image-content">
							<img
								src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=200"
								alt=""
								class="project-image"
							/>
						</div>
						<div class="flex-item text-content">
							<p class="section-text">
								I love to build and develop challenging, new
								applications. The best means to become better at
								programming is by developing applications that
								translate theory into something live and
								working. In addition, this practice also adds to
								confidence, enhances code quality, and
								encourages documenting your journey.
								<br /><br />
								I'm currently improving my HTML, CSS,
								JavaScript, and ReactJS skills by developing
								front-end applications.
							</p>
							<div
								class="buttons-container flex-container justify-center align-start project-buttons"
							>
								<a href="./projects/" class="btn btn-primary"
									>My Projects</a
								>
								<a
									href="https://github.com/Rockyraven"
									target="_blank"
									class="btn btn-secondary"
									>Browse GitHub
									<i class="fa-brands fa-github"></i
								></a>
							</div>
						</div>
					</article>
				</section>
				
				<section class="blogs container" id="blogs">
					<h2 class="section-head">Blogs</h2>
					<article
						class="content flex-container flex-row align-center justify-center"
					>
						<div class="flex-item image-content">
							<img
								src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=200"
								alt=""
								class="blog-image"
							/>
						</div>
						<div class="flex-item text-content">
							<p class="section-text">
								I also try to document my journey and learnings
								through blog posts. I often try to write blog
								posts on topics that I find difficult to grasp.
								The writing process allows me to work on my
								presentation skills and filter content to
								highlight only the relevant concepts.
								<br /><br />
								Blog writing, I feel, is the classic case of
								"learning by teaching"! The abundance of
								research behind a blog post adds to a tremendous
								amount of knowledge and learning how to convert
								thoughts, theory, and knowledge into describable
								words.
							</p>
							<div
								class="buttons-container flex-container justify-center align-start project-buttons"
							>
								<a href="./blogs/" class="btn btn-primary"
									>My Blog Posts</a
								>
								<a
									href="https://dev.to/bharati21"
									target="_blank"
									class="btn btn-secondary"
									>Browse Dev <i class="fa-brands fa-dev"></i
								></a>
							</div>
						</div>
					</article>
				</section>
			</main>

    </div>
  );
};
