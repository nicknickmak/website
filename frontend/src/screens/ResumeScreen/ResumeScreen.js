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
        <div className="resume-container">
          <div className="resume-sidebar">
            <div className="resume-header">
              <h1>Nick Mak</h1>
              <p>Full Stack Software Engineer | New York, NY</p>
              <p>
                (415) 609-9900 |{" "}
                <a href="mailto:nicknickmak@gmail.com">nicknickmak@gmail.com</a>{" "}
                | LinkedIn:
                <a href="https://www.linkedin.com/in/nick-l-mak">nick-l-mak</a>
              </p>
            </div>
            <section className="skills">
              <h2>Technical Skills</h2>
              <p>
                <strong>Programming Languages:</strong> TypeScript, JavaScript,
                C++, C#, Python, Java, HTML5, SASS
              </p>
              <p>
                <strong>Frameworks & Technologies:</strong> React, Angular,
                Node.js, .NET, Azure, GCP, WebSockets, Cosmos DB, PostgreSQL,
                RAG, FAISS
              </p>
            </section>
            <section className="education">
              <h2>Education</h2>
              <p>
                <strong>B.S. in Computer Science</strong> — University of
                California San Diego (2018 – 2021)
              </p>
            </section>
          </div>
          <div className="resume-main">
            <section className="experience">
              <h2>Summary</h2>
              <p>
                Software Engineer with a strong focus on scalable distributed
                systems and performance optimization. Skilled at breaking down
                ambiguous challenges, driving clarity across teams, and
                delivering high-impact technical solutions from concept to
                production.
              </p>
            </section>

            <section className="experience">
              <h2>Work Experience</h2>

              <div className="job">
                <div className="job-basic-info">
                  <h3>Software Engineer — Microsoft </h3>
                  <p> | April 2022 - July 2025 | New York, NY</p>
                </div>
                <ul>
                  <li>
                    Developed and maintained large-scale full-stack web
                    infrastructure, reducing latency by 33%.
                  </li>
                  <li>
                    Built features using React, Angular, .NET C#, MS SQL Server,
                    Azure Cosmos DB, Redis, and microservices.
                  </li>
                  <li>
                    Led UI for internal Ads flighting experimentation tool;
                    implemented virtual scrolling + caching.
                  </li>
                  <li>
                    Created REST APIs to eliminate manual SQL queries, improving
                    maintainability and safety.
                  </li>
                  <li>
                    Migrated UI from AngularJS to Angular to improve
                    maintainability and reduce bugs.
                  </li>
                  <li>
                    Refactored legacy .NET backend logic, removing redundancies
                    and improving reusability.
                  </li>
                  <li>
                    Used Azure Copilot to build an AI RAG assistant increasing
                    productivity in the product.
                  </li>
                  <li>
                    Built UI for 1‑click checkout on MSN Shopping page using
                    React.
                  </li>
                  <li>
                    Integrated Selenium, Moq, and Jest tests for 90% coverage
                    across FE + BE.
                  </li>
                  <li>
                    Collaborated with directors, PMs, data scientists, and
                    designers on new features.
                  </li>
                </ul>
              </div>

              <div className="job">
                <div className="job-basic-info">
                  <h3>Software Engineer Intern — Microsoft</h3>
                  <p>| Remote | June 2021 - September 2021</p>
                </div>
                <ul>
                  <li>
                    Built batch‑processing Azure Data Lake pipeline for
                    onboarding Ads Campaign data.
                  </li>
                  <li>
                    Generated OKR and globalization metrics using Databricks
                    (Scala).
                  </li>
                  <li>
                    Used Apache Spark, ADF, and Power BI for analysis and
                    visualization.
                  </li>
                </ul>
              </div>
            </section>

            <section className="technical-projects">
              <h2>Technical Projects</h2>

              <p>
                <h3>PowerAI</h3>
                <span className="project-tech-stack">
                  OpenAI, RAG, FastAPI, React, FAISS, PostgreSQL
                </span>
              </p>
              <ul>
                <li>
                  Built a GenAI service to simplify workout data onboarding and
                  deliver progress insights.
                </li>
                <li>
                  Implemented hybrid RAG retrieval using FAISS for fuzzy user
                  inputs.
                </li>
                <li>
                  Created a personalized AI trainer for adaptive feedback.
                </li>
              </ul>

              <p>
                <h3>Peer Pressure</h3>
                <span className="project-tech-stack">
                  React, TypeScript, Prisma, PostgreSQL, WebSockets
                </span>
              </p>
              <ul>
                <li>Developed a real‑time accountability task‑sharing app.</li>
                <li>Implemented WebSocket‑based real-time updates.</li>
                <li>Built secure authentication using JWT.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
