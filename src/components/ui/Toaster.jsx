import React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import styles from "./Toast.module.css"; // Import the CSS module

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props} className={styles.toast}>
            <div className={styles.toastContent}>
              {title && <ToastTitle className={styles.toastTitle}>{title}</ToastTitle>}
              {description && (
                <ToastDescription className={styles.toastDescription}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className={styles.toastClose} />
          </Toast>
        );
      })}
      <ToastViewport className={styles.toastViewport} />
    </ToastProvider>
  );
}
