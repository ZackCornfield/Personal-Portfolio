import React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import styles from "./Toast.module.css"; // Import the CSS module

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Viewport
      ref={ref}
      className={`${styles["toast-viewport"]} ${className}`}
      {...props}
    />
  )
);
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClass = variant === "destructive" ? styles["destructive"] : styles["default"];
    return (
      <ToastPrimitives.Root
        ref={ref}
        className={`${styles["toast"]} ${variantClass} ${className}`}
        {...props}
      />
    );
  }
);
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Action
      ref={ref}
      className={`${styles["toast-action"]} ${className}`}
      {...props}
    />
  )
);
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Close
      ref={ref}
      className={`${styles["toast-close"]} ${className}`}
      {...props}
    >
      <X className={styles["toast-close-icon"]} />
    </ToastPrimitives.Close>
  )
);
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Title
      ref={ref}
      className={`${styles["toast-title"]} ${className}`}
      {...props}
    />
  )
);
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Description
      ref={ref}
      className={`${styles["toast-description"]} ${className}`}
      {...props}
    />
  )
);
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
