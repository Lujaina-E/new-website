import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import github_logo from "./images/github_logo.png";
import linkedin_logo from "./images/linkedin_logo.png";
import email_logo from "./images/gmail_logo.png";
import personalPhoto from "./images/Lujaina.jpg";
import TV from "./images/TV.png";
import Popup from "./components/Popup";
import Application from "./components/Application.js";
import Experience from "./components/Experience.js"; 
import TypeWriter from "./components/TypeWriter.js"; //hmm
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
import { Analytics } from '@vercel/analytics/react';


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
    }, 1500); // Change text every 2 seconds

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
          <div
            id="progressBar"
            style={{ transform: `scaleY(${scroll})`, opacity: `${scroll}` }}
          />
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
          {/* {word} */}
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
                the promotion of diversity. Additionally, I love to <Popup triggerText=" attend conferences" popupText="I helped host Canada's largest Undergraduate Engineering Conference, CELC 2023, where i helped raise a $165,000 sponsorship effort!" /> , participate in case competitions, entrepreneurship
                challenges, and hackathons where I can network and propose
                solutions to experienced community leaders.
              </b>
            </div>
          </div>
        </h3>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <br />
        <br />
        <br /> <br />
        <br />
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
                AppTitle="FIFA2022- Rest API"
                techUsed="Transformers, Numpy, Pandas, BERT-Clustering"
                imageSrc={app1}
                description="Scraped 50,000 tweets publicly and created a BERT-clustering model to observe the correlation between a Arab-hosted World Cup and public sentiment about social matters regarding the Middle East."
                githubLink="https://github.com/Lujaina-E/Fifa2022-BERT"
              />
              <Application
                className="apps"
                imageSrc={app2}
                AppTitle="Lotion"
                techUsed="React, Javascript, CSS, HTML"
                description="Developed a note-taking application using local storage."
                githubLink="https://github.com/Lujaina-E/LOTION"
              />
              <Application
                className="apps"
                AppTitle="Obituary Generator"
                techUsed="AWS, React, Terraform, Python"
                imageSrc={app3}
                description="Generates an obituary using OpenAI GPT engine using user's input lifetime, name, and image for the deceased."
                githubLink="https://github.com/ParsaKargari/Obituaries"
              />

              <Application
                className="apps"
                imageSrc={app4}
                AppTitle="Alzhemier's Disease Predictor"
                techUsed="Python, TensorFlow, Flask, React"
                description="Predicts likelihood of developing Alzhemier's through MRI images, allows physicians to upload their own images to improve the CNN model."
                githubLink="https://github.com/SYS-NG/CNHack_2023"
              />

              <Application
                className="apps"
                AppTitle="StyleVision"
                techUsed=""
                imageSrc={app5}
                description="Coming soon"
                githubLink="https://github.com/your-username/repository2"
              />

              <Application
                className="apps"
                AppTitle="UniQuest"
                techUsed="React, Flask, Figma, Python, QR API, Typescript"
                imageSrc={app6}
                description="Tier 1 1st Place Winner at CalgaryHacks 2023. This mobile application dynamically scans QR codes and awards students using points that can be be redeemed at paid University services."
                githubLink="https://github.com/natewu/UniQuest"
              />

              <Application
                className="apps"
                AppTitle="Museum Database Archive"
                techUsed="MySQL, Python"
                imageSrc={app7}
                description="Implemented search system for archived museum artifacts database system through a Python interface, along with Python login connection. Demonstrated knowledge of entity relationships."
                githubLink="https://github.com/Lujaina-E/museum-project-hackerman4000"
              />
              {/*
              <Application
                className="apps"
                AppTitle="Sample"
                                techUsed=""

                imageSrc={app8}
                description="Description of Application 8"
                githubLink="https://github.com/your-username/repository2"
              /> */}

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
            timeline="May 2023 - current"
            role="Undergraduate Researcher"
            description="Researching the effects of magnetic fields on circadian rhythms, and automating manual processes to decrease labour and increase measurement accuracy."
          />
          <Experience
            imageUrl={SPP}
            timeline="May 2022 - Dec 2022"
            role="Deep Social Media Analyst"
            description="Mining public tweets and preprocessing for vectorization for BERT. Handled data to support academic papers being written through the School of Public Policy."
          />
          <Experience
            imageUrl={olsen}
            timeline=" Sept 2021 - Dec 2021"
            role="Machine Learning Engineer Intern"
            description="Engineered 8-regression and tree based models, and achieved 93% accuracy for client-automated process in alignment with process milestones."
          />
          <Experience
            imageUrl={chata}
            timeline=" June 2021 - August 2021"
            role="Machine Learning Engineer Intern"
            description="Coordinated a feature to detect word significance in NLP, and strengthened existing models based on findings from 2 BERT papers."
          />
        </section>
        <br />
      </main>

      <footer>Made in 2023</footer>
      <script defer src="/_vercel/insights/script.js"></script>
    </>
  );
}
export default App;
