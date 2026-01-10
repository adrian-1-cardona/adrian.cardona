import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "JavaScript", progress: 100, className: "javascript-progress", years: 3.5 },
    { name: "Python", progress: 75, className: "python-progress", years: 3 },
    { name: "Java", progress: 25, className: "java-progress", years: 1 },
    { name: "HTML/CSS", progress: 75, className: "web-progress", years: 3 },
    { name: "C", progress: 25, className: "c-progress", years: 1 },
    { name: "C++", progress: 50, className: "cpp-progress", years: 2 },
    { name: "TypeScript", progress: 50, className: "typescript-progress", years: 1.5},
    { name: "SQL", progress: 25, className: "sql-progress", years: 1 },

  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
