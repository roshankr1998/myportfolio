import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    { 
      id: 1, 
      title: "Portfolio Website", 
      details: "Detailed description, tech stack, images, links, etc.", 
  
    },
    { 
      id: 2, 
      title: "Inventory Management System", 
      details: 
        "The Inventory Management System is a standalone GUI-based application built to streamline the process of managing inventory records in real time. It provides businesses with the ability to accurately track both incoming and outgoing stock using a lightweight yet reliable SQLite database integration. Designed with usability in mind, the application features an intuitive and user-friendly interface that makes it accessible even to non-technical users. Beyond day-to-day tracking, it simplifies administrative tasks by enabling quick data entry, instant updates, and efficient retrieval of records. This ensures smoother operations, reduces manual errors, and enhances overall productivity for businesses of any scale."
    },
    { 
      id: 3, 
      title: "Epistle:The Book Donation App", 
      details: "This project is a community-driven Android application designed to facilitate the donation and sharing of books, connecting readers and learners while promoting a culture of generosity. Users can easily sign up to either donate their unused books or request books they need, fostering a seamless exchange of resources within the community. The application includes an advanced search module that allows users to quickly find specific books, access eBooks, or locate nearby libraries and bookstores. By making books more accessible and encouraging the circulation of knowledge, the platform embodies the philosophy of ‘Sharing is Caring,’ ensuring that valuable reading material reaches those who can benefit from it most.", 
      video: "videos/test.mp4" 
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-center mt-20">Project not found</div>;

  const handleWatchDemo = () => {
    navigate("/video", { state: { video: project.video } });
  };

  return (
    <section className="projdetails">
      <div className="content-wrapper">
        <h2>{project.title}</h2>

        
          <p className="text">{project.details}</p>
        

        {/* Watch Demo button */}
        {project.video && (
          <button onClick={handleWatchDemo} className="btn">
            Watch Demo
          </button>
        )}

           <Link
      to="/projects"
      className="btn"
      style={{
        marginLeft: "15px",
        backgroundColor: "#ffffff",
        color: "#1e3c72"
      }}
    >
      Back to Home
    </Link>
  
      </div>
    </section>
  );
}
