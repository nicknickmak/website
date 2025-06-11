import "./resume.css";

export default function ResumeScreen() {
  return (
    <div className="row center fadein">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <title>Nick Mak - Resume</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <div className="resume-body">
        <div class="resume-container">
          <div class="resume-header">
            <h1>Nick Mak</h1>
            <p>Full Stack Software Engineering | New York, NY</p>
            <p>
              (415) 609-9900 |{" "}
              <a href="mailto:nicknickmak@gmail.com">nicknickmak@gmail.com</a> |
              LinkedIn:
              <a href="https://www.linkedin.com/in/nick-l-mak">nick-l-mak</a>
            </p>
          </div>

          <section class="experience">
            <h2>Work Experience</h2>

            <div class="job">
              <h3>Software Engineer</h3>
              <div class="job-basic-info">
                <p>
                  <strong>Microsoft</strong> | Remote - New York, NY
                </p>
                <p>April 2022 - Present</p>
              </div>
              <ul>
                <li>
                  Developed full-stack features using Angular, .NET, SQL and
                  Azure cloud infrastructure.
                </li>

                <li>
                  Led the UI development for an internal Ads flighting
                  experimentation product, enhancing UI/UX functionality and
                  optimizing the UI experience,by implementing virtual scrolling
                  and browser caching to reduce latency by 33%.
                </li>

                <li>
                  Migrated UI codebase from AngularJS to Angular, to improve
                  maintainability and minimize bugs.
                </li>

                <li>
                  Utilized Azure Copilot to develop an LLM and build an
                  integrated GenAI service the product.
                </li>

                <li>
                  Built UI for 1-click checkout feature on the MSN Shopping page
                  using React.
                </li>

                <li>
                  Integrated end-to-end and unit testing with Selenium and Jest
                  for 85.2% code coverage in Microsoft Edge Wallet and Payment
                  Solution codebase.
                </li>

                <li>
                  Collaborated with directors, data scientists, designers and
                  product managers to implement new features and improve
                  existing ones, ensuring alignment with user needs and business
                  goals.
                </li>
              </ul>
            </div>
          </section>

          <section class="education">
            <h2>Education</h2>
            <p>
              <strong>B.S. in Computer Science</strong> | University of
              California, San Diego | January 2022
            </p>
          </section>

          <section class="technical-projects">
            <h2>Technical Projects</h2>

            <p>
              <strong>nickmak.com Website Portfolio</strong>
              <span class="project-tech-stack">
                React, Express, MongoDB, Node.js, HTML+CSS, Google Chart API,
                Heroku
              </span>
            </p>
            <ul>
              Developed a personal portfolio website to showcase my experience
              and projects, utilizing modern web technologies for a responsive
              design.
            </ul>

            <p>
              <strong>AI Resumé Taylor</strong>
              <span class="project-tech-stack">
                OpenAI, Python, HTML+CSS, YAML
              </span>
            </p>
            <ul>
              Built a GenAI full-stack service that utilizes OpenAI to taylor a
              user's complete career experience to a given job description and
              produces a filtered resumé.
            </ul>

            <p>
              <strong>Mobile Budget Tracker Widgets</strong>
              <span class="project-tech-stack">
                Javascript, Google App Scripts, Google Sheets API, Photoshop
              </span>
            </p>
            <ul>
              Developed Javascript-based iOS widget UI themed after Pokemon,
              integrating Google Sheets API for budget tracking and spending
              habit monitoring. Upgrading to React Native for scalability.
            </ul>

            <p>
              <strong>BulkUP Ecommerce Platform</strong>
              <span class="project-tech-stack">
                React, Redux, MongoDB, Auth0, Express, Stripe, HTML+CSS, Docker
              </span>
            </p>
            <ul>
              Created a responsive web app to connect restaurateurs with buyers
              for creating new businesses with dynamic pricing. Led a scrum team
              of 11 students by managing weekly (Agile) sprints to deliver use
              case artifacts and business diagrams.
            </ul>
          </section>

          <section class="skills">
            <h2>Technical Skills</h2>
            <p>
              <strong>Programming Languages:</strong> TypeScript, JavaScript,
              C#, Python, HTML5, CSS
            </p>
            <p>
              <strong>Frameworks & Technologies:</strong> Angular, React,
              Node.js, Express, MongoDB, SQL Server Management Studio, .NET 8.0,
              Azure Cloud, Flutter, Android Studio, Docker
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
