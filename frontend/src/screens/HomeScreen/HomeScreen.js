import linkedinPhoto from "../../images/linkedin-photo.jpg";
import "./HomeScreen.css";

import LinkedIn from "../../images/LinkedIn.png";
import Github from "../../images/Github.png";

export default function HomeScreen() {
  return (
    <div className="home-screen fadein">
      <section className="home-section home-main">
        <img src={linkedinPhoto} alt="Profile" className="home-photo" />
        <h1 className="home-title">Hi, I'm Nick</h1>
        <p className="home-subtitle">
          <div>Software Engineer</div>
          <div>Frontend & Full-Stack Development</div>
          <div>AI & UX Enthusiast</div>
        </p>
        <nav className="home-nav">
          <div className="row center sm">
            <a href="https://www.linkedin.com/in/nick-l-mak/" target="_blank">
              <img className="social" src={LinkedIn} alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/nmakucsd" target="_blank">
              <img className="social" src={Github} alt="Github"></img>
            </a>
          </div>
        </nav>
      </section>
      <section className="home-section home-about">
        <h2 className="home-section-title">About Me</h2>
        <p className="home-section-text">
          Innovative and results-driven software engineer with a passion for
          crafting seamless user experiences and scalable solutions. With
          experience at Microsoft, I’ve led UI development for internal Ads
          experimentation products, migrated legacy codebases, and optimized
          performance—cutting latency by 33%. My work spans frontend and
          full-stack development, integrating Angular, React, and Azure
          technologies to build robust, user-centric applications. Beyond my
          professional expertise, I thrive on continuous learning, from
          AI-powered solutions to creative personal projects. I bring strong
          communication and leadership skills, regularly presenting features and
          metrics to stakeholders and mentoring teams in engineering best
          practices.
        </p>
        <br></br>
        <a href="/about" className="page-link">
          (Read more)
        </a>
      </section>
      <section className="home-section home-services">
        <h2 className="home-section-title">Projects</h2>
        <p className="home-section-text">
          Explore some of my recent work, including web apps, open-source
          contributions, and personal projects.
        </p>

        <br></br>
        <a href="/projects" className="page-link">
          (View all projects)
        </a>
      </section>
      <section className="home-section home-contact">
        <h2 className="home-section-title">Contact</h2>
        <p className="home-section-text">
          Interested in working together or want to connect?
          <nav className="home-nav">
            <div className="row center sm">
              <a href="https://www.linkedin.com/in/nick-l-mak/" target="_blank">
                <img className="social" src={LinkedIn} alt="LinkedIn"></img>
              </a>
              <a href="https://github.com/nmakucsd" target="_blank">
                <img className="social" src={Github} alt="Github"></img>
              </a>
            </div>
          </nav>
        </p>
        <br></br>
      </section>
    </div>
  );
}
