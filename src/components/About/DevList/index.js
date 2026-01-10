import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Git/Github", progress: 100, className: "git-progress", years: 3 },
    { name: "VSCode", progress: 100, className: "vscode-progress", years: 3 },
    { name: "Microsoft Office", progress: 75, className: "microsoftoffice-progress", years: 3 },
    { name: "IntelliJ", progress: 50, className: "intellij-progress", years: 2 },
    { name: "Unix", progress: 25, className: "unix-progress", years: 1 },
    { name: "Jira", progress: 25, className: "jira-progress", years: 1 },
    { name: "Jupyter Notebooks", progress: 25, className: "jupyter-progress", years: 1 },
    { name: "Vite", progress: 25, className: "vite-progress", years: 1 },
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
