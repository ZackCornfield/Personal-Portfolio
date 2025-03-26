import ContactForm from "@/components/ContactPage/ContactForm";
import { DottedBackground } from "../components/DottedBackground";
import { motion } from "framer-motion";
import styles from "./ContactPage.module.css";  

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactForm />
      <DottedBackground />
    </>
  );
};

export default ContactPage;

const ContactHeroSection = () => {
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
    <section className={`${styles["relative"]} ${styles["z-10"]} ${styles["flex"]} ${styles["h-full"]} ${styles["w-3/4"]} ${styles["items-center"]} ${styles["justify-center"]} ${styles["gap-16"]}`}>
      <motion.h1
        className={`${styles["text-5xl"]} ${styles["font-bold"]} ${styles["lg:text-8xl"]}`}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        CONTACT PAGE.
      </motion.h1>
    </section>
  );
};