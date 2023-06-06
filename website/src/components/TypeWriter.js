import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import Popup from "./Popup";

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (!text || currentIndex === text.length) {
        setIsTyping(false);
        clearInterval(intervalId);
      } else {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, 50); // Adjust typing speed here (milliseconds)

    return () => clearInterval(intervalId);
  }, [text]);

  const renderText = (text) => {
    if (!text) {
      return null;
    }

    const options = {
      replace: (domNode) => {
        if (domNode.type === "tag" && domNode.name === "popup") {
          const triggerText = domNode.attribs.triggerText;
          const popupText = domNode.attribs.popupText;

          return (
            <Popup triggerText={triggerText} popupText={popupText} />
          );
        }

        return domNode;
      },
      trim: false,
      replace: (domNode) => {
        if (domNode.type === "tag" && domNode.name === "a") {
          const href = domNode.attribs.href;

          return (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {domToReact(domNode.children, options)}
            </a>
          );
        }

        return undefined;
      },
    };

    return parse(text, options);
  };

  return <span>{renderText(currentText)}</span>;
};

export default Typewriter;






