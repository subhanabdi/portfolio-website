"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import {
  BiLinkExternal,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";
import { SiFramer, SiNextdotjs } from "react-icons/si";

export default function Projects() {
  return (
    <>
    <div id="SomethingIveBuiltSection" data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">

<section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <span className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} ></span>
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
        Some Things I&apos;ve Built
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      </div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[EffectCoverflow, Pagination]}
              spaceBetween={35}
              className="mySwiper"
            >
              {projectsData.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>

          
    </>
  );
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { name, link, githubLink, description, logos, imageSrc } = project;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <Link
        href={link}
        target="blank"
        rel="noopener noreferrer"
        className="cursor-alias"
      >
        {isLoading && (
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
            <ImSpinner9 className="animate-spin text-4xl" />
          </div>
        )}
        <Image
          alt={`${name} screenshot`}
          width={575}
          height={575}
          src={imageSrc}
          priority={index === 0}
          onLoad={() => setIsLoading(false)}
          className="rounded-xl bg-black/30 grayscale-[0.7] filter transition-all hover:grayscale-0"
        />
      </Link>

      <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-black/60 py-4 text-center">
        <p className="text-sm font-medium sm:text-lg">{description}</p>

        <div className="flex items-center gap-4 text-2xl">
          <Link href={link} target="blank" rel="noopener noreferrer">
            <BiLinkExternal />
          </Link>
          {githubLink && (
            <Link href={githubLink} target="blank" rel="noopener noreferrer">
              <BiLogoGithub />
            </Link>
          )}
          {logos}
        </div>
      </div>
    </div>
  );
}

interface ProjectData {
  name: string;
  link: string;
  githubLink?: string;
  description: string;
  logos: JSX.Element[];
  imageSrc: string;
}

