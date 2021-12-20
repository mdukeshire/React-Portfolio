import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Password-Generator',
      description: 'HTML/CSS',
      link: "https://mdukeshire.github.io/Password-Generator/",
      repo: "https://github.com/mdukeshire/Password-Generator"
    },
    {
      name: 'Workout-Tracker',
      description: 'HTML/CSS',
      link: "https://matt-dukeshire-workout-tracker.herokuapp.com/",
      repo: "https://github.com/mdukeshire/Workout-Tracker"
    },
    {
      name: 'Weather-Dashboard',
      description: 'HTML/CSS/JS',
      link: "https://mdukeshire.github.io/Weather-Dashboard/",
      repo: "https://github.com/mdukeshire/Weather-Dashboard"
    },
    {
      name: 'Planmark',
      description: 'HTML/CSS/JS',
      link: "https://mdukeshire.github.io/Event-Search/",
      repo: "https://github.com/mdukeshire/Event-Search"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
