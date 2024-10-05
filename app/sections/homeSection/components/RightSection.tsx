import React from "react";

const RightSection = () => {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ">
      <div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Harshit Paliwal
          </h1>
          <h3 className="text-xl text-slate-300 mt-4">Frontend Engineer</h3>
        </div>
        <p className="mt-4 max-w-xs leading-normal text-md text-slate-400">
          I craft seamless, visually engaging, and accessible digital
          experiences.
        </p>
        <nav className="mt-6 lg:block hidden">
          <ul>
            <li className="group flex items-center py-3">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <a
                href="#about"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
              >
                ABOUT
              </a>
            </li>
            <li className="group flex items-center py-3">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <a
                href="#experience"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
              >
                EXPERIENCE
              </a>
            </li>
            <li className="group flex items-center py-3">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <a
                href="#projects"
                className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
              >
                PROJECTS
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">github</ul>
    </div>
  );
};

export default RightSection;
