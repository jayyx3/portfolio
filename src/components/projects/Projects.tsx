import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Neurica",
    description:
      "A comprehensive full-stack medical appointment management system built with the MERN stack (MongoDB, Express.js, React, Node.js). Neurica enables patients to book appointments with doctors, while providing separate dashboards for administrators and doctors to manage appointments, profiles, and more.",
    image: "/neurica.png",
    liveUrl: "https://neurica-client.vercel.app/",
    repoUrl: "https://github.com/jayyx3/Neurica",
    techStack: ["MERN Stack","JavaScript"],
  },
  {
    name: "Swing Reversion Bot",
    description:
      "A Python-based backtesting system for swing reversion strategies with signal generation, risk controls, and performance analytics for rapid iteration.",
    image: "/swing-reversion-bot.png",
    liveUrl: "https://www.freelancer.com/contest/trading-strategy-contest-build-the-most-profitable-bot-2649140",
    repoUrl: "https://github.com/jayyx3/Swing_Reversion_Submission",
    techStack: ["Data Science", "Backtesting", "Python"],
  },
  {
    name: "Rythm AI",
    description:
      "Rhythm_AI is a comprehensive machine learning project designed to classify cardiac arrhythmias using advanced data preprocessing, exploratory data analysis (EDA), and multiple classification algorithms. The project leverages Principal Component Analysis (PCA) for dimensionality reduction and implements various techniques to handle class imbalance through oversampling methods.",
    image: "/rythm-ai.png",
    liveUrl: "https://github.com/jayyx3/Rythm_AI",
    repoUrl: "https://github.com/jayyx3/Rythm_AI",
    techStack: ["Machine Learning"],
  },
  {
    name: "Stock Flow",
    description:
      "StockFlow is a comprehensive Inventory Management System designed to streamline the tracking of products, orders, and stock levels across multiple warehouses. This project demonstrates an end-to-end data engineering workflow, from database schema design and creation to data migration (ETL) and analysis.",
    image: "/stock-flow.png",
    liveUrl: "https://github.com/jayyx3/StockFLow",
    repoUrl: "https://github.com/jayyx3/StockFLow",
    techStack: ["SQL", "Python"],
  },
  {
    name: "CafeCompass",
    description:
      "The goal of this project is to analyze the sales data of Monday Coffee, a company that has been selling its products online since January 2023, and to recommend the top three major cities in India for opening new coffee shop locations based on consumer demand and sales performance.",
    image: "/cafe-compass.png",
    liveUrl: "https://github.com/jayyx3/CafeCompass",
    repoUrl: "https://github.com/jayyx3/CafeCompass",
    techStack: ["SQL", "Data Modeling"],
  },
  {
    name: "Fraud Detection Using AutoEncoder and Neural Network",
    description:
      "A Streamlit app that detects potential credit card fraud using an Autoencoder for anomaly detection and a Graph Neural Network (GNN) for relational patterns.",
    image: "/fraud-detection.png",
    liveUrl: "https://fruad-detection-using-autoencoder-and-neural-network-jjkl2kk4c.streamlit.app/",
    repoUrl: "https://github.com/jayyx3/Fruad-Detection-Using-AutoEncoder-and-Neural-Network",
    techStack: ["Machine Learning", "Streamlit"],
  },
  {
    name: "Error Creator Reimagine 1",
    description:
      "Submitted by Team 'Error Creator' for Round 1 of the Reimagine Hackathon. This project, focused on Best UI Development, reimagines error visualization with a stress-testing interface that blends resilience with high-end aesthetics.",
    image: "/error-creator-1.png",
    liveUrl: "https://error-creator-reimagine-hackathon-r.vercel.app/",
    repoUrl: "https://github.com/jayyx3/error_creator_reimagine_hackathon_round_1",
    techStack: ["JavaScript"],
  },
  {
    name: "Error Creator Reimagine 2",
    description:
      "The Round 2 submission by Team 'Error Creator' for the Reimagine Hackathon. This iteration elevates the UI/UX further, offering a configurable dashboard for error scenarios with pixel-perfect design and advanced debugging controls.",
    image: "/error-creator-2.png",
    liveUrl: "https://error-creator-reimagine-hackathon-r-dun.vercel.app/",
    repoUrl: "https://github.com/jayyx3/error_creator_reimagine_hackathon_round_2",
    techStack: ["JavaScript"],
  },
  {
    name: "Portfolio",
    description:
      "A personal MERN portfolio showcasing projects, skills, and contact details with responsive design and polished UX.",
    image: "/portfolio-mern.png",
    liveUrl: "#",
    repoUrl: "#",
    techStack: ["MERN Stack", "TypeScript"],
  },
  {
    name: "Viz Experts Assessment",
    description:
      "A robust, resume-able file upload system designed to handle large files (e.g., 1GB+) specifically for unstable networks. Built with React, Node.js, and MySQL.",
    image: "/vizexperts.png",
    liveUrl: "https://viz-experts-assessment-submission-frontend-g3wcgqd3c.vercel.app/",
    repoUrl: "https://github.com/jayyx3/VizExperts-assessment-submission",
    techStack: ["React.js", "Node.js", "SQL"],
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              index={index + 1}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
