import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "DevDoc AI",
    description:
      "Full-stack RAG platform that indexes GitHub repos into a vector store via a 5-stage pipeline (clone → chunk → embed → retrieve → generate) using LangChain and sentence-transformer embeddings. Supports 3 indexing modes, multi-provider LLM routing across Groq, Gemini, and HuggingFace with automatic fallback. Designed 10+ REST API endpoints with safety limits — deployed on Render + Vercel with GitHub + Google OAuth.",
    image: "/devdoc-ai.png",
    liveUrl: "https://dev-doc-ai-eosin.vercel.app/",
    repoUrl: "https://github.com/jayyx3/DevDoc-AI",
    techStack: ["Python", "LangChain", "RAG", "FastAPI", "Next.js", "HuggingFace", "Vector Search", "OAuth"],
  },
  {
    name: "Virtual Cosmos",
    description:
      "Realtime multiplayer 2D world using React, TypeScript, PixiJS, and Socket.IO — supports live avatar movement for concurrent users with WASD controls and proximity-based connect/disconnect logic. Implemented WebRTC peer-to-peer voice and video calls triggered by proximity radius, managed via Zustand. Backend built with Node.js, Express, MongoDB Atlas, JWT auth, and a full admin control system with mute, kick, profanity filtering, and rate limiting.",
    image: "/virtual-cosmos.png",
    liveUrl: "https://tutedude-assignment-client.vercel.app/",
    repoUrl: "https://github.com/jayyx3/Virtual_Cosmos",
    techStack: ["React", "TypeScript", "PixiJS", "Socket.IO", "WebRTC", "Zustand", "Node.js", "MongoDB"],
  },
  {
    name: "Neurica",
    description:
      "Full-stack medical appointment platform with 3 role-based React dashboards (Patient, Doctor, Admin) backed by a Node.js + Express + MongoDB API. Supports slot booking, appointment management, and real-time availability toggling. Integrated Razorpay payment gateway, Cloudinary image uploads, JWT authentication with bcrypt, and SMTP email notifications — deployed on Vercel with 20+ REST API routes.",
    image: "/neurica.png",
    liveUrl: "https://neurica-client.vercel.app/",
    repoUrl: "https://github.com/jayyx3/Neurica",
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Razorpay", "Cloudinary", "REST API"],
  },
  {
    name: "FinTrack API",
    description:
      "RESTful finance records API in Node.js + TypeScript with full CRUD, date/category/type filtering, pagination, and dashboard analytics endpoints covering summary totals and weekly/monthly trend breakdowns. Implemented JWT authentication with a 3-tier RBAC system (Admin, Analyst, Viewer) enforced via centralized permission middleware. Validated all inputs via Zod, wrote Vitest test suite for RBAC logic, and documented all 15+ endpoints via Swagger UI.",
    image: "/fintrack-api.png",
    liveUrl: "https://zorvyn-assessment-vqho.onrender.com/",
    repoUrl: "https://github.com/jayyx3/FinTrack_API",
    techStack: ["Node.js", "TypeScript", "Express", "Prisma ORM", "SQLite", "JWT", "RBAC", "Zod", "Vitest", "Swagger UI"],
  },
  {
    name: "Swing Reversion Bot",
    description:
      "Ranked #1 globally on Freelancer.com ($1,000 USD) — a Python mean-reversion grid strategy using 50-period SMA, multi-level grid entries at fixed percentage steps (-2%, -4%, -6% below SMA), mean-reversion exits, and a 15% stop-loss. Analyzed PnL, Sharpe Ratio, and drawdown metrics to evaluate risk-adjusted performance across multiple market scenarios.",
    image: "/swing-reversion-bot.png",
    liveUrl: "https://www.freelancer.com/contest/trading-strategy-contest-build-the-most-profitable-bot-2649140",
    repoUrl: "https://github.com/jayyx3/Swing_Reversion_Submission",
    techStack: ["Python", "Pandas", "NumPy", "Algorithmic Trading", "Backtesting", "#1 Global Winner"],
  },
  {
    name: "Rythm AI",
    description:
      "16-class cardiac arrhythmia classifier on UCI dataset (452 patients, 279 features) — evaluated 7 algorithms, best model Kernelized SVM with PCA achieved 80.21% accuracy on test data. Applied PCA for dimensionality reduction and SMOTE oversampling to handle severe class imbalance across 12 arrhythmia types. Ran full EDA + preprocessing pipeline covering missing value imputation, feature scaling, and class distribution analysis.",
    image: "/rythm-ai.png",
    liveUrl: "https://github.com/jayyx3/Rythm_AI",
    repoUrl: "https://github.com/jayyx3/Rythm_AI",
    techStack: ["Python", "Scikit-Learn", "PCA", "SMOTE", "EDA", "Jupyter", "Machine Learning"],
  },
  {
    name: "FundMap",
    description:
      "Analyzed 3,036 Indian startup funding deals (2015–2020) — built a full data cleaning pipeline in Python handling missing values via sector-median imputation, city/sector name standardization, and Indian comma-format currency conversion. Wrote 6 SQL analysis queries surfacing that E-Commerce and Consumer Internet captured 35.6% of total tracked funding ($48.34B). Built a 5-page interactive Power BI dashboard covering sector trends, city concentration, investor activity, and funding stage breakdown.",
    image: "/fundmap.png",
    liveUrl: "https://github.com/jayyx3/FundMap",
    repoUrl: "https://github.com/jayyx3/FundMap",
    techStack: ["Python", "Pandas", "Seaborn", "Matplotlib", "MySQL", "SQL", "Power BI"],
  },
  {
    name: "Stock Flow",
    description:
      "Normalized 6-table MySQL schema covering 101 warehouses and 1,000+ orders — built a Python ETL pipeline using Pandas and SQLAlchemy to automate bulk data loading from 6 raw CSV sources. Wrote SQL analysis scripts using JOINs, aggregations, and stored procedures to query inventory levels, stock movements, and order fulfillment patterns. Identified reorder triggers and fulfillment gaps — improved reorder decision-making speed by 40%.",
    image: "/stock-flow.png",
    liveUrl: "https://github.com/jayyx3/StockFLow",
    repoUrl: "https://github.com/jayyx3/StockFLow",
    techStack: ["MySQL", "Python", "Pandas", "SQLAlchemy", "ETL", "SQL"],
  },
  {
    name: "CafeCompass",
    description:
      "10-question SQL analytics framework for a real market expansion decision — analyzed sales, footfall, and rent data across 6 Indian cities using RANK() and PARTITION BY window functions. Computed 5 business KPIs including MoM revenue growth, rent-to-revenue ratio, and average customer LTV. Delivered data-backed expansion recommendations for Pune (highest revenue), Delhi (7.7M coffee consumers), and Jaipur (lowest rent per customer at INR 156).",
    image: "/cafe-compass.png",
    liveUrl: "https://github.com/jayyx3/CafeCompass",
    repoUrl: "https://github.com/jayyx3/CafeCompass",
    techStack: ["MySQL", "SQL", "Window Functions", "Business Analytics", "KPI Design"],
  },
  {
    name: "Fraud Detection Using AutoEncoder and Neural Network",
    description:
      "A Streamlit app detecting credit card fraud using an Autoencoder for anomaly detection and a Graph Neural Network (GNN) for relational transaction patterns — with a live transaction analysis dashboard showing reconstruction error and GNN classification side by side.",
    image: "/fraud-detection.png",
    liveUrl: "https://fruad-detection-using-autoencoder-and-neural-network-jjkl2kk4c.streamlit.app/",
    repoUrl: "https://github.com/jayyx3/Fruad-Detection-Using-AutoEncoder-and-Neural-Network",
    techStack: ["Python", "Machine Learning", "Autoencoder", "GNN", "Streamlit"],
  },
  {
    name: "Error Creator Reimagine 1",
    description:
      "Round 1 submission for the Reimagine Hackathon by Sheryians (Bhopal, June 2024) — led Team 'Error Creator' to reimagine a responsive product UI with a stress-testing interface blending resilience with high-end aesthetics, delivered under contest deadline.",
    image: "/error-creator-1.png",
    liveUrl: "https://error-creator-reimagine-hackathon-r.vercel.app/",
    repoUrl: "https://github.com/jayyx3/error_creator_reimagine_hackathon_round_1",
    techStack: ["JavaScript", "Hackathon", "Responsive Design"],
  },
  {
    name: "Error Creator Reimagine 2",
    description:
      "Round 2 submission for the Reimagine Hackathon by Sheryians — elevated the UI/UX further with a configurable dashboard for error scenarios, pixel-perfect design, and advanced debugging controls.",
    image: "/error-creator-2.png",
    liveUrl: "https://error-creator-reimagine-hackathon-r-dun.vercel.app/",
    repoUrl: "https://github.com/jayyx3/error_creator_reimagine_hackathon_round_2",
    techStack: ["JavaScript", "Hackathon", "Responsive Design"],
  },
  {
    name: "Portfolio",
    description:
      "Personal portfolio built with React and TypeScript — dark/light mode, animated sections, and a fully responsive layout showcasing AI, full-stack, and data projects.",
    image: "/portfolio-mern.png",
    liveUrl: "https://jay-portfolio-ten-tawny.vercel.app/",
    repoUrl: "https://github.com/jayyx3/portfolio",
    techStack: ["React", "TypeScript", "MERN Stack", "Vercel"],
  },
  {
    name: "Viz Experts Assessment",
    description:
      "A production-grade resumable file upload system handling 1GB+ files on unstable networks — chunk-based upload with hash verification, chunk status tracking, and ETL preview. Built with React, Node.js, and MySQL.",
    image: "/vizexperts.png",
    liveUrl: "https://viz-experts-assessment-submission-frontend-g3wcgqd3c.vercel.app/",
    repoUrl: "https://github.com/jayyx3/VizExperts-assessment-submission",
    techStack: ["React.js", "Node.js", "MySQL", "SQL", "Chunked Upload"],
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
