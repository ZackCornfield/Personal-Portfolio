import styles from "./DottedBackground.module.css"; // Import the CSS file

export function DottedBackground() {
  return (
    <div className={styles["dotted-background"]}>
      {/* Radial gradient for the container to give a faded look */}
      <div className={styles["radial-gradient-overlay"]}></div>
    </div>
  );
}
