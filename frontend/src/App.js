import { BrowserRouter, NavLink, Route } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ExperienceScreen from "./screens/ExperienceScreen/ExperienceScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ExperiencesScreen from "./screens/ExperiencesScreen/ExperiencesScreen";

import ResumeScreen from "./screens/ResumeScreen/ResumeScreen";

import hoverAudio from "./audio/HoverClick.mp3";
import downAudio from "./audio/downClick.mp3";
import loadin1Audio from "./audio/loadin1.mp3";
import InspirationScreen from "./screens/InspirationScreen";

import LinkedIn from "./images/LinkedIn.png";
import Github from "./images/Github.png";
import { playAudio } from "./utils/audioUtils";
import { useIsMobile } from "./utils/useIsMobile";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  const isMobile = useIsMobile();

  /**
   * Defines the application's main route configuration.
   *
   * Each <Route> maps a specific URL path to its corresponding screen component.
   * Supports both static and dynamic routes (e.g., with :id parameters).
   *
   * @function
   * @returns {JSX.Element} A fragment containing all route definitions for the app.
   */
  function AppRoutes() {
    return (
      <>
        <Route path="/resume" component={ResumeScreen}></Route>
        <Route path="/about" component={AboutScreen}></Route>
        <Route path="/inspiration" component={InspirationScreen}></Route>
        <Route path="/experiences" component={ExperiencesScreen}></Route>
        <Route path="/projects" component={ProjectsScreen}></Route>
        <Route path="/experience/:id" component={ExperienceScreen}></Route>
        <Route path="/project/:id" component={ProjectScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </>
    );
  }

  function MobileApp() {
    if (!isMobile) {
      return;
    }

    return (
      <BrowserRouter>
        <div class="mobile-browser">
          {BackgroundAnimation()}

          <div className="grid-container">
            <main>{AppRoutes()}</main>
            <footer className="row">{MainNavBar()}</footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  function DesktopApp() {
    if (isMobile) {
      return;
    }
    return (
      <BrowserRouter>
        <div class="desktop-browser">
          {BackgroundAnimation()}
          <div className="grid-container">
            <header className="row">{MainNavBar()}</header>
            <main>{AppRoutes()}</main>
            <footer>
              <div className="row center sm">
                <a
                  href="https://www.linkedin.com/in/nick-l-mak/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social" src={LinkedIn} alt="LinkedIn"></img>
                </a>
                <a
                  href="https://github.com/nmakucsd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social" src={Github} alt="Github"></img>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  /**
   * Renders the main navigation bar for the application.
   * @returns {JSX.Element} The rendered navigation bar as a React fragment containing NavLink components.
   */
  function MainNavBar() {
    const navLinks = [
      {
        to: "/resume",
        label: "RESUME",
      },
      {
        to: "/about",
        label: "ABOUT ME",
      },
      {
        to: "/",
        label: "NICK MAK",
        isBrand: true,
        exact: true,
      },
      {
        to: "/experiences",
        label: "EXPERIENCE",
      },
      {
        to: "/projects",
        label: "PROJECTS",
      },
    ];

    // Scroll to top on navigation
    const handleNavClick = () => {
      window.scrollTo(0, 0);
    };

    return (
      <>
        {navLinks.map((link) =>
          link.isBrand ? (
            <NavLink
              key={link.to}
              className="navItem navCenter"
              exact={link.exact}
              to={link.to}
              activeStyle={{ backgroundColor: "transparent" }}
              onMouseEnter={() => playAudio(hoverAudio)}
              onMouseUp={() => playAudio(downAudio)}
              onClick={handleNavClick}
            >
              <div className="brand"></div>
              <div className="brandText">{link.label}</div>
            </NavLink>
          ) : (
            <NavLink
              key={link.to}
              className="navItem"
              to={link.to}
              activeStyle={{
                color: "#eaeeb2",
                backgroundColor: "transparent",
              }}
              onMouseEnter={() => playAudio(hoverAudio)}
              onMouseUp={() => {
                playAudio(downAudio);
                playAudio(loadin1Audio);
              }}
              onClick={handleNavClick}
            >
              <div className="navButton">{link.label}</div>
            </NavLink>
          )
        )}
      </>
    );
  }

  return isMobile ? MobileApp() : DesktopApp();
}

export default App;
