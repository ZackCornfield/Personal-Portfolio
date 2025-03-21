import React from "react";
import styles from "./Textarea.module.css"; // Import the CSS module

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`${styles.textarea} ${className}`} // Apply the CSS module styles and additional className
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
