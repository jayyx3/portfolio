import { useContext } from "react";
import SectionHeading from "../section-heading/SectionHeading";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "../../assets/icons/icons"; // Placeholder, will use CSS for bullets

interface ExperienceProps {}

const experienceData = [
  {
    company: "CRICKBUG PRIVATE LTD",
    role: "FullStack Developer",
    duration: "June 2025 – July 2025",
    location: "Remote",
    achievements: [
      "Built user authentication system using JWT + bcrypt, optimized backend routes and database queries to cut login response time from 450ms to 180ms, and integrated role-based access control across protected routes.",
      "Developed and shipped core platform features — including admin dashboard, match-scoring module, and 3 reusable UI components — using React, Node.js, Express, and MongoDB, reducing API response time by 28% through optimized state management and query design.",
      "Integrated 5 REST APIs on the frontend, reducing frontend development time by 35% through modular component architecture — deployed production-ready features to live environment with clean separation of concerns across client and server.",
      ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Software Developer",
    duration: "June 2023 – Present",
    location: "Remote",
    achievements: [
      "Ranked #1 globally in a Freelancer algorithmic trading strategy contest — engineered a Python mean-reversion grid strategy using 50-period SMA, multi-level grid entries at fixed percentage steps, and a 15% stop-loss, winning $1,000 USD.",
      "Built a Python emotion-to-speech service using j-hartmann/emotion-english-distilroberta-base HuggingFace transformer — classified emotions from text and mapped them to TTS voice parameters to generate modulated WAV audio, deployed via Flask with a CLI interface.",
      "Delivered full-stack web solutions using React, Node.js, Express, and MongoDB — built RESTful APIs, JWT authentication systems, and optimized database queries, cutting response times by 30–40% across client projects.",
      "Built and backtested algorithmic trading strategies in Python — analyzed PnL, Sharpe Ratio, and drawdown metrics using Pandas and NumPy to evaluate risk-adjusted performance across multiple market scenarios.",
      "Developed and delivered ML pipelines for global clients — applied feature engineering, PCA, SMOTE oversampling, and hyperparameter tuning using Scikit-Learn, improving model accuracy by 20–30%.",
      "Debugged and optimized C++ and Java codebases for international clients — resolved memory leaks, logical errors, and performance bottlenecks, improving execution speed and code stability while refactoring legacy projects to industry-standard practices.",
      "Curated and standardized 150+ AI/ML datasets from Kaggle, HuggingFace, and academic sources — delivered structured CSV outputs with metadata schemas using Pandas and SQLAlchemy ready for downstream analytics and ML pipelines.",
      "Built data analysis pipelines using SQL (joins, aggregations, window functions), Power BI, and MySQL — delivered KPI dashboards, business reports, and actionable insights for finance and data research clients.",
      "Maintained a 4.8★ rating, 13+ verified reviews, and 100% job success rate — consistently delivering production-ready Python, AI, and full-stack solutions to international clients across finance, ML, and web domains.",
    ],
    freelancerUrl: "https://www.freelancer.com/u/jayyx03",
  },
  {
    company: "ARC Robotics & Paryavaran Shakti (IIIT Kota)",
    role: "Video Editing Lead",
    duration: "August 2023 – Present",
    location: "Kota, Rajasthan",
    achievements: [
      "Led the media and post-production teams for major college events, overseeing video editing, motion graphics, and visual storytelling for technical and cultural festivals.",
      "Produced 20+ high-quality promotional videos and event highlights using Adobe Premiere Pro, After Effects, and DaVinci Resolve, increasing social media engagement by 40%.",
      "Mentored junior members in video editing techniques, color grading, and sound design, fostering a creative and efficient workflow within the clubs.",
      "Collaborated with design and marketing teams to create cohesive visual branding for club activities, workshops, and awareness campaigns."
    ]
  },
];

const Experience: React.FunctionComponent<ExperienceProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.isDarkmode ? "experienceContainerDark" : "experienceContainer"
      }
    >
      <div className="experienceWrapper">
        <SectionHeading sectionName="Experience" />
        <div className="experienceList">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={
                theme.isDarkmode ? "experienceCardDark" : "experienceCard"
              }
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="expSidebar">
                <div className="expDate">{exp.duration}</div>
                <div className="expLoc">{exp.location}</div>
              </div>
              
              <div className="expContent">
                <h3 className="expRole">{exp.role}</h3>
                <h4 className="expCompany">{exp.company}</h4>
                
                <ul className="expBullets">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>
                      <span className="bulletPoint">▹</span>
                      <span>
                        {item.split(' ').map((word, wIndex) => {
                           // Highlight numbers and percentages
                           if (/^\d+(\+|%|\.)?$/.test(word.replace(/[.,]/g, '')) || /^\d+%$/.test(word)) {
                             return <span key={wIndex} className="highlightNum">{word} </span>
                           }
                           return word + ' ';
                        })}
                      </span>
                    </li>
                  ))}
                </ul>

                {(exp as any).freelancerUrl && (
                  <div className="freelanceCta">
                    <span className="ctaText">Have any projects?</span>
                    <a
                      href={(exp as any).freelancerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="freelanceLink"
                    >
                      Contact me here <ExternalLinkIcon />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
