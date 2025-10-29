import React, { useState } from "react";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./css/we.css";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Senior Member Technical (SDE-2)",
      company: "Broadridge Financial Solutions",
      startDate: "2025-07-01",
      endDate: null, // null means Present
      description:
        "As a Senior Member Technical at Broadridge Financial Solutions, I have designed and implemented cloud-based solutions using AWS services such as EC2, S3, and RDS, improving infrastructure scalability and reliability. I automated deployment pipelines with Terraform, which reduced deployment time significantly. I also monitored and analyzed system performance to identify and mitigate potential bottlenecks, ensuring optimal application uptime. Additionally, I collaborated with cross-functional teams to migrate legacy systems to cloud environments, achieving a 25% reduction in operational costs."
    },{
      title: "Member Technical (SDE-1)",
      company: "Broadridge Financial Solutions",
      startDate: "2023-07-01",
      endDate: "2025-07-01",
      description:
        "As a Member Technical at Broadridge Financial Solutions, I have designed and implemented cloud-based solutions using AWS services such as EC2, S3, and RDS, improving infrastructure scalability and reliability. I automated deployment pipelines with Terraform, which reduced deployment time significantly. I also monitored and analyzed system performance to identify and mitigate potential bottlenecks, ensuring optimal application uptime. Additionally, I collaborated with cross-functional teams to migrate legacy systems to cloud environments, achieving a 25% reduction in operational costs."
    },
    {
      title: "Intern",
      company: "Broadridge Financial Solutions",
      startDate: "2022-07-01",
      endDate: "2023-07-01",
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
                <span className="duration">{formatRangeAndDuration(exp.startDate, exp.endDate)}</span>
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

// Helper: format month and year like "Jul 2025"
function formatMonthYear(isoDate) {
  if (!isoDate) return "Present";
  const d = new Date(isoDate);
  const opts = { year: 'numeric', month: 'short' };
  return d.toLocaleDateString(undefined, opts);
}

// Helper: compute human readable duration between two dates (endDate can be null for Present)
function computeDuration(startIso, endIso) {
  const start = new Date(startIso);
  const end = endIso ? new Date(endIso) : new Date();
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1; // adjust if not full month
  if (months < 0) months = 0;
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  if (years > 0) {
    return remMonths > 0 ? `${years} yr${years>1? 's':''} ${remMonths} mo` : `${years} yr${years>1? 's':''}`;
  }
  return `${remMonths} mo`;
}

function formatRangeAndDuration(startIso, endIso) {
  const from = formatMonthYear(startIso);
  const to = endIso ? formatMonthYear(endIso) : 'Present';
  const dur = computeDuration(startIso, endIso);
  return `${from} — ${to} • ${dur}`;
}
