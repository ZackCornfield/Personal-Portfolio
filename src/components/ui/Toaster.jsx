import React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/Toast";
import { useToast } from "@/components/ui/use-toast";
import styles from "./Toast.module.css"; // Import the CSS module

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props} className={styles["toast"]}>
            <div className={styles["toast-content"]}>
              {title && <ToastTitle className={styles["toast-title"]}>{title}</ToastTitle>}
              {description && (
                <ToastDescription className={styles["toast-description"]}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className={styles["toast-close"]} />
          </Toast>
        );
      })}
      <ToastViewport className={styles["toast-viewport"]} />
    </ToastProvider>
  );
}