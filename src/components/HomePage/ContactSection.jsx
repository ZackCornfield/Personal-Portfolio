import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactSection.module.css"; // Import external CSS file

const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <motion.section
      className={styles["contact-section"]}
      id="contact"
      ref={ref}
      variants={sectionVariants}
      animate={controls}
      initial="hidden"
    >
      <div className={styles["contact-content"]}>
        <h3 className={styles["contact-header"]}>Got a project in mind?</h3>
        <Link to="/contact" className={styles["contact-link"]}>
          GET IN TOUCH
        </Link>
      </div>
    </motion.section>
  );
};

export { ContactSection };
