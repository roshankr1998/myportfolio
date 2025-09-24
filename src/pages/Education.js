import React from "react";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Responsive React portfolio with fancy design." },
    { title: "E-commerce App", desc: "Full-stack online store with React & Node.js." },
    { title: "Blog Platform", desc: "Interactive blog platform with authentication." },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
