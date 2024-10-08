import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-gray-700 to-gray-900 text-center"
    >
      <h2 className="text-white text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-white text-lg  mb-4">
        Feel free to get in touch with me through the form below.
      </p>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded bg-black text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded bg-black text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded bg-black text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded-full hover:bg-blue-500"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
