import "./AboutScreen.css";
import "../tabs.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import TabIcon from "../../images/TabIcon2.png";

import tabHover from "../../audio/tabHover.mp3";
import tabClick from "../../audio/tabClick.mp3";

import { useIsMobile } from "../../utils/useIsMobile";
import { playAudio } from "../../utils/audioUtils";

import AboutSections from "./AboutSections";

export default function AboutScreen() {
  const tabTitles = ["First Robotics", "University", "Career"];

  return (
    <div className={`notHome ${useIsMobile() ? "mobile" : ""}`}>
      <div className="col-1 container content-paragraph fadein">
        <Tabs>
          <TabList>
            {tabTitles.map((title) => (
              <Tab
                onMouseEnter={() => playAudio(tabHover)}
                onMouseUp={() => playAudio(tabClick)}
              >
                {title}
                <div className="tab-icons">
                  <div className="diamond"></div>
                  <img
                    className="tab-icon"
                    src={TabIcon}
                    alt="tab-icon"
                    width="26"
                  ></img>
                </div>
                <div className="bg-expand"></div>
                <div className="line-expand"></div>
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <div className="scrollContent1">
              <div className="scrollContent2">
                <AboutSections section="FRC_Robotics" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="scrollContent1">
              <div className="scrollContent2">
                <AboutSections section="University" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="scrollContent1">
              <div className="scrollContent2">
                <AboutSections section="Career" />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
