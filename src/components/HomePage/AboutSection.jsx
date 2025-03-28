import React from "react";
import { motion } from "framer-motion";
import { SkillButton } from "../SkillButton";
import styles from "./AboutSection.module.css"; // Import external CSS file

const technicalSkills = [
    "C++",
    "C#",
    "Java",
    "Python",
    "SQL",
    "OpenGL",
    "C",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express",
    "HTML",
    "CSS",
];

const toolsAndTechnologies = [
    "GitHub",
    "Git",
    "Unity",
    "Visual Studio",
];

const AboutSection = () => {
    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 12,
            },
        }),
    };

    return (
        <section className={styles["about-section"]} id="about">
            <motion.h1
                className={styles["about-heading"]}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                A little bit about me
            </motion.h1>
            <div className={styles["about-content-container"]}>
                {/* About me Text */}
                <div className={styles["about-text"]}>
                    <motion.p
                        className={styles["about-paragraph"]}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        Hi! I'm Zack, a recent graduate with a Bachelor of Information Technology, double majoring in Computer
                        Science and Games Technology at Murdoch University. Throughout my academic and personal studies I have
                        come to work in areas such as Game Development (Unity, VR, Custom Game Engines), Web Development (Front
                        and Backend) as well as general software development. My journey in the tech world has been a blend of
                        curiosity and creativity, and I'm always eager to expand my knowledge and skills.
                    </motion.p>
                    <motion.p
                        className={styles["about-paragraph"]}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                    >
                        Currently, I am seeking opportunities to further grow as a developer within a dynamic team that values
                        innovation, creativity, and excellence. I'm excited to contribute to projects that challenge me and help
                        me grow alongside other like-minded professionals in a collaborative environment.
                    </motion.p>
                    <motion.p
                        className={styles["about-paragraph"]}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                    >
                        Outside of work, I enjoy video games and exploring the ever-evolving landscape of technology.
                    </motion.p>
                </div>

                {/* Skills */}
                <div className={styles["skills-container"]}>
                    <motion.div
                        className={styles["skills-section"]}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        <h2 className={styles["skills-heading"]}>
                            <i className={`${styles["fa-solid"]} ${styles["fa-code"]} ${styles["skills-icon"]}`}></i>
                            Technical Skills
                        </h2>
                        <ul className={styles["skills-list"]}>
                            {technicalSkills.map((skill) => (
                                <li key={skill}>
                                    <SkillButton>{skill}</SkillButton>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className={styles["skills-section"]}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                    >
                        <h2 className={styles["skills-heading"]}>
                            <i className={`${styles["fa-solid"]} ${styles["fa-wrench"]} ${styles["skills-icon"]}`}></i>
                            Tools and Technologies
                        </h2>
                        <ul className={styles["skills-list"]}>
                            {toolsAndTechnologies.map((tool) => (
                                <li key={tool}>
                                    <SkillButton>{tool}</SkillButton>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { AboutSection };    
