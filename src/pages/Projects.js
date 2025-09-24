import React from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "Responsive React portfolio with modern design, showcasing my work and skills.",
    },
    {
      id: 2,
      title: "IMS",
      desc: "Full-stack inventory management system built with Python and SQLite DB.",
    },
    {
      id: 3,
      title: "Epistle",
      desc: "A community-driven Android app that enables users to donate, share, and discover books, promoting the philosophy of 'Sharing is Caring'.",
    },
  ];

  const goToDetails = (id) => navigate(`/project/${id}`);

  return (
    <section className="proj" >
      <div>
        <h2>My Projects</h2>
        <p>
          Here are some projects that I made over my Engineering journey
        </p>

        {/* Horizontal Scroll Container */}
        <div className="projects-container">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => goToDetails(project.id)}
              className="glass-card"
            >
              {/* Heading and description same size */}
              <h4 className="head"><u>{project.title}</u></h4>
              <p className="text">{project.desc}</p>

              <span className="head">
                View Project &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
