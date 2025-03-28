import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
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

  const imageVariants = {
    hidden: { 
      scale: 0.7, 
      opacity: 0,
      y: 50 
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <section className={styles["hero-section"]} id="home">
      {/* Hero Text */}
      <div className={styles["hero-text-container"]}>
        <motion.h1
          className={styles["hero-heading"]}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Recent Graduate
        </motion.h1>
        <motion.p
          className={styles["hero-subheading"]}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Computer Science | Software Development | Web Development | Games Development
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles["cta-buttons"]}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <a
            href="https://www.linkedin.com/in/zack-cornfield-9a2902236"
            target="_blank"
            className={styles["cta-button"]}
          >
            <i className={`${styles["fa-brands"]} ${styles["fa-linkedin"]} ${styles["mr-1"]}`}></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/ZackCornfield"
            target="_blank"
            className={styles["cta-button"]}
          >
            <i className={`${styles["fa-brands"]} ${styles["fa-square-github"]} ${styles["mr-1"]}`}></i>
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Picture */}
      <div className={styles["hero-image-container"]}>
        <motion.img
          src="/assets/profile-icon.png"
          alt="My picture"
          className={styles["hero-image"]}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </section>
  );
};

export { HeroSection };