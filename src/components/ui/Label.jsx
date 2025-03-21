import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import styles from "./Label.module.css"; // Import the CSS module

const Label = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={`${styles.label} ${className}`} // Combine default class with any additional className passed via props
        {...props}
      />
    );
  }
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
