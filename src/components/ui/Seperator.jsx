import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import styles from "./Separator.module.css"; // Import the CSS module

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    const orientationClass =
      orientation === "horizontal" ? styles.horizontal : styles.vertical;

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={`${styles.separator} ${orientationClass} ${className}`} // Combine the default styles with orientation-specific styles and any additional className
        {...props}
      />
    );
  }
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
