import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaJava, FaCloud } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiMysql, SiKotlin, SiAndroidstudio, SiFirebase, SiSqlite, SiTerraform, SiVscode } from "react-icons/si";

export default function Education() {
  const education = [
    { title: "Matriculation", desc: "Board: CBSE", score: "CGPA: 8.4 / 10", yop: "2012-2014" },
    { title: "Diploma", desc: "Board: SBTE", score: "Percentage: 75.28%", yop: "2016-2019" },
    { title: "Bachelor of Technology (B.Tech)", desc: "Specialization: Computer Science & Engineering", score: "CGPA: 9.28 / 10", yop: "2020-2023" },
  ];

  const skills = [
    // Languages
    { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
    { name: "Kotlin", icon: <SiKotlin size={40} color="#0095d5" /> },
    { name: "Python", icon: <FaPython size={40} color="#3776ab" /> },
    { name: "C", icon: <SiJavascript size={40} color="#f34b7d" /> }, // Placeholder icon for C
    { name: "C++", icon: <SiJavascript size={40} color="#00599c" /> }, // Placeholder icon for C++
    { name: "SQL", icon: <SiMysql size={40} color="#00758f" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#68a063" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#facc15" /> },
    { name: "React.js", icon: <FaReact size={40} color="#38bdf8" /> },

    // Technologies
    { name: "Android Studio", icon: <SiAndroidstudio size={40} color="#3ddc84" /> },
    { name: "Firebase", icon: <SiFirebase size={40} color="#ffca28" /> },
    { name: "SQLite", icon: <SiSqlite size={40} color="#003b57" /> },
    { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#f1502f" /> },
    // { name: "VS Code", icon: <SiVscode size={40} color="#0078d7" /> },

    // Cloud Tools
    { name: "AWS", icon: <FaCloud size={40} color="#ff9900" /> },
    { name: "Terraform", icon: <FaCloud size={40} color="#623ce4" /> }
  ];

  return (
    <section id="education" className="proj" style={{ minHeight: "100vh", overflowY: "auto" }}>
      <div>
        {/* Education Section */}
        <h2>My Education</h2>
        <p>I have obtained the following qualifications</p>

        <div className="projects-container">
          {education.map((item, idx) => (
            <div key={idx} className="glass-card1">
              <h4 className="head">{item.title}</h4>
              <div className="multilinesf">
                <p className="multilines">{item.desc}</p>
                {item.score && <p className="multilines">{item.score}</p>}
                {item.yop && <p className="multilines">Year: {item.yop}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div style={{ marginTop: "80px" }}>
          <h2>My Skills</h2>
          <p>Here are some of the technologies and tools I work with</p>
          <div className="projects-container">
            {skills.map((skill, idx) => (
              <div key={idx} className="glass-card1" style={{ textAlign: "center" }}>
                {skill.icon}
                <h4 className="head" style={{ marginTop: "10px" }}>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
