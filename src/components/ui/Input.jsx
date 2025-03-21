import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(
    ({ className, type = "text", ...props }, ref) => {
        return (
            <input
                type={type}
                className={`${styles.input} ${className || ""}`} // Use styles.input for CSS module
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export { Input };
