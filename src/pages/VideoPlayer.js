import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function VideoPlayer() {
  const location = useLocation();
  const video = location.state?.video; // get video URL passed from ProjectDetails

  if (!video) {
    return (
      <div className="projdetails">
        <p>No video found.</p>
        <Link to="/projects" className="btn">Back to Projects</Link>
      </div>
    );
  }

  return (
    <section className="projdetails">
      <div className="content-wrapper">
        <h2>Project Demo</h2>

        <div className="video-container">
          <video controls autoPlay>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

            <Link
      to="/"
    //   className="btn"
      style={{
        marginLeft: "15px",
        marginTop:"20px",
        // backgroundColor: "#ffffff",
        color: "#ffffff"
      }}
    >
      Back to Home
    </Link>
      </div>
    </section>
  );
}
