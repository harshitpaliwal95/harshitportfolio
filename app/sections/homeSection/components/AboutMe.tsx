import React from "react";

const AboutMe = () => {
  return (
    <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-gray-300">
        <p className="mb-6 leading-relaxed">
          Hey! I’m a passionate front-end engineer with over 3 years of
          experience building fast, scalable, and user-focused web applications.
          I started my journey crafting custom themes and quickly transitioned
          into building modern, full-featured apps using
          <span className="font-semibold text-white">
            {" "}
            React, Next.js, and TypeScript
          </span>
          .
        </p>
        <p className="mb-6 leading-relaxed">
          Currently, I work at
          <span className="font-semibold text-white"> Carret</span> where I lead
          the development of frontend infrastructure for both web and mobile
          platforms. I’ve architected production-grade SDKs, delivered
          full-stack features like
          <span className="font-semibold text-white"> crypto SIPs</span>, and
          handled complex deployments using CI/CD pipelines. My focus is on
          building performant and reliable UIs that scale across devices and
          user bases.
        </p>
        <p className="mb-6 leading-relaxed">
          Outside of work, I love experimenting with new frontend tools,
          optimizing app performance, and contributing to personal projects that
          challenge conventional UI patterns. I also enjoy sharing practical dev
          tips and code snippets with the community through blogs and GitHub.
        </p>
        <p className="leading-relaxed">
          When I’m not coding, you’ll find me working out, exploring new tech
          trends, or spending time with friends and family. I’m always open to
          exciting collaborations and new challenges that push my limits — in
          tech and in life!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
