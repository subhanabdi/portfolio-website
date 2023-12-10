import React from "react";

import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Webilistic() {
  const tasks = [
    {
      text: "Worked with multiple teams and on multiple Brand projects.",
      keywords: ["Brand projects"],
    },
    {
      text: "Monitored website performance and handled troubleshooting and WordPress issues.",
      keywords: ["MOnitored","WordPress issues"],
    },
    {
      text: "Managed company WordPress website back-end with MySql Database including plugins, tools, and themes.",
      keywords: ["MySql Database"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Wordpress Developer (Remote) <span className="text-AAsecondary">@ Webilistic (United States) </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">june - August 2019</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://webilistic.com/", "_blank")}
          >
            www.Webilistic
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
