import "./App.css";
import React from "react";
import Popup from "./components/Popup";
// import Typewriter from "typewriter-effect";
import github_logo from "./images/github_logo.png";
import linkedin_logo from "./images/linkedin_logo.png";
import email_logo from "./images/gmail_logo.png";
import personalPhoto from "./images/Lujaina.jpg";
import TV from "./images/TV.png";
import Application from "./components/Application.js";
import app1 from "./images/app1.png";
import app2 from "./images/app2.png";
import app3 from "./images/app3.png";
import app4 from "./images/app4.png";
import app5 from "./images/app5.png";
import app6 from "./images/app6.png";
import app7 from "./images/app7.png";
import app8 from "./images/app8.png";

function App() {
  return (
    <>
      <header className="stack-item fade-in">
        <div className="header-div">
          <div
            className="personal-pic"
          >
            <img
              className="lujaina-pic"
              src={personalPhoto}
              data-text="Fun fact! I'm a published and featured author!"
              alt="picture of me"
            ></img>
          </div>

          <div>
            <a
              href="https://github.com/Lujaina-E"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                id="github-link"
                src={github_logo}
                alt="github logo"
              ></img>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/lujaina-eldelebshany-0029bb1b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                id="linkedin-link"
                src={linkedin_logo}
                alt="linkedin logo"
              ></img>{" "}
            </a>
            <a
              href="mailto:lujaina.eldelebshany@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img id="email-link" src={email_logo} alt="email logo"></img>{" "}
            </a>
          </div>
        </div>
      </header>

      <main className="stack-item fade-in">
        <nav className="navbar">
          <div>
            <h1 className="intro">Lujaina Eldelebshany.</h1>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">experience</a>
            </li>
          </ul>
        </nav>
        <h1 className="meeting-phrase">Nice to meet you...</h1>
        <h3 className="normal-text typewriter">
          My name is Lujaina. I am a 3rd year software and biomedical
          engineering student at the University of Calgary and a 2021{" "}
          <Popup
            triggerText=" Schulich Leader"
            popupText=<a href="https://schulichleaders.com/scholars/lujaina-eldelebshany/">
              1/50 engineering awards in Canada
            </a>
          />
          . I am a member of the{" "}
          <Popup
            triggerText="Scholar's Academy"
            popupText=<a href="https://www.ucalgary.ca/node/346525">
              {" "}
              an esteemed invite-only program to support undergraduate students
              with leadership capability, intellectual curiosity, and strong
              committments to local and global communities
            </a>
          />{" "}
          , and the 2023 Engineering Sophomore of the Year. I am currently the
          Engineering Students' Society{" "}
          <Popup
            triggerText="VP Internal"
            popupText="advocacting for over 1500 student and respective clubs to internal administration"
          />
          ,{" "}
          <Popup
            triggerText="Relectric Car"
            popupText=<a href="https://teamrelectric.ca/">
              {" "}
              technical design team converting a 1966 Volvo into a 'E-Volvo'{" "}
            </a>
          />{" "}
          Software Team Lead, and CEO for the cleantech startup{" "}
          <Popup
            triggerText="FabricFusion"
            popupText=<a href="https://www.hultprize.org/2023-hult-prize-challenge/">
              quarterfinalist and 1/700 global teams for Hult Prize 2023.
            </a>
          />
          .
          <br /> <br />
          <b>
            {" "}
            I aspire to leverage my skills in machine learning and software
            development to tackle real-world problems and improve the user
            experience. I am also passionate about entrepreneurship and
            solutions that address real-world problems in sustainability and the
            promotion of diversity. Additionally, I love to attend conferences,
            participate in case competitions, entrepreneurship challenges, and
            hackathons where I can network and propose solutions to experienced
            community leaders.
          </b>
        </h3>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <section className="projects fade-in">
          <h1 className="heading-label meeting-phrase">Projects</h1>

          <div className="application">
            <div className="image-container">
              <img className="tv" src={TV} alt="project setting"></img>
            </div>

            <div className="application-container">
              <Application
                className="apps"
                AppTitle="Sample"
                imageSrc={app1}
                description="Description of Application 1"
                githubLink="https://github.com/your-username/repository1"
              />
              <Application
                className="apps"
                imageSrc={app2}
                AppTitle="Sample"
                description="Description of Application 2"
                githubLink="https://github.com/your-username/repository2"
              />
              <Application
                className="apps"
                AppTitle="Sample"

                imageSrc={app3}
                description="Description of Application 2"
                githubLink="https://github.com/your-username/repository2"
              />
              <Application
                className="apps"
                imageSrc={app4}   
                             AppTitle="Sample"

                description="Description of Application 2"
                githubLink="https://github.com/your-username/repository2"
              />

              <Application
                className="apps"
                AppTitle="Sample"

                imageSrc={app5}
                description="Description of Application 2"
                githubLink="https://github.com/your-username/repository2"
              />

              <Application
                className="apps"
                AppTitle="Sample"

                imageSrc={app6}
                description="Description of Application 2"
                githubLink="https://github.com/your-username/repository2"
              />

<Application
                className="apps"
                AppTitle="Sample"

                imageSrc={app7}
                description="Description of Application 2"
                githubLink="https://github.com/your-username/repository2"
              />

<Application
                className="apps"
                                AppTitle="Sample"

                imageSrc={app8}
                description="Description of Application 2"
                githubLink="https://github.com/your-username/repository2"
              />

              {/* Add more Application components as needed */}
            </div>
          </div>
        </section>
        <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br />
      </main>
    </>
  );
}
export default App;
