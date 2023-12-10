import React from "react";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Logonado() {
  const tasks = [
    {
      text: "Constructed critical business interfaces leading to a remarkable 25% increase in core engagement metrics. Leveraged React, Material-UI, Redux, and dropzone for Drag and Drop functionality.",
      keywords: ["React ", "Material-UI", "Redux,"],
    },
    {
      text: "Responsible for  Proficient in creating visually appealing and user-friendly interfaces that seamlessly adapt to various devices.",
      keywords: ["creating visually"],
    },
    {
      text: "Collaborated within a cross-functional team of five to transform mockups into reusable UI components using HTML5, CSS3, JavaScript, Bootstrap, SASS, Figma, React.js, and Redux.",
      keywords: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SASS", "Figma"],
    },
    {
      text: "Efficiently scaled web app maintenance to accommodate over 200 active monthly users, employing Sentry for error reporting and Google Analytics-driven updates",
      keywords: ["web app"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
        Software Engineer (Frontend)
 <span className="text-AAsecondary">@ Logonado-Tech - Australia (REMOTE)</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">May 20 - August 2021</span>
        <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://logonado.net/au/", "_blank")}
          >
            www.Logonado-Tech
          </span>
      </div>
      
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <span className={" h-5 w-4 text-AAsecondary flex-none"} ></span>
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
