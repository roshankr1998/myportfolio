import React, { useState } from "react";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./css/we.css";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Senior Member Technical (SDE-2)",
      company: "Broadridge Financial Solutions",
      startDate: "2025-07-01",
      endDate: null,
      description:
        "As a Senior Member Technical at Broadridge Financial Solutions, I have designed and implemented cloud-based solutions using AWS services such as EC2, S3, and RDS, improving infrastructure scalability and reliability. I automated deployment pipelines with Terraform, which reduced deployment time significantly. I also monitored and analyzed system performance to identify and mitigate potential bottlenecks, ensuring optimal application uptime. Additionally, I collaborated with cross-functional teams to migrate legacy systems to cloud environments, achieving a 25% reduction in operational costs."
    },
    {
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
    <section className="work-section">
      <h2 className="section-title">Work Experience</h2>

      <div className="step-timeline">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`step-item ${expandedIndex === idx ? "expanded" : ""}`}
          >
            {/* Step Indicator */}
            <div className="step-marker">
              <FaBriefcase size={16} />
            </div>

            {/* Step Content */}
            <div className="step-content" onClick={() => toggleExpand(idx)}>
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{formatRangeAndDuration(exp.startDate, exp.endDate)}</p>

              <p className={`description ${expandedIndex === idx ? "show" : ""}`}>
                {exp.description}
              </p>

              <div className="chevron">
                {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {/* Connector Line */}
            {idx !== experiences.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}


// ---------------------- Helper Functions -----------------------------

function formatMonthYear(isoDate) {
  if (!isoDate) return "Present";
  const d = new Date(isoDate);
  const opts = { year: "numeric", month: "short" };
  return d.toLocaleDateString(undefined, opts);
}

function computeDuration(startIso, endIso) {
  const start = new Date(startIso);
  const end = endIso ? new Date(endIso) : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) months -= 1;
  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (years > 0) {
    return rem > 0 ? `${years} yr ${rem} mo` : `${years} yr`;
  }
  return `${rem} mo`;
}

function formatRangeAndDuration(startIso, endIso) {
  const from = formatMonthYear(startIso);
  const to = endIso ? formatMonthYear(endIso) : "Present";
  const dur = computeDuration(startIso, endIso);
  return `${from} — ${to} • ${dur}`;
}
