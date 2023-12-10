import React from "react";

import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Upwork() {
  const tasks = [
    {
      text: "Promoted the Hagglex platform through responsive designs (Mobile/Tablet/Desktop) created with HTML&CSS, Bootstrap,React, and React Router.",
      keywords: ["Hagglex platform"],
    },
    {
      text: "Boosted traffic and popularity among millennials by over 20% for Cardvest through the development of a hybrid app using React Native and Nativebase.",
      keywords: ["Cardvest" , " hybrid app"],
    },
    {
      text: "Elevated customer engagement for DartAfrica, a gift card and crypto exchange platform, by building a mobile app using React Native and implementing Push Notifications.",
      keywords: ["DartAfrica" ,"crypto exchange platform"],
    },

  {
      text: "Managed and developed features for Preferental, resulting in an expanded customer base and enhanced business offerings.",
      keywords: ["business offerings"],
    },
  {
      text: "Key features included a Lease management system and a Property enquiry system.",
      keywords: ["Lease management system"],
    },
  {
      text: "Revamped team structure and code processes at Preferental while serving as Team Lead. Mentored junior developers,",
      keywords: ["Team Lead"],
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
          Full Stack Engineer <span className="text-AAsecondary">@ Upwork (Freelancer) - United States (REMOTE)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Apr 2018 - Present</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.upwork.com/freelancers/~012b79dd8e7685c64a?viewMode=1", "_blank")}
          >
            www.Upwork-Profile
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
