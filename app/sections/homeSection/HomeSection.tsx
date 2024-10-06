import React from "react";
import RightSection from "./components/RightSection";
import CardComp from "./components/CardComp";
import AboutMe from "./components/AboutMe";

const ExpData = [
  {
    title: "Frontend Developer | CarretX",
    description:
      "Developed 'Fluid,'' a React-based SDK for seamless fiat-to-crypto exchanges, embedded into websites and powering a PWA. I enhanced the Carret mobile app (React Native) by integrating KYC and reducing its size by 36MB. I also led web optimization with reusable components for scalable UI, and launched India's first OTC Desk for high-volume INR-Crypto trades, while creating a 'Private Client' platform offering a 17% APY.",
    skills: ["React Native", "NextJs", "Typescript", "MUI", "Redux", "Sass"],
    link: "https://www.linkedin.com/company/carretx/",
    expDate: "2023 - Present",
    imgUrl: null,
  },
  {
    title: "Frontend Developer | Newversity",
    description:
      "As a Founding Engineer at Newversity, I led the development of a web app using Next.js, focusing on SEO and performance optimization. I crafted responsive interfaces with Material-UI, managed global state with Redux Toolkit, and integrated Firebase for authentication and PhonePe for payments. I also built a mentor listing and booking platform with real-time interactions via 100ms, improving mentor onboarding and user experience.",
    skills: ["SSR", "NextJs", "Redux Toolkit", "Typescript", "Tailwind"],
    link: "https://www.linkedin.com/company/newversity/",
    expDate: "APR - Nov 2023",
    imgUrl: null,
  },
  {
    title: "Fullstack Developer | Newversity",
    description:
      "Developed key features using Next.js, Redux, TypeScript, and SCSS, managing time efficiently. I designed and built the end-to-end Premium Course (Explore-Purchase-Use) optimized for web and mobile, and implemented QuickBits, boosting user retention by 16%. I also created a full-service Learning Calendar using Python and Django, offering daily class recommendations, and developed multiple internal dashboards with React.js and Redux.",
    skills: ["NextJs", "React", "Typescript", "Javascript", "Redux", "Sass"],
    link: "https://www.linkedin.com/company/bitclass-live/",
    expDate: "2022 - 2023",
    imgUrl: null,
  },
];
const projectData = [
  {
    title: "Light UI | Component Library",
    description:
      "Created a responsive component library using HTML5, CSS3, and JavaScript, designed for seamless integration into any website. It includes pre-styled elements like buttons, grids, and images, along with extensive documentation for easy implementation. This library streamlines web development by providing ready-to-use components, saving time and ensuring consistency across projects.",
    skills: ["HTML", "CSS", "Javascript"],
    link: "https://light-ui-library.netlify.app/docs/docsv2",
    expDate: null,
    imgUrl:
      "https://res.cloudinary.com/dwm5wpz0b/image/upload/v1728158696/Screenshot_2024-10-06_at_1.34.50_AM_jme00l.png",
  },
  {
    title: "Power Tube | Video Library",
    description:
      "Built a web app using React.js, Light-UI, and Mockbee, featuring seamless authentication, personalized playlists, video saving, likes, history tracking, and category filtering. This project showcases my ability to create engaging, user-friendly platforms with clean design and responsive functionality.",
    skills: ["TypeScript", "Node", "Express", "Redux", "Light-UI"],
    link: "https://power-tube.netlify.app/",
    expDate: null,
    imgUrl:
      "https://res.cloudinary.com/dwm5wpz0b/image/upload/v1728138252/Screenshot_2024-10-05_at_7.51.56_PM_stxggd.png",
  },
  {
    title: "Shoe Zone | Ecom",
    description:
      "Built an e-commerce web app using React.js, Light-UI, and Mockbee, featuring user authentication, product sorting, wishlist, and cart management. With Jest testing for reliability, the app combines stunning design with seamless functionality to elevate the shopping experience.",
    skills: ["Jest", "React", "Light-Ui", "Redux"],
    link: "https://shoe-zone-ecom.netlify.app/",
    expDate: null,
    imgUrl:
      "https://res.cloudinary.com/dwm5wpz0b/image/upload/v1728158429/Screenshot_2024-10-06_at_1.30.05_AM_fsk2si.png",
  },
  {
    title: "Aimwiser - Sass Application | Freelance Project",
    description:
      "Maintained and improved key system components using Next.js/React, optimizing loading times for better web performance. Collaborating with project managers and backend developers, I delivered essential features on time, contributing to the web app's success. Additionally, I gained experience working on a Slack bot with Flask in Python, assisting in debugging complex code.",
    skills: ["NextJs", "React", "Light-Ui", "Sass"],
    link: "https://www.linkedin.com/company/aimwiser/",
    expDate: null,
    imgUrl:
      "https://res.cloudinary.com/dwm5wpz0b/image/upload/v1728158991/Screenshot_2024-10-06_at_1.39.43_AM_mdhna2.png",
  },
];

const blogData = [
  {
    title: "This keyword in javascript",
    description: "2022",
    skills: null,
    link: "https://dev.to/harshitpaliwal95/this-keyword-in-javascript-3djn",
    expDate: null,
    imgUrl:
      "https://res.cloudinary.com/dwm5wpz0b/image/upload/v1728159397/Screenshot_2024-10-06_at_1.46.33_AM_w5ajtm.png",
  },
  {
    title: "Material ui styling being overidden",
    description: "2024",
    skills: null,
    link: "https://medium.com/@harshitpaliwal95/material-ui-contained-button-styling-being-overidden-by-muibuttonbase-root-mui-migration-b5285c201750",
    expDate: null,
    imgUrl:
      "https://res.cloudinary.com/dwm5wpz0b/image/upload/v1728159297/Screenshot_2024-10-06_at_1.44.50_AM_arrma4.png",
  },
];

const HomeSection = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <RightSection />

      <div className="pt-24 lg:w-1/2 lg:py-24" id="about">
        <AboutMe />
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          id="experience"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experience
            </h2>
          </div>
          <ol className="group/list">
            {ExpData.map(
              ({ title, description, skills, link, expDate, imgUrl }) => (
                <CardComp
                  title={title}
                  subText={description}
                  key={title}
                  skills={skills}
                  link={link}
                  expDate={expDate}
                  imgUrl={imgUrl}
                />
              )
            )}
          </ol>
          <div className="mt-12">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
                View Full{" "}
                <span className="inline-block">
                  Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </section>
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          id="projects"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projects
            </h2>
          </div>
          <ul className="group/list">
            {projectData.map(
              ({ title, description, skills, link, expDate, imgUrl }) => (
                <CardComp
                  title={title}
                  subText={description}
                  key={title}
                  skills={skills}
                  link={link}
                  expDate={expDate}
                  imgUrl={imgUrl}
                />
              )
            )}
          </ul>
        </section>
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          id="writes"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Writes
            </h2>
          </div>
          <ul className="group/list">
            {blogData.map(
              ({ title, description, skills, link, expDate, imgUrl }) => (
                <CardComp
                  title={title}
                  subText={description}
                  key={title}
                  skills={skills}
                  link={link}
                  expDate={expDate}
                  imgUrl={imgUrl}
                />
              )
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
