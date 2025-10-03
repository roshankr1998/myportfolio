import React, { useState, useEffect } from "react";
import leetcodeLogo from "../assets/icons8-leetcode-24.png";
import codechefLogo from "../assets/icons8-codechef-50.png";
import hackerrankLogo from "../assets/icons8-hackerrank-32.png";
import codeforcesLogo from "../assets/icons8-codeforces-24.png";

export default function Profile() {
  const [leetcodeStats, setLeetCodeStats] = useState({ solved: "Loading...", rating: "NA" });

  // Fetch LeetCode stats via public API
  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/roshankumar1998")
      .then((res) => res.json())
      .then((data) =>
        setLeetCodeStats({
          solved: data.totalSolved ?? "N/A",
          rating: data.acSubmissionRate ?? "NA", // use AC rate as a pseudo rating
        })
      )
      .catch(() => setLeetCodeStats({ solved: "Error", rating: "NA" }));
  }, []);

  const profiles = [
    {
      platform: "LeetCode",
      username: "roshankumar1998",
      solved: leetcodeStats.solved,
      rating: leetcodeStats.rating,
      url: "https://leetcode.com/u/roshankumar1998/",
      logo: leetcodeLogo,
    },
    {
      platform: "CodeChef",
      username: "roshan_kr1998",
      solved: 114,
      rating: 1426,
      url: "https://www.codechef.com/users/roshan_kr1998",
      logo: codechefLogo,
    },
    {
      platform: "HackerRank",
      username: "roshan_kumar_co1",
      solved: 400,
      rating: 5,
      url: "https://www.hackerrank.com/roshan_kumar_co1",
      logo: hackerrankLogo,
    },
    {
      platform: "Codeforces",
      username: "roshan_kr1998",
      solved: 67,
      rating: 1800,
      url: "https://codeforces.com/profile/roshan_kr1998",
      logo: codeforcesLogo,
    },
  ];

  return (
    <div className="proj">
      <h1 style={{ fontSize: "2.2rem", marginBottom: "2rem", textAlign: "center" }}>
        My Coding Profiles
      </h1>
      <div
        className="projects-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {profiles.map((profile, index) => (
          <div key={index} className="glass-card" style={{ textAlign: "center" }}>
            <img
              src={profile.logo}
              alt={profile.platform}
              style={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <p>Username: {profile.username}</p>
            <p>Rating: {profile.rating}</p>
            <p>Questions Solved: {profile.solved}</p>
            {profile.url && (
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                View Profile
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
