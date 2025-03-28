import ContactForm from "@/components/ContactPage/ContactForm";
import { motion } from "framer-motion";
import styles from "./ContactPage.module.css";  

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactForm />
    </>
  );
};

export default ContactPage;

const ContactHeroSection = () => {
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8
      },
    },
  };

  return (
    <section className={styles["hero-section"]}>
      <motion.h1
        className={styles["hero-text"]}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        CONTACT PAGE.
      </motion.h1>
    </section>
  );
};