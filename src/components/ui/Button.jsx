import React from "react";
import styles from "./Button.module.css"; // Import styles

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={`btn ${styles.variant} ${styles.size} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
