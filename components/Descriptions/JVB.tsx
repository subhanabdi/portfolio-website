import React from "react";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function JVB() {
  const tasks = [
    {
      text: "Managed and improved five responsive user interfaces serving over 1000 customers and agents using React, AWS (AWS Amplify), and Sass for SPA development.",
      keywords: ["React" ,"AWS Amplify"],
    },
    {
      text: "Implemented Agile (Scrum) development methodology, ensuring regular updates were delivered to the business team and project managers.",
      keywords: ["Agile" ,"(Scrum)"],
    },
    {
      text: "Enhanced deployment processes by establishing an automated CI/CD pipeline (Bitbucket pipelines), enabling on-demand shipping to production.",
      keywords: ["CI/CD pipeline"],
    },

  {
      text: "Worked on backend APIs using Typescript, Joi, serverless framework, and JavaScript for efficient transmission of large JSON data (REST API).",
      keywords: ["(REST API)" , "Typescript" , "serverless" , "JavaScript"],
    },
  {
      text: "Employed modern optimization techniques to reduce page size and load times, thereby enhancing the user experience.",
      keywords: ["user experience"],
    },
  {
      text: "Developed an agent management system for aggregator customers using React, AntD, Redux, and more, offering improved agent management capabilities.",
      keywords: ["React" , "Redux" , "AntD"],
    },
  {
      text: "Architected & developed a wide variety of frontend web applications and mobile applications according to client’s needs.",
      keywords: ["web applications" , "mobile applications"],
    },
 {
      text: "Optimized healthcare applications and improved SEO using SSR (Server Side Rendering).",
      keywords: ["(Server Side Rendering)"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Lead Frontend Engineer <span className="text-AAsecondary">@ JVB - TI - Brazil (Remote)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Oct 2018 - April 2021</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://jvbti.com.br/", "_blank")}
          >
            www.JVB-TI
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <span className={"h-5 w-4 text-AAsecondary flex-none"} ></span>
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
