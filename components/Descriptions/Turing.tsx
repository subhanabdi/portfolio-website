import React from "react";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Turing() {
  const tasks = [
    {
      text: " Led a team of 3 developers to build a Web-App connecting locals with travelers, featuring geolocation",
      keywords: ["build a Web-App"],
    },
    {
      text: "Tracking, live messaging, and personalized travel recommendations, ensuring a seamless user interface",
      keywords: ["user interface"],
    },
    {
      text: "Upgraded React -  Next js legacy code from v0.63 to v0.72, increasing performance by 45% per analytic funnels.",
      keywords: ["React -  Next js"],
    },

  {
      text: "Built 72 TypeScript components, designed 218 UI screens, and documented using Storybook.",
      keywords: ["TypeScript components"],
    },
  {
      text: "Responsible for pixel-perfect UI replications, ensuring a user-friendly and visually appealing website.",
      keywords: ["user-friendly "],
    },
  {
      text: "Handled API integrations, facilitating seamless data exchange between the platform and various services.",
      keywords: ["Handled API integrations,"],
    },
 {
      text: "improved deployment processes, ensured code quality through rigorous code reviews, and organized learning sessions for the team.",
      keywords: ["code reviews"],
    },

  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Engineer <span className="text-AAsecondary">@ Turing United States (REMOTE)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.turing.com/", "_blank")}
          >
            www.Turing
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
