import React from "react";
import { Link } from "react-router-dom";

const topics = [
  "Web Development — React, Node.js, full-stack tutorials",
  "Programming Tips — Clean code practices, debugging, tools",
  "Technology News — Industry updates and trends",
  "Project Walkthroughs — Real-world build guides",
  "Career Advice — Tips for developers and tech learners",
];

const techStack = [
  { name: "MongoDB", desc: "Database" },
  { name: "Express.js", desc: "Backend" },
  { name: "React", desc: "Frontend" },
  { name: "Node.js", desc: "Runtime" },
];

function About() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#158cc8] to-[#111d58] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <span className="inline-block bg-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to #Blog
          </h1>

          <p className="text-lg text-white/90 max-w-xl mx-auto">
            A simple space to read, learn, and share ideas — built by a developer
            who is still learning, just like you.
          </p>

        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-14 text-gray-700">

        {/* What is Blog */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded"></span>
            What is Blog?
          </h2>

          <p className="mb-4">
            Blog is a modern blogging platform where readers can explore articles
            about technology, programming tutorials, and developer insights.
          </p>

          <p>
            Whether you're here to learn something new, follow tutorials,
            or discover useful tech resources, Blog aims to provide
            a clean and enjoyable reading experience.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded"></span>
            Our Mission
          </h2>

          <p className="mb-4">
            Our mission is simple — make knowledge accessible. We believe great
            content should be free and easy to understand for everyone.
          </p>

          <p>
            We also encourage community discussion where readers can learn
            from each other and grow together.
          </p>
        </section>

        {/* Topics */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded"></span>
            What We Cover
          </h2>

          <ul className="space-y-3">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">

                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-[#0e7db5]/10 text-[#0e7db5] text-xs font-bold">
                  ✓
                </span>

                <span>{topic}</span>

              </li>
            ))}
          </ul>
        </section>

        {/* Developer */}
        <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About the Developer
          </h2>

          <p className="mb-4">
            Blog was built by <strong>Gautam Singh</strong>, a developer
            learning full-stack web development using the MERN stack
            (MongoDB, Express.js, React, Node.js).
          </p>

          <p className="italic text-gray-500">
            “The best way to learn programming is by building real projects.”
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded"></span>
            Built With
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center border-t pt-10">
          <p className="text-gray-500 mb-4">Have questions or feedback?</p>

          <Link
            to="/contact"
            className="inline-block bg-[#0e7db5] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0c6a9a] transition"
          >
            Contact Us
          </Link>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-6 text-center px-6">
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          This blog is a learning project built for educational purposes.
        </p>
      </footer>

    </div>
  );
}

export default About;