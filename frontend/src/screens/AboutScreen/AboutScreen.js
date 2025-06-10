import "./AboutScreen.css";
import "../tabs.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import World_Music from "../../images/World_Music.jpeg";
import Robot from "../../images/Robot.jpg";
import Winners from "../../images/2019-Winner.jpg";
import TabIcon from "../../images/TabIcon2.png";

import tabHover from "../../audio/tabHover.mp3";
import tabClick from "../../audio/tabClick.mp3";

import { useIsMobile } from "../../utils/useIsMobile";
import { playAudio } from "../../utils/audioUtils";
}

export default function AboutScreen() {
  return (
    <div className={`notHome ${useIsMobile() ? "mobile" : ""}`}>
      <div className="col-1 container content-paragraph fadein">
        <Tabs>
          <TabList>
            <Tab
              onMouseEnter={() => playAudio(tabHover)}
              onMouseUp={() => playAudio(tabClick)}
            >
              EARLY LIFE
              <div className="diamond"></div>
              <div className="bg-expand"></div>
              <div className="line-expand"></div>
              <img
                className="tab-icon"
                src={TabIcon}
                alt="tab-icon"
                width="26"
              ></img>
            </Tab>
            <Tab
              onMouseEnter={() => playAudio(tabHover)}
              onMouseUp={() => playAudio(tabClick)}
            >
              UNIVERSITY
              <div className="diamond"></div>
              <div className="bg-expand"></div>
              <div className="line-expand"></div>
              <img
                className="tab-icon"
                src={TabIcon}
                alt="tab-icon"
                width="26"
              ></img>
            </Tab>
            <Tab
              onMouseEnter={() => playAudio(tabHover)}
              onMouseUp={() => playAudio(tabClick)}
            >
              PRESENT
              <div className="diamond"></div>
              <div className="bg-expand"></div>
              <div className="line-expand"></div>
              <img
                className="tab-icon"
                src={TabIcon}
                alt="tab-icon"
                width="26"
              ></img>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="scrollContent1">
              <div className="scrollContent2">
                <img
                  className="float-image-left"
                  src={Robot}
                  alt="Robot from Robotics Team I founded"
                  width="300"
                ></img>
                <p>
                  While my high school was rich in opportunity for the arts,
                  there was an imbalance. All the emphasis for the arts meant a
                  lack of focus for STEM education, a career path I was
                  interested in. To supplement my passion for Engineering at the
                  time, I decided to start the school's <i>FIRST</i> robotics
                  team. Initially it was difficult to find support, because no
                  one knew about the idea I had. But when the word spread, other
                  students with similar interests came. The team started with
                  just me attempting to fundraise the registration fee of
                  $6,000. Luckily, with the aid of a grant I applied for and the
                  school's administration, I was able to begin my endeavors.
                  Building the{" "}
                  <img
                    className="float-image-right"
                    src={Winners}
                    alt="2019 Winners of Robotics"
                    width="300"
                  ></img>
                  team's first year robot was tough. If it weren't for the help
                  of the dedicated members and experienced parents, the team
                  would not have had a functioning robot at all. While the robot
                  did not do so well in competition the first year, it was an
                  worthy accomplishment for the team nonetheless. In the
                  following years, the team caught on successfully and expanded
                  to 40+ members, becoming the largest organization in the
                  school. From the founding team, I learned many skills from
                  CAD, machining, Java robotics programming, electrical
                  engineering, and business development. Currently,{" "}
                  <a href="http://www.team5700.org/">
                    {" "}
                    Team 5700: SOTA Cyberdragons
                  </a>{" "}
                  is thriving in the world of <i>FIRST</i> Robotics, winning San
                  Francisco Regional 2019, winning Chezy Champs 2019 and
                  competing in the international <i>FIRST</i> championships in
                  Houston, Texas.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="scrollContent1">
              <div className="scrollContent2">
                <h2 className="about-section">
                  University of California, San Diego
                </h2>

                <p>
                  At UC San Diego, I have taken a variety of courses that have
                  deepened my understanding of computer science and engineering.
                  Some of the most impactful classes include Data Structures &
                  Algorithms, Computer Architecture, Software Engineering, and
                  Artificial Intelligence. These courses have provided me with a
                  strong foundation in both theoretical concepts and practical
                  applications.
                </p>
                <p>
                  Beyond academics, I am actively involved in several student
                  organizations. I am a member of IEEE, ACM, and Triton XR,
                  where I have participated in technical workshops, hackathons,
                  and collaborative projects. These organizations have allowed
                  me to connect with like-minded peers, develop leadership
                  skills, and contribute to innovative projects on campus.
                </p>
                <img
                  className="float-image-left"
                  src={World_Music}
                  alt="UCSD Organizations"
                  width="300"
                />
                <p>
                  My involvement in these organizations has been instrumental in
                  shaping my university experience, providing opportunities to
                  learn from others, work on interdisciplinary teams, and stay
                  engaged with the latest advancements in technology.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="scrollContent1">
              <div className="scrollContent2">
                <h2 className="about-section">Career</h2>
                <p>
                  With my second year of university, I decided to return to the
                  world of STEM by joining engineering societies like IEEE, ACM,
                  and Triton XR and applying to various staff positions to
                  promote my involvement. In IEEE I became a project lead for
                  it's new annual project, Robocup Soccer. In Triton XR, I
                  became a project lead assistant so I could get more involved
                  in the creation of virtual reality projects, a topic that has
                  piqued my career interests.
                </p>{" "}
                <br></br>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
