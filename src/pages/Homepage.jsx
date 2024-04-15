import React from "react";

const Homepage = () => {
  return <Hero></Hero>;
};

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="name">DIXXANTA SHRESTHA</h1>
      <div className="job-title">
        <h2>
          WEB DEVELOPER
          <br />
          UI/UX DESIGNER
        </h2>
      </div>
    </div>
  );
};
export default Homepage;
