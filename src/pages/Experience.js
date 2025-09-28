import React, { useState } from "react";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./css/we.css";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Senior Member Technical (SDE-2)",
      company: "Broadridge Financial Solutions",
      duration: "July 2025 - Present (0.3 years)",
      description:
        "As a Member Technical at Broadridge Financial Solutions, I have designed and implemented cloud-based solutions using AWS services such as EC2, S3, and RDS, improving infrastructure scalability and reliability. I automated deployment pipelines with Terraform, which reduced deployment time significantly. I also monitored and analyzed system performance to identify and mitigate potential bottlenecks, ensuring optimal application uptime. Additionally, I collaborated with cross-functional teams to migrate legacy systems to cloud environments, achieving a 25% reduction in operational costs."
    },{
      title: "Member Technical (SDE-1)",
      company: "Broadridge Financial Solutions",
      duration: "July 2023 - July 2025 (2 years)",
      description:
        "As a Member Technical at Broadridge Financial Solutions, I have designed and implemented cloud-based solutions using AWS services such as EC2, S3, and RDS, improving infrastructure scalability and reliability. I automated deployment pipelines with Terraform, which reduced deployment time significantly. I also monitored and analyzed system performance to identify and mitigate potential bottlenecks, ensuring optimal application uptime. Additionally, I collaborated with cross-functional teams to migrate legacy systems to cloud environments, achieving a 25% reduction in operational costs."
    },
    {
      title: "Intern",
      company: "Broadridge Financial Solutions",
      duration: "July 2022 - July 2023 (1 year)",
      description:
        "As an Intern at Broadridge Financial Solutions, I assisted in setting up scalable AWS environments for client applications, focusing on high availability and fault tolerance. I developed and maintained Infrastructure-as-Code (IaC) templates using Terraform, enabling consistent and repeatable infrastructure deployments. I supported the DevOps team in troubleshooting deployment issues and optimizing CI/CD workflows, which enhanced deployment efficiency by 30%. Additionally, I documented best practices for cloud architecture and Terraform usage, facilitating knowledge transfer within the organization."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="work-experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`timeline-item ${expandedIndex === idx ? "expanded" : ""}`}
              onClick={() => toggleExpand(idx)}
            >
              <div className="timeline-icon">
                <FaBriefcase size={16} />
              </div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
                <p className={`description ${expandedIndex === idx ? "show" : ""}`}>
                  {exp.description}
                </p>
                <div className="chevron">
                  {expandedIndex === idx ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
