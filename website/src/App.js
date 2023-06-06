import "./App.css";
import React, { useEffect, useState } from "react";
import github_logo from "./images/github_logo.png";
import linkedin_logo from "./images/linkedin_logo.png";
import email_logo from "./images/gmail_logo.png";
import personalPhoto from "./images/Lujaina.jpg";
import TV from "./images/TV.png";
import Popup from "./components/Popup";
import Application from "./components/Application.js";
import Experience from "./components/Experience.js"; //component being edited
import app1 from "./images/app1.png";
import app2 from "./images/app2.png";
import app3 from "./images/app3.png";
import app4 from "./images/app4.png";
import app5 from "./images/app5.png";
import app6 from "./images/app6.png";
import app7 from "./images/app7.png";
import app8 from "./images/app8.png";
import UC from "./images/ucalgary.jpeg";
import SPP from "./images/SPP.png";
import chata from "./images/chata.png";
import olsen from "./images/olsen.png";

function App() {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    "Lujaina Eldelebshany.",
    "Learner.",
    "Synergizer.",
    "Innovator.",
  ];
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handlePageLoad = () => {
      window.scrollTo(0, 80);
    };

    handlePageLoad();

    return () => {
      window.removeEventListener("scroll", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <>
      <header className="stack-item fade-in">
        <div className="header-div">
          <div>
            <a
              href="https://github.com/Lujaina-E"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="github-link" src={github_logo} alt="github logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/lujaina-eldelebshany-0029bb1b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="linkedin-link" src={linkedin_logo} alt="linkedin logo" />
            </a>
            <a
              href="mailto:lujaina.eldelebshany@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="email-link" src={email_logo} alt="email logo" />
            </a>
          </div>
        </div>
      </header>

      <main className="stack-item fade-in">
      <div id="progressBarContainer">
  <div id="progressBar" style={{ transform: `scaleY(${scroll})`, opacity: `${scroll}` }} />
</div>

        <nav className="navbar">
          <div className="intro-to-me">
            <h1 className="intro">{textOptions[textIndex]}</h1>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </nav>
        <h1 id="about" className="meeting-phrase">
          Nice to meet you...
        </h1>
        <h3 className="normal-text typewriter">
          <div className="text-container">
            <div className="personal-pic">
              <img
                className="lujaina-pic"
                src={personalPhoto}
                alt="picture of me"
              />
            </div>

            <div className="text-content">
              <Popup
                triggerText="My name is Lujaina"
                popupText="Outside of software, I'm passionate about fashion, photography, and baking."
              />
              . I am a 3rd year software and biomedical engineering student at
              the University of Calgary and a 2021{" "}
              <Popup
                triggerText="Schulich Leader"
                popupText={
                  <a href="https://schulichleaders.com/scholars/lujaina-eldelebshany/">
                    1/50 engineering awards in Canada
                  </a>
                }
              />
              . I am a member of the{" "}
              <Popup
                triggerText="Scholar's Academy"
                popupText={
                  <a href="https://www.ucalgary.ca/node/346525">
                    an esteemed invite-only program to support undergraduate
                    students with leadership capability, intellectual curiosity,
                    and strong commitments to local and global communities
                  </a>
                }
              />{" "}
              , and the 2023 Engineering Sophomore of the Year. I am currently
              the Engineering Students' Society{" "}
              <Popup
                triggerText="VP Internal"
                popupText="advocating for over 1500 student and respective clubs to internal administration"
              />
              ,{" "}
              <Popup
                triggerText="Relectric Car"
                popupText={
                  <a href="https://teamrelectric.ca/">
                    technical design team converting a 1966 Volvo into a
                    'E-Volvo'
                  </a>
                }
              />{" "}
              Software Team Lead, and CEO for the cleantech startup{" "}
              <Popup
                triggerText="FabricFusion"
                popupText={
                  <a href="https://www.hultprize.org/2023-hult-prize-challenge/">
                    quarterfinalist and 1/700 global teams for Hult Prize 2023.
                  </a>
                }
              />
              .
              <br /> <br />
              <b>
                I aspire to leverage my skills in machine learning and software
                development to tackle real-world problems and improve the user
                experience. I am also passionate about entrepreneurship and
                solutions that address real-world problems in sustainability and
                the promotion of diversity. Additionally, I love to attend
                conferences, participate in case competitions, entrepreneurship
                challenges, and hackathons where I can network and propose
                solutions to experienced community leaders.
              </b>
            </div>
          </div>
        </h3>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <section className="projects fade-in">
          <h1 id="projects" className="heading-label meeting-phrase">
            Projects
          </h1>

          <div className="application">
            <div className="image-container">
              <img className="tv" src={TV} alt="project setting" />
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
                description="Description of Application 3"
                githubLink="https://github.com/your-username/repository2"
              />
              <Application
                className="apps"
                imageSrc={app4}
                AppTitle="Sample"
                description="Description of Application 4"
                githubLink="https://github.com/your-username/repository2"
              />

              <Application
                className="apps"
                AppTitle="Sample"
                imageSrc={app5}
                description="Description of Application 5"
                githubLink="https://github.com/your-username/repository2"
              />

              <Application
                className="apps"
                AppTitle="Sample"
                imageSrc={app6}
                description="Description of Application 6"
                githubLink="https://github.com/your-username/repository2"
              />

              <Application
                className="apps"
                AppTitle="Sample"
                imageSrc={app7}
                description="Description of Application 7"
                githubLink="https://github.com/your-username/repository2"
              />

              <Application
                className="apps"
                AppTitle="Sample"
                imageSrc={app8}
                description="Description of Application 8"
                githubLink="https://github.com/your-username/repository2"
              />

              {/* Add more Applications*/}
            </div>
          </div>
        </section>

        <br />
        <section>
          <br />
          <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br />
          <h1 id="experience" className="heading-label meeting-phrase">
            Experience
          </h1>
          <Experience
            imageUrl={UC}
            description="Description for Experience 1"
          />
          <Experience
            imageUrl={SPP}
            description="Description for Experience 1"
          />
          <Experience
            imageUrl={olsen}
            description="Description for Experience 1"
          />
          <Experience
            imageUrl={chata}
            description="Description for Experience 1"
          />
        </section>
        <br />
      </main>

      <footer>Made in 2023</footer>
    </>
  );
}
export default App;
