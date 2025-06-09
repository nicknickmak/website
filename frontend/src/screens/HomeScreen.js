import React from 'react';
import cardOpenAudio from '../audio/cardOpen.mp3';
import { BicepChart, SplitsChart, ShouldersChart, WaistChart } from '../components/LineCharts';
import { WorkoutChart } from '../components/CalendarCharts';


import TabIcon from '../images/TabIcon2.png';

import './idea.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.css';
import { playAudio } from '../utils/audioUtils';
import tabHover from '../audio/tabHover.mp3';
import tabClick from '../audio/tabClick.mp3';

export default function HomeScreen() {
    return (
        <div>
            <div className="Home fadein" onLoad={() => playAudio(cardOpenAudio)}>
                <Tabs>
                    <TabList>
                        <Tab
                            onMouseEnter={() => playAudio(tabHover)}
                            onMouseUp={() => playAudio(tabClick)}>
                            DAILY DATA
                            <div className="diamond"></div>
                            <div className="bg-expand"></div>
                            <div className="line-expand"></div>
                            <img className="tab-icon" src={TabIcon} alt="tab-icon" width="26"></img>

                        </Tab>
                        <Tab
                            onMouseEnter={() => playAudio(tabHover)}
                            onMouseUp={() => playAudio(tabClick)}>
                            NEW IDEAS
                            <div className="diamond"></div>
                            <div className="bg-expand"></div>
                            <div className="line-expand"></div>
                            <img className="tab-icon" src={TabIcon} alt="tab-icon" width="26"></img>

                        </Tab>
                        <Tab
                            onMouseEnter={() => playAudio(tabHover)}
                            onMouseUp={() => playAudio(tabClick)}>
                            COMING SOON
                            <div className="diamond"></div>
                            <div className="bg-expand"></div>
                            <div className="line-expand"></div>
                            <img className="tab-icon" src={TabIcon} alt="tab-icon" width="26"></img>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="scrollContent1" >
                            <div className="scrollContent2">
                                <div className="row top">
                                    {/* //LEFT HALF //////////////////////////////////////////////////////// */}
                                    <div className="col-2">
                                        <div className="row center bottomline">
                                            <div className="title">DAILY DATA</div>
                                        </div>

                                        <div className="graph">
                                            {/* <div className="row grow">
                                                <ProgrammingChart></ProgrammingChart>
                                            </div> */}
                                            <div className="row grow">
                                                <WorkoutChart></WorkoutChart>
                                            </div>
                                            <div className="row center">
                                                <ShouldersChart></ShouldersChart>
                                                <WaistChart></WaistChart>
                                            </div>
                                        </div>
                                    </div>
                                    {/* //RIGHT HALF //////////////////////////////////////////////////////// */}
                                    <div className="col-2">
                                        <div className="row center bottomline">
                                            <div className="title">DATA FOR SELF BETTERMENT</div>
                                        </div>
                                        <div className="graph">

                                            <div className="row center">
                                                <BicepChart></BicepChart>
                                                <SplitsChart></SplitsChart>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="row center bottomline">
                            <div className="title">NEW IDEAS</div>
                        </div>
                        <div className="idea a">
                            <div className="ideaContent">SPRINT TREE</div>
                        </div>
                        <div className="idea b">
                            <div className="ideaContent">NEURAL NETWORK</div>
                        </div>
                        <div className="idea d">
                            <div className="ideaContent">VIDEO INSTAGRAM FOR PROGRESS</div>
                        </div>
                        <div className="idea a">
                            <div className="ideaContent">9 Sense Game: Main = Numb, discover light, color, ambience, sounds,
                        </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    );
}