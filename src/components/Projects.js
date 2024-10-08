import React from "react";

// Array to store project data with colors and links
const projects = [
  {
    title: "Super App 1",
    description:
      "SuperApp is a React-based multi-utility web app featuring: Stopwatch: Track time effortlessly. Movies: Browse and explore movies by genre. Profile Card: Create and display customizable profile info. Notes: Add and manage personal notes.",
    color: "bg-red-500",
    hoverColor: "bg-red-300",
    link: "https://super-app-olive.vercel.app/"
  },
  {
    title: "Product Landing Page",
    description:
      "Welcome to our landing page, built with Next.js and TypeScript! Featuring a simple, user-friendly navigation bar for easy access to key sections, it’s styled with Tailwind CSS for a modern look. With efficient app routing, enjoy smooth transitions between different parts of the application.",
    color: "bg-blue-500",
    hoverColor: "bg-blue-300",
    link: "https://project-landing-page-topaz.vercel.app/"
  },
  {
    title: "Bg-Color-Changer",
    description:
      "The BG Color Changer app is an interactive tool built with ReactJS that allows users to easily change the background color of their web page. Featuring a simple color palette and live preview, users can select from vibrant colors.",
    color: "bg-green-500",
    hoverColor: "bg-green-300",
    link: "https://background-color-changer-app-psi.vercel.app/"
  },
  {
    title: "Color Changer App",
    description:
      "This JavaScript file allows for a dynamic color change on a webpage element when clicked. It provides an interactive way to engage users by visually responding to their actions.",
    color: "bg-yellow-500",
    hoverColor: "bg-yellow-300",
    link: "https://color-changer-app-mu.vercel.app/"
  },
  {
    title: "Product Card",
    description:
      "The Product Card is a dynamic and responsive component built with JavaScript that displays product information fetched from an API. Each card features a product image, title, description, and price, providing users with essential details at a glance. With real-time data integration and interactive elements like an Add to Cart button.",
    color: "bg-purple-500",
    hoverColor: "bg-purple-300",
    link: "https://product-card-spice-tech.vercel.app/"
  },
  {
    title: "Password Generator",
    description:
      "The Password Generator is a user-friendly application created with ReactJS that allows users to generate secure and customizable passwords effortlessly. Users can select various parameters, such as password length and the inclusion of special characters, numbers, and uppercase letters.",
    color: "bg-pink-500",
    hoverColor: "bg-pink-300",
    link: "https://password-generator-app-murex.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-950 text-center">
      <h2 className="text-white text-4xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.color} text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:${project.hoverColor} `}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-bold py-2 px-4 rounded-full bg-white transition duration-300 ease-in-out hover:bg-blue-200 hover:shadow-lg transform hover:scale-105"
            >
              Click To View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
