import React from "react";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function MetallurgicalSystems() {
  const tasks = [
    {
      text: "Spearheaded the development of modern, high-performance, and robust code for diverse client and internal applications.",
      keywords: ["high-performance"],
    },
    {
      text: "Collaborated daily with multidisciplinary teams consisting of engineers, designers, producers, clients.",
      keywords: ["designers"],
    },
    {
      text: "Engineered and maintained crucial components to meet the company's evolving business requirements.",
      keywords: ["business"],
    },

  {
      text: "Employed modern optimization techniques to reduce page size and load times, thereby enhancing the user experience.",
      keywords: ["load times"],
    },
  {
      text: "Managed and enhanced the admin dashboard for customer complaints resolution and system monitoring.",
      keywords: ["admin dashboard"],
    },
  {
      text: "Designed and implemented an advanced search system for administrators and customer success agents, significantly reducing the time required to resolve customer issues.",
      keywords: ["implemented"],
    },
 {
      text: "Provided technical support to the customer success team while resulted to a 20% plus increase in issue resolutions",
      keywords: ["issue resolutions"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          React & Node.js Engineer <span className="text-AAsecondary">@ Metallurgical Systems - Australia (REMOTE) </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">March 2021 - Aug 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://metallurgicalsystems.com/", "_blank")}
          >
            www.Metallurgical-Systems
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
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
    </>
  );
}
