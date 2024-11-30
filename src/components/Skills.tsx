import React from "react";

const Skills = () => {
  return (
    <div id="skill" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">What I Code With</h2>
          <p className="text-gray-500 pt-2">
            I have expertise in web development, with a strong command of HTML,
            CSS, JavaScript, Node.js, Git, GitHub, and TypeScript. Currently, I
            am working with Tailwind CSS and Next.js while continuing to
            practice and enhance my skills to work professionally.
          </p>
        </div>
        <div>
            <div className="grid grid-cols-2 text-blue-900 text-3xl sm:text-4xl">
                <div className="space-y-2">
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">JavaScript</h2>
                </div>
                <div className="space-y-2">
                    <h2 data-aos="zoom-in-up">TypeScript</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
