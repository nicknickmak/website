
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import ExperienceScreen from './screens/ExperienceScreen/ExperienceScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ExperiencesScreen from './screens/ExperiencesScreen/ExperiencesScreen';

import ResumeScreen from './screens/ResumeScreen';

import hoverAudio from './audio/HoverClick.mp3';
import downAudio from './audio/downClick.mp3';
import InspirationScreen from './screens/InspirationScreen';

import LinkedIn from './images/LinkedIn.png';
import Github from './images/Github.png';
import { playAudio } from './utils/audioUtils';

function App() {
  return (
    <BrowserRouter>
      <div className="background"></div>
      <div className="backgroundLogo"></div>

      <div className="grid-container">
        <header className="row">
          <NavLink 
            className="navItem" 
            to="/resume"
            activeStyle={{ color: "#eaeeb2", backgroundColor: "transparent" }}
            onMouseEnter={() => playAudio(hoverAudio)}
            onMouseUp={() => playAudio(downAudio)}>
            <div className="navButton">RESUME</div>
          </NavLink>
          <NavLink 
            className="navItem" 
            to="/about"
            activeStyle={{ color: "#eaeeb2", backgroundColor: "transparent" }}
            onMouseEnter={() => playAudio(hoverAudio)}
            onMouseUp={() => playAudio(downAudio)}>
            <div className="navButton">ABOUT ME</div>
          </NavLink>
          <NavLink 
            className="navItem navCenter" 
            exact to="/" 
            activeStyle={{ backgroundColor: "transparent" }}
            onMouseEnter={() => playAudio(hoverAudio)}
            onMouseUp={() => playAudio(downAudio)}>
            <div className="brand" activeStyle={{opacity: "0.5px"}}></div>
            <div className="brandText">NICK MAK</div>
          </NavLink>
          <NavLink 
            className="navItem" 
            to="/experiences" 
            activeStyle={{ color: "#eaeeb2", backgroundColor: "transparent" }}
            onMouseEnter={() => playAudio(hoverAudio)}
            onMouseUp={() => playAudio(downAudio)}>
            <div className="navButton">EXPERIENCE</div>
          </NavLink>
          <NavLink 
            className="navItem" 
            to="/projects" 
            activeStyle={{ color: "#eaeeb2", backgroundColor: "transparent" }}
            onMouseEnter={() => playAudio(hoverAudio)}
            onMouseUp={() => playAudio(downAudio)}>
            <div className="navButton">PROJECTS</div>
          </NavLink>
        </header>
        <main> 
          <Route path="/resume" component={ResumeScreen}></Route>
          <Route path="/about" component={AboutScreen}></Route>
          <Route path="/inspiration" component={InspirationScreen}></Route>
          <Route path="/experiences" component={ExperiencesScreen}></Route>
          <Route path="/experience/:id" component={ExperienceScreen}></Route>
          <Route path="/projects" component={ProjectsScreen}></Route>
          <Route path="/project/:id" component={ProjectScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>

        {/* content after header  */}

        </main>
        <footer className="footer">
          <div className="row center sm">
            <a href="https://www.linkedin.com/in/nick-l-mak/" target="_blank">
              <img className="social" src={LinkedIn} alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/nmakucsd" target="_blank">
              <img className="social" src={Github} alt="Github"></img>
            </a> 
            
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
