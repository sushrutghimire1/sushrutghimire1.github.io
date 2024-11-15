import React from 'react';
import './EducationalDetails.css';

const EducationalDetails = () => {
  const educationDetails = [
    {
      institution: "Friedrich Alexander University",
      program: "MSc Data Science",
      timeline: "Oct 2024 – Present",
      specialization: [
        "Artificial Intelligence",
        "Machine Learning",
        "Pattern Recognition",
        "Deep Learning",
        "Discrete Optimization",
      ],
      link: "https://www.fau.eu/studiengang/data-science-msc/",
    },
    {
      institution: "Vellore Institute of Technology",
      program: "BE in Computer Science and Engineering",
      timeline: "2017 – 2021",
      grade: "Equivalent Grade: 2.1",
      specialization: [
        "Data Structures",
        "Algorithms",
        "Programming",
        "Digital Logic",
        "Web Development",
        "Computer Architecture",
      ],
      link: "https://vit.ac.in/schools/school-of-computer-science-and-engineering",
    },
    {
      institution: "Central Board of Secondary Education",
      program: "Intermediate",
      timeline: "2017",
      grade: "Equivalent Grade: 1.8",
      link: "https://www.cbse.gov.in/cbsenew/cbse.html",
    },
  ];

  return (
    <div className="educational-details-container">
      <h2>Educational Background</h2>
      <div className="education-grid">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                {edu.institution}
              </a>
            </h3>
            <p className="program">{edu.program}</p>
            <p className="timeline">{edu.timeline}</p>
            {edu.grade && <p className="grade">{edu.grade}</p>}
            {edu.specialization && (
              <ul className="specialization">
                {edu.specialization.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalDetails;
