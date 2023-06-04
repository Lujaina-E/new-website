import "./App.css";
import React from "react";
import Popup from "./components/Popup";
// import Typewriter from "typewriter-effect";
import github_logo from "./images/github_logo.png";
import linkedin_logo from "./images/linkedin_logo.png";
import email_logo from "./images/gmail_logo.png";
import personalPhoto from "./images/Lujaina.jpg";
function App() {
  return (
    <>
      <header className="stack-item fade-in">
        <div className="header-div">
          <div
            className="personal-pic"
            data-text="Fun fact! I'm a published and featured author!"
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
          . Download my{" "}
          <Popup
            triggerText="resume"
            popupText=<a href="https://drive.google.com/file/d/1JeXjIaSiSxEdPXWBfaNxKU8WhL2zzMKA/view?usp=sharing">
              here!
            </a>
          />{" "}
          to see the rest. <br /> <br />
          <b>
            {" "}
            I aspire to leverage my skills in machine learning and software
            development to tackle real-world problems and improve the user
            experience. I am also passionate about entrepreneurship and
            solutions that address real-world problems in sustainability and the
            promotion of diversity. Additionally, I love to participate in case
            competitions, entrepreneurship challenges, and hackathons where I
            can propose solutions to experienced community leaders.
          </b>
        </h3>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
      </main>

      <section className="projects fade-in"></section>
    </>
  );
}
export default App;
