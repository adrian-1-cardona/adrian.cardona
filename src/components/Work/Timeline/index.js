import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([

    {
      date: 'July 2025-Present',
      title: 'Foundation of California Community Colleges',
      description: [
        '<b>Collaborated</b> with <b>6 interns</b> to <b>deliver 10+</b> data charts from the Chancellor’s Office <b>database</b> by extracting institutional charts and metrics in <b>Microsoft Excel</b>. <b>Revealing</b> student demographic and enrollment trends.',
        '<b>Resolved</b> <b>20+ Jira</b> tickets by prioritizing intake, clarifying requirements, to improve on time completion of tasks ',
      ],
      expanded: false,
    },
    {
      date: 'February-April 2025',
      title: 'Outamation (via Extern)',
      description: [
        '<b>Built</b> a Retrievel Augumented Generation <b>(RAG)</b> pipeline in <b>Python</b> to answer queries from users regarding uploaded mortgage and lease documents. Incorparted <b>Ollama</b> models and <b>Gemini API</b> to automate the retrievel process.<b>Reducing</b> the need for manual document lookup.',
        '<b>Improved</b> accruracy by 30% on mortage documents queries, by <b>tuning</b> the chunk size and embedding parameters to <b>reduce</b> latency',

      ],
      expanded: false,
    },
    {
      date: 'August 2023-June 2025',
      title: 'Toberman Neighborhood Center',
      description: [
        '<b>Improved</b> math proficiency among middle and high school students. By tutoring <b>10 students</b> each week. <b>Delivering</b> individualized instruction, targeted practice, and step-by-step skill remediation',
        '<b>Increased</b> students access to financial aid. By supporting over <b>10+</b> students in successfully submitting FAFSA applications. <b>Providing</b> assistance in step-by-step application guidance and preparing documents.',
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
