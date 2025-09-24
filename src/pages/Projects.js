// import React from "react";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       desc: "Responsive React portfolio with modern design, showcasing my work and skills.",
//       li
//     },
//     {
//       title: "Inventory Management System",
//       desc: "Full-stack online store built with React, Node.js, and MongoDB.",
//       link: "#",
//     },
//     {
//       title: "Blog Platform",
//       desc: "Interactive blog platform with authentication, CRUD features, and comments.",
//       link: "#",
//     }
//   ];

//   return (
//       <section className="home">
//       <h2>My Projects</h2>
//       <p>Here are some projects that I made over my Enginnering journey</p>
//       {/* <Link to="/projects" className="btn">View Projects</Link> */}
    
        

//         {/* Horizontal Scroll Container */}
//         <div className="projects-container flex gap-6 overflow-x-auto px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-700">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="glass-card flex-shrink-0 w-80 p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/10 hover:scale-105 transition-transform snap-center"
//             >
//               <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
//               <p className="text-gray-200 mb-4">{project.desc}</p>
//               <a
//                 href={project.link}
//                 className="mt-auto inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
//               >
//                 View Project &rarr;
//               </a>
//             </div>
//           ))}
//         </div>
      
//     </section>
//   );
// }

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
      title: "Inventory Management System",
      desc: "Full-stack inventory management system built with Python, and SQLite DB.",
    },
    {
      id: 3,
      title: "Blog Platform",
      desc: "Interactive blog platform with authentication, CRUD features, and comments.",
    },
  ];

  const goToDetails = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="home py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="mb-12 text-gray-300">
          Here are some projects that I made over my Engineering journey
        </p>

        {/* Horizontal Scroll Container */}
        <div className="projects-container flex gap-6 overflow-x-auto px-2 snap-x snap-mandatory justify-center scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-700">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => goToDetails(project.id)}
              className="glass-card flex-shrink-0 w-80 p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/10 hover:scale-105 transition-transform snap-center cursor-pointer"
            >
              <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
              <p className="text-gray-200 mb-4">{project.desc}</p>
              <span className="mt-auto inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                View Project &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
