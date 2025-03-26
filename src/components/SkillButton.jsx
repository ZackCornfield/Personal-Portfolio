import React from "react";
import styles from "./SkillButton.module.css"; // Import external CSS

const SkillButton = ({ children }) => {
  return <button className={styles["skill-button"]}>{children}</button>;
};

export { SkillButton };
