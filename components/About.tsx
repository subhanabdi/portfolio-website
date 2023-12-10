import React from 'react'
import Image from "next/image";





  export const About: React.FC = () => {

    const technologies = [
        ["Next.js", "JavaScript (ES6+)", "Nodejs", "Typescript", "Python", "Prisma ORM", "Gen AI", "php", "MongoDB", "PostgreSQL"],
        ["MySql", "GraphQL", "AWS", "GIT", "Google Cloud", "Webpack", "Vercel", "Netlify", "Heroku" , "XML"],
        ["Firebase", "NPM", "Vitejs", "Docker", "SystemDesigns", "TypeScript", "Redux", "Angular", "Supabase", "react-moralis"],
        ["SDLC", "Agile", "JIRA", "Problem-solving", "Communication skills", "Scrum", "Business Intelligence", "WordPress"],
        ["Design Figma", "Adobe XD", "Adobe Photoshop", "Shopify", "Liquid", "OAuth", "Web-Flow", "Tailwind CSS"],
        ["CSS", "JSON", , "React Native" , "Bootstrap", "MaterialUI", "CSS/SASS" , "Framer Motion" , "Shadcn-Ui"],
      ];
  return (
    

    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
    {/* // ? 0.1 About Me */}
    <div
      className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
      md:w-[700px] lg:w-[900px] "
    >
      <div className="flex flex-row items-center ">
        <div className="flex flex-row  items-center mr-4">
          <span className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} ></span>
          <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
          <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
            About Me
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
      </div>
      {/* // ? Paragraphs */}

      <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
        <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
          <div className="font-Header ">
          <span className="text-gray-400 ">
  Hello! I&apos;m Subhan Abidi, a Full Stack Engineer with 5 years of experience crafting 
  resilient web applications. Specializing in <span className="text-AAsecondary">React.js, Node.js, PHP, Python, Next.js, and TypeScript,</span>
  I&apos;ve contributed to diverse projects in health-tech, 
  e-commerce, and AI.
</span>
          </div>
          <div className="font-Header ">
          <span className="text-gray-400 ">
  My journey involves collaborating with cross-functional teams to deliver high-quality code and solutions. 
  I thrive on staying ahead in technology, ensuring my work aligns with industry 
  standards and anticipates future trends.{" "}
  , I&apos;m dedicated to continuous learning, 
  always seeking new skills and tools to enhance my capabilities. As a professional
  who values effective communication and teamwork, 
  I&apos;m ready to bring my adaptable mindset to contribute meaningfully to your projects.{" "}
  , my passion for  <span className="text-AAsecondary">(Full-Stack-Engineer)  </span>and continuous
  learning drives me to make a positive impact and advance technology.
</span>
          </div>
         

          <div className="font-Header tracking-wide">
          <span className="text-gray-400  ">
  Here are a few technologies I&apos;ve been working with recently :
</span>
          </div>
          <div className="font-Header tracking-wide flex flex-row space-x-16">
{/* First column */}
<div className="flex flex-col space-y-4 sm:text-base text-sm">
  {technologies[0].map((tech, index) => (
    <div key={index} className="flex flex-row items-center space-x-2">
      <span className={"h-3 w-3 text-AAsecondary"}></span>
      <span className="text-gray-400 sm:text-sm text-xs grwqs">{tech}</span>
    </div>
  ))}
</div>

{/* Second column */}
<div className="flex flex-col space-y-4 sm:text-base text-sm">
  {technologies[1].map((tech, index) => (
    <div key={index} className="flex flex-row items-center space-x-2">
      <span className={"h-3 w-3 text-AAsecondary"}></span>
      <span className="text-gray-400 sm:text-sm text-xs grwqs">{tech}</span>
    </div>
  ))}
</div>

{/* Third column */}
<div className="flex flex-col space-y-4 sm:text-base text-sm">
  {technologies[2].map((tech, index) => (
    <div key={index} className="flex flex-row items-center space-x-2">
      <span className={"h-3 w-3 text-AAsecondary"}></span>
      <span className="text-gray-400 sm:text-sm text-xs grwqs">{tech}</span>
    </div>
  ))}
</div>

{/* Fourth column */}
<div className="flex flex-col space-y-4 sm:text-base text-sm">
  {technologies[3].map((tech, index) => (
    <div key={index} className="flex flex-row items-center space-x-2">
      <span className={"h-3 w-3 text-AAsecondary"}></span>
      <span className="text-gray-400 sm:text-sm text-xs grwqs">{tech}</span>
    </div>
  ))}
</div>

{/* Fifth column */}
<div className="flex flex-col space-y-4 sm:text-base text-sm">
  {technologies[4].map((tech, index) => (
    <div key={index} className="flex flex-row items-center space-x-2">
      <span className={"h-3 w-3 text-AAsecondary"}></span>
      <span className="text-gray-400 sm:text-sm text-xs grwqs">{tech}</span>
    </div>
  ))}
</div>

{/* Sixth column */}
<div className="flex flex-col space-y-4 sm:text-base text-sm">
  {technologies[5].map((tech, index) => (
    <div key={index} className="flex flex-row items-center space-x-2">
      <span className={"h-3 w-3 text-AAsecondary"}></span>
      <span className="text-gray-400 sm:text-sm text-xs grwqs">{tech}</span>
    </div>
  ))}
</div>
</div>
        </div>
        {/* // ? Image in Desktop and Tablet */}
        <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
          <div
            className="group-hover:translate-x-3 group-hover:translate-y-3
             duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
             translate-y-5 rounded"
          ></div>

          <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
            <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
            <Image
                src="/subhan.jpg"
                className={"object-contain rounded-lg"}
              alt="My Image Not Found"
              width={1000}
              height={500}
              />
          </div>
        </div>
        {/* // ?Image in Mobile */}
        <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
          <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
          <div className="absolute w-48 h-full rounded overflow-hidden">
          <Image
                src="/subhan.jpg"
                className={"object-contain rounded-lg"}
              alt="My Image Not Found"
              width={1000}
              height={500}
              />
          </div>
          <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
        </div>
      </div>
    </div>
  </div>





  );
};

