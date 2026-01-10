import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Git", progress: 100, className: "git-progress", years: 3 },
    { name: "GitHub", progress: 100, className: "github-progress", years: 3 },
    { name: "VSCode", progress: 100, className: "vscode-progress", years: 3 },
    { name: "IntelliJ", progress: 100, className: "intellij-progress", years: 2 },
    { name: "Unix", progress: 50, className: "unix-progress", years: 1 },
    { name: "Jira", progress: 50, className: "jira-progress", years: 1 },
    { name: "Microsoft Office", progress: 50, className: "microsoftoffice-progress", years: 4 },
    { name: "Jupyter Notebooks", progress: 100, className: "jupyter-progress", years: 1 },
    { name: "Vite", progress: 100, className: "vite-progress", years: 1 },
    {}
  ]);

  return (
    <div>
      <h2>Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
