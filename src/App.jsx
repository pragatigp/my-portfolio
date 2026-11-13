

import "./App.css";

function App() {
  const skills = [
    "Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "REST APIs",
    "JWT Authentication",
    "Docker",
    "Git",
    "GitHub",
    "Postman",
  ];

  const projects = [
    {
      number: "01",
      name: "GenAI Interview Preparation Platform",
      description:
        "An AI-powered interview preparation platform that analyzes resumes, candidate profiles, and job descriptions. It generates job match scores, interview questions, skill-gap analysis, personalized preparation plans, and ATS-friendly resumes.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini API",
      ],
      github:
        "https://github.com/pragatigp/genai-interview-frontend",
      demo:
        "https://genai-interview-frontend.vercel.app/login",
    },
    {
      number: "02",
      name: "Blogify",
      description:
        "A full-stack blogging platform with user registration, authentication, blog creation and management, comments, role-based access control, and image uploads.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "JWT",
      ],
      github: "https://github.com/pragatigp/Blogify",
      demo: "https://blogify-a9bd.onrender.com/",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          PG.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <main className="hero" id="home">
        <p className="intro">HELLO, I'M</p>

        <h1>Pragati Gupta.</h1>

        <h2>Full Stack Developer</h2>

        <p className="description">
          I build responsive web applications and
          AI-powered solutions using modern web
          technologies. Passionate about creating
          practical products and solving problems
          through code.
        </p>

       
<div className="hero-buttons">
  <a href="#projects" className="primary-btn">
    View Projects
  </a>

  <a
    href="/Pragati-Gupta-Resume.pdf"
    download="Pragati-Gupta-Resume.pdf"
    className="secondary-btn"
  >
    Download Resume ↓
  </a>
</div>


        <p className="location">
          Based in India · Open to opportunities
        </p>
      </main>

      {/* ABOUT */}
      <section id="about">
        <p className="section-label">INTRODUCTION</p>

        <h2>About Me</h2>

        <p>
          I'm a Computer Science and Engineering student
          pursuing my B.Tech at Bengal College of
          Engineering and Technology.

          I'm an aspiring Full Stack Developer with
          hands-on experience building web applications
          using JavaScript, React.js, Node.js,
          Express.js, and MongoDB.

          I enjoy developing REST APIs, implementing
          authentication systems, working with databases,
          and integrating AI features into applications.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <p className="section-label">MY EXPERTISE</p>

        <h2>Technical Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <p className="section-label">SELECTED WORK</p>

        <h2>Featured Projects</h2>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.name}
            >
              <p className="project-number">
                {project.number} / PROJECT
              </p>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <p className="section-label">MY BACKGROUND</p>

        <h2>Education</h2>

        <div className="education-item">
          <h3>
            B.Tech - Computer Science and Engineering
          </h3>

          <p>
            Bengal College of Engineering and Technology
          </p>

          <span>2023 – 2027 · CGPA: 8.0/10</span>
        </div>

        <div className="education-item">
          <h3>Senior Secondary (XII)</h3>

          <p>Nazareth Academy, Gaya, Bihar</p>

          <span>2022 · 88%</span>
        </div>

        <div className="education-item">
          <h3>Secondary (X)</h3>

          <p>Nazareth Academy, Gaya, Bihar</p>

          <span>2020 · 92.6%</span>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <p className="section-label">ACHIEVEMENTS</p>

        <h2>Certifications</h2>

        <div className="education-item">
          <h3>
            Deloitte Australia - Cyber Job Simulation
          </h3>

          <p>Forage</p>

          <span>June 2025</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p>
          I'm interested in software development
          opportunities and collaborating on interesting
          projects. Feel free to reach out!
        </p>

        <div className="contact-links">
          <a href="mailto:pragatigp620@gmail.com">
            Email ↗
          </a>

          <a
            href="https://github.com/pragatigp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/pragati-gupta-992195272"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Pragati Gupta. Built with React.
        </p>
      </footer>

    </div>
  );
}

export default App;
