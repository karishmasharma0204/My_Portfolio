import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gray-900 text-center">
      <h2 className="text-white text-4xl font-bold mb-6">My Resume</h2>
      <p className="text-white mb-4">
        Download my resume to learn more about my skills and experiences.
      </p>
      <a
        href="/assets/Karishma_sharma_React developer.pdf"
        download
        className="inline-block bg-red-200 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
