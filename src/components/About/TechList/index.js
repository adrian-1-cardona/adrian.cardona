import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "ReactJS", progress: 100, className: "react-progress", years: 2 },
    { name: "Tailwind CSS", progress: 100, className: "tailwind-progress", years: 2 },
    { name: "NextJS", progress: 75, className: "nextjs-progress", years: 1 },
    { name: "Retrieval Augmented Generation (RAG)", progress: 75, className: "rag-progress", years: 1 },
    { name: "SCSS", progress: 75, className: "scss-progress", years: 1 },
    { name: "Natural Language Processing", progress: 75, className: "nlp-progress", years: 1 },
    { name: "Large Language Models", progress: 75, className: "llm-progress", years: 1},
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}: {`${tech.years} years`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
