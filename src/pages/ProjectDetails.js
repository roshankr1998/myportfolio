import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  const imsdetails=[]
  const projects = [
    { id: 1, title: "Portfolio Website", details: "Detailed description, tech stack, images, links, etc." },
    { id: 2, github:"https://github.com/roshankr1998/inventory",title: "Inventory Management System", details: ["A standalone GUI application designed to manage inventory records in real-time.", "Core functionalities include",
        "Tracks incoming and outgoing stock for businesses with SQLite integration.",
        "Offers an intuitive and user-friendly interface for non-technical users.",
        "Simplifies administrative tasks by enabling quick and efficient data retrieval."] },
    { id: 3, title: "Blog Platform", details: "Detailed description of authentication, CRUD, and design." },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-center mt-20">Project not found</div>;
    const openLink = (url) => {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projdetails">
      <div>
        <div>
        <h2>{project.title}</h2>
                {project.github && (
            <button
              onClick={() => openLink(project.github)}
            >
              <FaGithub size={40} />
            </button>
          )}
        </div>
         {/* Bullet points list */}
         <p>{project.details}</p>
        <Link
          to="/projects" className="btn">
          Back to Projects
        </Link>
      </div>
    </section>
  );
}
