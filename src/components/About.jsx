import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I'm a Full-Stack Web Developer with a strong interest in building
          efficient and scalable web applications. I enjoy learning new
          technologies and continuously improving my skills. Currently, I'm
          working on freelance projects and always open to exploring and working
          with new web technologies.
        </p>

        <br />

        <p className="text-xl">
          I enjoy coding from scratch and turning ideas into functional,
          real-world solutions. Let’s connect and bring your project to life.
          <br />
          <br />
          I appreciate minimalistic design, purposeful branding, and creating
          experiences that resonate with users. Let’s work together to make your
          project more impactful and conversion-friendly!
          <br />
          <br />I love crafting or redesigning unique brand identities that not
          only stand out but also drive more traffic through search engines and
          social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
