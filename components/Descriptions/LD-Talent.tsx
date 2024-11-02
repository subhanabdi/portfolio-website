import React from "react";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LDTalent() {
  const tasks = [
    {
      text: "As a Full-stack Developer of web applications, encompassing both front-end and back-end tasks to ensure seamless functionality.also Freelance Software Applications design and development for remote clients.",
      keywords: ["Full-stack Developer"],
    },
    {
      text: "Collaborating with cross-functional teams to gather requirements, design architecture, and implement features that meet client specifications",
      keywords: ["design teams"],
    },
    {
      text: "Utilizing a combination of technologies such as ReactJS, Node.js, and MongoDB to develop scalable and efficient solutions.",
      keywords: ["ReactJS -  Node js"],
    },

  {
      text: "Conducting regular code reviews, debugging, and optimization to maintain high-quality code standards and enhance overall performance.",
      keywords: ["debugging performance"],
    },

  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Engineer <span className="text-AAsecondary">@ LD-Talent (REMOTE)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.ldtalentwork.com/", "_blank")}
          >
            www.LD-Talent
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
    </>
  );
}
