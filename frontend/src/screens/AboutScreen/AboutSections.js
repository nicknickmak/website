import Robot from "../../images/Robot.jpg";
import Winners from "../../images/2019-Winner.jpg";

/**
 * Renders different sections of the About page based on the provided section key.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {"FRC_Robotics"|"University"|"Career"} props.section - The section to display.
 * @returns {JSX.Element} The rendered content for the specified section, or a message if the section is invalid.
 */
function AboutSections({ section }) {
  switch (section) {
    case "FRC_Robotics":
      return (
        <>
          <h2 className="about-section">
            <i>
              <b>FIRST</b>
            </i>{" "}
            Robotics Team 5700
          </h2>
          <img
            className="float-image-left"
            src={Robot}
            alt="Robot from Robotics Team I founded"
            width="300"
          ></img>
          <p>
            While my high school was rich in opportunity for the arts, there was
            an imbalance. All the emphasis for the arts meant a lack of focus
            and resources STEM education, a career path I was interested in. To
            supplement my early passion for Engineering, I decided to start the
            school's{" "}
            <i>
              <b>FIRST</b>
            </i>{" "}
            robotics team. Initially it was difficult to find support, because
            no one knew about the idea I had. But when the word spread, other
            students with similar interests came. The team started with just me
            attempting to fundraise the registration fee of $6,000. Luckily,
            with the aid of a grant I applied for and the school's
            administration, I was able to begin my endeavors. Building the{" "}
            <img
              className="float-image-right"
              src={Winners}
              alt="2019 Winners of Robotics"
              width="300"
            ></img>
            team's first year robot was tough. If it weren't for the help of the
            dedicated members and experienced parents, the team would not have
            had a functioning robot at all. While the robot did not do so well
            in competition the first year, it was an worthy accomplishment for
            the team nonetheless. In the following years, the team caught on
            successfully and expanded to 40+ members, becoming the largest
            organization in the school. From the founding team, I learned many
            skills from CAD, machining, Java robotics programming, electrical
            engineering, and business development. Currently,{" "}
            <a href="http://www.team5700.org/"> Team 5700: SOTA Cyberdragons</a>{" "}
            is thriving in the world of <i>FIRST</i> Robotics, winning San
            Francisco Regional 2019, winning Chezy Champs 2019 and competing in
            the international <i>FIRST</i> championships in Houston, Texas.
          </p>
        </>
      );
    case "University":
    return (
      <>
        <h2 className="about-section">University</h2>
        <p>
          I earned my Bachelor of Science in Computer Science from the
          University of California, San Diego, graduating in January 2022. My
          time at UCSD was marked by a rigorous academic curriculum, hands-on
          projects, and active involvement in the campus tech community.
        </p>
        <h2 className="about-section">Relevant Coursework</h2>
        <ul>
          <li>
            <div>
              <b>Advanced Data Structures and Algorithms</b>
            </div>
            mastering efficient problem-solving techniques
          </li>
          <li>
            <div>
              <b>Software Engineering</b>
            </div>
            learning best practices for scalable, maintainable code
          </li>
          <li>
            <div>
              <b>Software System Design &amp; Implementation</b>
            </div>
            building robust, real-world applications
          </li>
          <li>
            <div>
              <b>Computer Networks</b>
            </div>
            understanding protocols and distributed systems
          </li>
          <li>
            <div>
              <b>Principles of Computer Operating Systems</b>
            </div>
            exploring OS architecture and resource management
          </li>
          <li>
            <div>
              <b>Computer Graphics and Rendering</b>
            </div>
            creating visually compelling digital content
          </li>
          <li>
            <div>
              <b>Computer Animation</b>
            </div>
            bringing interactive experiences to life
          </li>
          <li>
            <div>
              <b>3D User Interaction</b>
            </div>
            designing intuitive interfaces for immersive environments
          </li>
          <li>
            <div>
              <b>Virtual Reality / Augmented Reality Research</b>
            </div>
            investigating cutting-edge XR technologies
          </li>
        </ul>
        <h2 className="about-section">Extracurricular Activities</h2>
        <ul>
          <li>
            <div>
              <b>Triton XR</b>
            </div>
            Served as Lead Software Developer, where I organized technical
            workshops and led the development of the organization’s website,
            fostering a collaborative environment for students passionate about
            extended reality.
          </li>
          <li>
            <div>
              <b>ACM UCSD</b>
            </div>
            Active member, participating in coding competitions, hackathons, and
            collaborative software projects that honed my teamwork and
            problem-solving skills.
          </li>
        </ul>
      </>
    );
    case "Career":
      return (
        <>
          <h2 className="about-section">Career</h2>
          <p>
            After graduating from UC San Diego with a degree in Computer
            Science, I began my professional journey as a software engineer. My
            career has spanned roles in both consumer and enterprise
            applications, where I have contributed to the development of
            scalable web applications, cloud-based solutions, and innovative
            user experiences. I have experience working with React and Angular,
            backend DotNet, MS SQL Server, and Microsoft Azure Cloud. My passion
            for technology drives me to continuously learn and adapt, and I
            enjoy collaborating with cross-functional teams to deliver impactful
            products. Throughout my career, I have focused on writing clean,
            maintainable code and mentoring junior developers to help them grow
            in their roles.
          </p>
        </>
      );
    default:
      return <div>TThis is not a valid section</div>;
  }
}

export default AboutSections;
