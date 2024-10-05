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
          Hey there! I’m an enthusiastic front-end developer with 2.6 years of
          experience building dynamic, high-performance web applications. My
          development journey began by creating custom WordPress themes, and
          over the years, I’ve evolved into building powerful, scalable software
          solutions for a range of industries—from
          <span className="font-semibold text-white">innovative startups</span>
          to
          <span className="font-semibold text-white">
            large-scale enterprises
          </span>
          .
        </p>
        <p className="mb-6 leading-relaxed">
          {" "}
          Right now, I’m working at{" "}
          <span className="font-semibold text-white">Carret</span>, where my
          main focus is optimizing web performance and scalability. I’ve had the
          opportunity to architect web SDKs, enhance mobile app performance for
          both{" "}
          <span className="font-semibold text-white">
            Android and iOS devices
          </span>
          using React Native, and contribute to large-scale crypto solutions. My
          goal? To build user interfaces that not only look great but also run
          seamlessly across platforms.
        </p>
        <p className="mb-6 leading-relaxed">
          Outside of work, I’m passionate about optimizing web apps and
          exploring new front-end technologies. I enjoy working on personal
          projects that push the boundaries of web performance and scalability.
          Additionally, I love sharing knowledge through blog posts and code
          snippets that help others solve real-world problems.
        </p>
        <p className="leading-relaxed">
          When I’m not coding, you’ll likely find me staying active through
          fitness, exploring the latest tech innovations, or spending quality
          time with friends and family. I’m always excited to take on new
          challenges, whether it’s in the tech world or in life!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
