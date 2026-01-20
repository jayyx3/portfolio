import { useContext } from "react";
import SectionHeading from "../section-heading/SectionHeading";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import { CircleIcon, ExternalLinkIcon } from "../../assets/icons/icons"; // Placeholder, will use CSS for bullets

interface ExperienceProps {}

const experienceData = [
  {
    company: "CRICKBUG PRIVATE LTD",
    role: "FullStack Developer",
    duration: "June 2025 – July 2025",
    location: "Remote",
    achievements: [
      "Developed and deployed 6+ full-stack features using React, Node.js, Express, and MongoDB improving overall app performance by 28% through optimized API design and state management.",
      "Built 3 reusable UI components and integrated 5 REST APIs, reducing frontend development time by 35% and improving code reusability.",
      "Implemented user authentication (JWT + bcrypt) and reduced login response time from 450ms to 180ms by optimizing backend routes and database queries.",
      "Improved overall website performance by 35% by optimizing frontend components, reducing unnecessary re-renders, and cleaning unused code for faster load times.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Software Developer",
    duration: "June 2023 – Present",
    location: "Remote",
    achievements: [
      "Designed and deployed responsive, full-stack web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, delivering scalable and SEO-optimized solutions for clients across multiple domains.",
      "Built and integrated RESTful APIs, authentication systems (JWT), and optimized database queries, improving overall application performance by 30–40% and reducing server response time.",
      "Debugged and optimized C++ and Java codebases, fixing logical errors, memory leaks, and performance bottlenecks, resulting in faster execution, improved stability, and cleaner architecture.",
      "Assisted clients in DSA-based problem solving, algorithm optimization, and refactoring legacy C++/Java projects to meet industry-standard coding practices.",
      "Developed machine learning projects using Python, NumPy, Pandas, Scikit-learn, and TensorFlow, including classification, prediction, and data-driven automation solutions.",
      "Implemented data preprocessing, feature engineering, model training, and evaluation, improving model accuracy by 20–30% through hyperparameter tuning and algorithm selection.",
      "Delivered end-to-end solutions by combining ML models with web interfaces, enabling real-time predictions and interactive dashboards for client applications.",
      "Collaborated closely with clients to analyze requirements, propose technical solutions, and deliver projects on time, maintaining strong client retention and repeat work.",
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