const projectsData: ProjectData[] = [
  // {
  //   name: "Altos (ClientView)",
  //   link: "https://app.helloaltos.com",
  //   description: "Altos - an ad tracking platform (now ClientView).",
  //   logos: [
  //     <SiNextdotjs className="text-xl" key="next.js" />,
  //     <BiLogoJavascript key="javascript" />,
  //     <BiLogoReact key="react" />,
  //     <BiLogoTypescript key="typescript" />,
  //     <SiFramer className="text-lg" key="framer" />,
  //   ],
  //   imageSrc: "/altos.jpg",
  // },

  {
    name: "Crypto Ai",
    link: "https://crypto-nextjs-lilac.vercel.app/",
    githubLink: "https://github.com/subhanabdi/crypto-nextjs",
    description: "Crypto Ai Web Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/22.jpg",
  },
  
  {
    name: "FinTech Ai",
    link: "https://fin-tech-ai-black.vercel.app/",
    githubLink: "https://github.com/subhanabdi/FinTech-AI",
    description: "FinTech Ai Web Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/23.jpg",
  },

  {
    name: "All in One AI",
    link: "https://all-in-one-ai.vercel.app/",
    githubLink: "https://github.com/subhanabdi/All-in-one-Ai",
    description: "All in One AI Web Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/20.jpg",
  },

  {
    name: "Content Generator AI",
    link: "https://content-genertor-64p2m1r66-subhanabdis-projects.vercel.app/",
    githubLink: "https://github.com/subhanabdi/Content-Genertor-AI",
    description: "Content Generator AI Web Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/21.jpg",
  },

  // {
  //   name: "Content Generator AI",
  //   link: "https://content-genertor-64p2m1r66-subhanabdis-projects.vercel.app/",
  //   githubLink: "https://github.com/subhanabdi/Content-Genertor-AI",
  //   description: "Content Generator AI Web Application is a web-based platform",
  //   logos: [
  //     <BiLogoReact key="react" />,
  //     <BiLogoTypescript key="typescript" />,
  //     <BiLogoJavascript key="js" />,
  //   ],
  //   imageSrc: "/21.jpg",
  // },


  {
    name: "AI Interview Application",
    link: "https://ai-interview-brown-theta.vercel.app/",
    githubLink: "https://github.com/subhanabdi/AI-Interview",
    description: "AI Interview Web Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/30.jpg",
  },

  {
    name: "News Letter Web Application",
    link: "https://news-letter-ai.vercel.app/",
    githubLink: "https://github.com/subhanabdi/News-letter-Ai",
    description: "News Letter Web Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/25.jpg",
  },

  // {
  //   name: "News Letter Web Application",
  //   link: "https://news-letter-ai.vercel.app/",
  //   githubLink: "https://github.com/subhanabdi/News-letter-Ai",
  //   description: "News Letter Web Application is a web-based platform",
  //   logos: [
  //     <BiLogoReact key="react" />,
  //     <BiLogoTypescript key="typescript" />,
  //     <BiLogoJavascript key="js" />,
  //   ],
  //   imageSrc: "/25.jpg",
  // },

  {
    name: "Mail way Ai Application",
    link: "https://mail-way.vercel.app/",
    githubLink: "https://github.com/subhanabdi/Mail-way",
    description: "Mail way AI Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/24.jpg",
  },

  {
    name: "Workz-Ai Automation Application",
    link: "",
    githubLink: "https://github.com/subhanabdi/Workz-Ai",
    description: "Workz-Ai Automation  Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/27.jpg",
  },

  {
    name: "Resume Builder Application",
    link: "",
    githubLink: "https://github.com/subhanabdi/Resume-Builder",
    description: "Resume Builder Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/26.jpg",
  },

  {
    name: "Admin Dashboard Application",
    link: "https://timely-kulfi-624f00.netlify.app/",
    githubLink: "https://github.com/subhanabdi/react-admin-dashboard",
    description: "Admin Dashboard Application is a web-based platform",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/09.jpg",
  },

  {
    name: "Bonik E-commerice Project",
    link: "https://resonant-nougat-46c967.netlify.app/",
    githubLink: "https://github.com/subhanabdi/Ecommerice-Website-in-React",
    description: "Custom Web-Application for a brand named Bonik E-commerice.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/02.jpg",
  },

  {
    name: "Syncfusion Dashboard",
    link: "https://incredible-pastelito-49821f.netlify.app/",
    githubLink: "https://github.com/subhanabdi/syncfusion_dashboard",
    description: "Syncfusion Dashboard Application is a powerful data visualization and reporting tool",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/15.jpg",
  },

  {
    name: "SentFi",
    link: "https://sentfi.netlify.app",
    githubLink: "https://github.com/subhanabdi/Sentinel-Finance",
    description: "Proof-of-concept website for a dCommerce platform.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/sentfi.jpg",
  },

  {
    name: "One Child ",
    link: "https://onechild.org/",
    githubLink: "https://github.com/subhanabdi/",
    description: "A mobile application that will connect sponsors with children in need.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/10.jpg",
  },

  {
    name: "Mall ET",
    link: "https://play.google.com/store/apps/details?id=com.qemer.mall_users&hl=en&gl=US",
    githubLink: "https://github.com/subhanabdi/",
    description: "Mall ET is a mobile application for users to explore nearby buildings and services by using user’s mobile location with a second mobile application for service providers to insert products and details.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/17.jpg",
  },

 

  {
    name: "Hepius Mobile App",
    link: "https://hepiusapp.com/",
    githubLink: "https://github.com/subhanabdi/",
    description: "Hepius a mobile application for health professionals to write prescriptions for patients",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/11.jpg",
  },


 



  {
    name: "BahamaFoodie",
    link: "https://hellobahamafoodie.com",
    description: "Digital plant-based restaurant in The Bahamas.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/hellobahamafoodie.jpg",
  },
  {
    name: "Interllo",
    link: "https://interllo.netlify.app",
    githubLink: "https://github.com/subhanabdi/interllo-main-project",
    description: "Official website for Interllo.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/interllo.jpg",
  },
  {
    name: "foodieFetch",
    link: "https://foodie-fetch.netlify.app",
    githubLink: "https://github.com/subhanabdi/foodie-fetch_reactjs-main",
    description: "Find recipes with the ingredients you have.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTailwindCss key="tailwind" />,
      <BiLogoTypescript key="typescript" />,
    ],
    imageSrc: "/foodie-fetch.jpg",
  },
  {
    name: "LingoLookup",
    link: "https://lingolookup.netlify.app",
    githubLink: "https://github.com/subhanabdi/lingo-lookup-main",
    description: "Explore word definitions, synonyms, pronunciation, and more.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTailwindCss key="tailwind" />,
      <BiLogoTypescript key="typescript" />,
    ],
    imageSrc: "/lingo-lookup.jpg",
  },
  
  {
    name: "Porsche 911",
    link: "",
    githubLink: "https://github.com/subhanabdi/Brand-website",
    description: "Official website for Porsche 911",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/16.jpg",
  },

  {
    name: "Crypto-Tracker-2.0",
    link: "https://resonant-nougat-46c967.netlify.app/",
    githubLink: "https://github.com/subhanabdi/Ecommerice-Website-in-React",
    description: "Web-Application for a Crypto-Tracker-2.0.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/03.jpg",
  }, 
  
  {
    name: "AirBnb Clone Project",
    link: "https://airbnb-clone-973ab.web.app/",
    githubLink: "https://github.com/subhanabdi/airbnb_firebase-clone",
    description: "AirBnb Clone created in React JS for studying purposes.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/04.jpg",
  },

  {
    name: "Netflix Clone Project",
    link: "https://netflix-clone-acb27.web.app/",
    githubLink: "https://github.com/subhanabdi/netflix2.0-clone",
    description: "Netflix Clone created in React JS for studying purposes.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/13.jpg",
  },

  {
    name: "Onboarding Screen",
    link: "/",
    githubLink: "https://github.com/subhanabdi/",
    description: "Onboarding Screen created in React Native for Project purposes.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/08.jpg",
  },

  {
    name: "Game Store",
    link: "/",
    githubLink: "https://github.com/subhanabdi/",
    description: "Game Store created in React Native for Project purposes.",
    logos: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="typescript" />,
      <BiLogoJavascript key="js" />,
    ],
    imageSrc: "/07.jpg",
  },

  {
    name: "Color Block website",
    link: "/",
    githubLink: "https://github.com/subhanabdi/",
    description: "Color Block website created in for Project purposes.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/18.jpg",
  },

  {
    name: "Clean Juice website",
    link: "/",
    githubLink: "https://github.com/subhanabdi/",
    description: "Clean Juice website created in for Project purposes.",
    logos: [
      <BiLogoJavascript key="js" />,
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
    ],
    imageSrc: "/19.jpg",
  },



];
