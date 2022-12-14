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
				
				<section
					id="skills"
					class="skills container flex-container flex-column align-center justify-center"
				>
					<h2 class="section-head">Skills</h2>
					<article
						class="skills-container flex-container justify-center align-center"
					>
						<ul class="skill-list">
							<li class="skill-list-item">
								<span class="skill-icon">
									<i class="fa-brands fa-html5"></i>
								</span>
								<span class="skill-title">HTML5</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon">
									<i class="fa-brands fa-css3-alt"></i>
								</span>
								<span class="skill-title">CSS3</span>
							</li>
							<li class="skill-list-item">
								<span
									class="skill-icon skill-sass"
									title="TailwindCSS"
								>
									<svg
										viewBox="0 0 50 30"
										class="text-slate-900 dark:text-white w-auto h-5"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
										></path>
									</svg>
								</span>
								<span class="skill-title">Tailwind CSS</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon">
									<i class="fa-brands fa-bootstrap"></i>
								</span>
								<span class="skill-title">Bootstrap</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon">
									<i class="fa-brands fa-js"></i>
								</span>
								<span class="skill-title">JavaScript</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon react-icon">
									<i class="fa-brands fa-react"></i>
								</span>
								<span class="skill-title">React</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon">
									<svg
										fill="#000000"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 50 50"
										width="250px"
										height="250px"
									>
										<path
											d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.752514 12.564938 30.494647 15.060547 33.859375 A 3.5 3.5 0 0 0 18.5 38 A 3.5 3.5 0 1 0 18.5 31 A 3.5 3.5 0 0 0 17.931641 31.050781 C 16.143565 28.387233 15 24.611465 15 20.486328 C 15 12.633328 19.122 6 24 6 C 28.119 6 31.689125 10.7375 32.703125 16.9375 C 34.125125 17.3455 35.541688 17.897453 36.929688 18.564453 C 36.251687 9.2704531 30.712 2 24 2 z M 22.5 17 A 3.5 3.5 0 1 0 22.5 24 A 3.5 3.5 0 0 0 25.640625 22.041016 C 28.890379 21.837485 32.64609 22.840116 36.113281 24.917969 C 42.973281 29.030969 46.703812 36.223047 44.257812 40.623047 C 43.453812 42.069047 42.005359 43.108953 40.068359 43.626953 C 37.279359 44.372953 33.859234 43.993672 30.490234 42.638672 C 29.421234 43.632672 28.245891 44.565828 26.962891 45.423828 C 30.290891 47.104828 33.8105 47.996094 37.0625 47.996094 C 38.4725 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.337906 36.117406 47.127922 26.858281 38.169922 21.488281 C 33.907448 18.931871 29.185543 17.753815 25.035156 18.09375 A 3.5 3.5 0 0 0 22.5 17 z M 9.1601562 23.324219 C 2.0791563 28.795219 -0.95795312 36.799406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.685234 8.8984375 47.490234 C 10.169438 47.830234 11.527453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.910031 46.789672 24.707031 44.513672 C 28.954867 41.96696 32.09575 38.543722 33.876953 34.962891 C 35.628054 34.772138 37 33.301038 37 31.5 C 37 29.57 35.43 28 33.5 28 C 31.57 28 30 29.57 30 31.5 C 30 32.040225 30.132082 32.546629 30.351562 33.003906 C 28.907628 35.978686 26.213448 38.945387 22.650391 41.082031 C 18.354391 43.658031 13.599641 44.609953 9.9316406 43.626953 C 7.9956406 43.108953 6.5481406 42.069047 5.7441406 40.623047 C 3.8101406 37.143047 5.7462969 31.923469 10.029297 27.855469 C 9.6182969 26.415469 9.3241562 24.899219 9.1601562 23.324219 z"
										/>
									</svg>
								</span>
								<span class="skill-title">Redux</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon">
									<i class="fa-brands fa-java"></i>
								</span>
								<span class="skill-title">Java</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon">
									<i class="fa-brands fa-github"></i>
								</span>
								<span class="skill-title">GitHub</span>
							</li>
							<li class="skill-list-item">
								<span class="skill-icon">
									<i class="fa-brands fa-git"></i>
								</span>
								<span class="skill-title">Git</span>
							</li>
						</ul>
					</article>
					<p class="skills-others section-text">
						A few other notable technologies I have worked with are:
						<span
							title="Systems, Applications & Products in Data Processing"
							></span
						>, <span>C</span>,
						<span>Java</span>. My work with these technologies
						have been limited, and I am still a beginner. But I look
						forward to work in length with them in the future.
					</p>
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
									href="https://www.github.com/bharati-21"
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
