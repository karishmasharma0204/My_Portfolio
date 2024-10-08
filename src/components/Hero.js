import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between transition-transform transform hover:-translate-y-2">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-black flex items-center justify-center transition-transform transform hover:scale-105">
              <img
                src="/assets/profile.jpg"
                alt="Karishma Sharma"
                className="w-60 h-60 rounded-full opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Introduction Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-white transition-shadow hover:shadow-lg">
            Karishma Sharma
          </h1>

          <p className="text-lg mb-6 text-white">
            Frontend Developer | 3+ Years of Experience
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-full font-semibold shadow-md transition-transform duration-300 ease-in-out hover:bg-gray-700 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
