import { Button } from "../ui/Button";
import { SkillButton } from "../SkillButton";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./ProjectSection.module.css"; 

const Project = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={styles["project-container"]}
    >
      {children}
    </motion.div>
  );
};

export default Project;

export const ProjectSection = () => {
  return (
    <section className={styles["projects-section"]} id="projects">
      <div className={styles["heading-container"]}>
        <h1 className={styles["section-title"]}>Projects</h1>
        <p className={styles["section-description"]}>
          Check out some of the projects I've been working on recently.
        </p>
      </div>

      <div className={styles["projects-container"]}>
        <Project>
          <img
            src="/assets/img/cv-architect.webp"
            alt="CV Architect"
            className={styles["project-image"]}
          />
          <div className={styles["project-details"]}>
            <h3 className={styles["project-title"]}>CV Architect</h3>
            <p className={styles["project-description"]}>
              A resume builder application designed to help users create
              professional-looking CVs with ease.
            </p>
            <div className={styles["skills-container"]}>
              <SkillButton>React</SkillButton>
              <SkillButton>TypeScript</SkillButton>
              <SkillButton>Tailwind</SkillButton>
              <SkillButton>ShadCN</SkillButton>
              <SkillButton>Zod</SkillButton>
            </div>
            <div className={styles["project-links"]}>
              <Button className={styles["github-btn"]}>
                <a href="https://github.com/christianrazul/cv-architect" target="_blank">
                  GitHub Repo
                </a>
              </Button>
              <Button className={styles["demo-btn"]}>
                <a href="https://cv-architect.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </Project>

        {/* Repeat for other projects as needed */}
        
      </div>
    </section>
  );
};
