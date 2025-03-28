import * as React from "react";
import { useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { ToastAction } from "../ui/Toast";
import { useToast } from "../ui/use-toast";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "../ui/Textarea";
import styles from "./ContactForm.module.css";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    subject: z.string().min(2).max(50),
    body: z.string().min(2),
});

const ContactForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", subject: "", body: "" },
    });

    const formRef = useRef(null);
    const { toast } = useToast();

    async function onSubmit(values) {
        try {
            const response = await fetch("https://formsubmit.co/zack.cornfield02@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast({
                    title: "Email sent successfully!",
                    description: "I'll be reaching out to you soon, thanks!",
                });
                form.reset();
            } else {
                throw new Error("Failed to send email");
            }
        } catch (error) {
            toast({
                title: "Error sending your email",
                description: `Something went wrong. Contact me at zack.cornfield02@gmail.com. Error: ${error.message}`,
                variant: "destructive",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        }
    }

    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (index) => ({
            y: 0,
            opacity: 1,
            transition: { delay: index * 0.1, duration: 0.8, type: "spring", stiffness: 120, damping: 12 },
        }),
    };

    return (
        <motion.section
            className={styles["contact-form"]}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
        >
            <form onSubmit={form.handleSubmit(onSubmit)} className={styles["form-container"]} ref={formRef}>
                {["name", "email", "subject", "body"].map((fieldName, index) => (
                    <Controller
                        key={fieldName}
                        control={form.control}
                        name={fieldName}
                        render={({ field }) => (
                            <div className={styles["form-item"]}>
                                <label className={styles["form-label"]}>
                                    {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                                    <span className={styles["required"]}>*</span>
                                </label>
                                {fieldName === "body" ? (
                                    <Textarea {...field} className={styles["form-input"]} placeholder="Write your message here" />
                                ) : (
                                    <Input {...field} className={styles["form-input"]} placeholder={`Enter your ${fieldName}`} />
                                )}
                            </div>
                        )}
                    />
                ))}
                <Button type="submit" size="lg" className={styles["submit-button"]}>
                    SEND EMAIL <i className={`${styles["fa-regular"]} ${styles["fa-paper-plane"]} ${styles["ml-4"]}`}></i>
                </Button>
            </form>

            <div className={styles["contact-info"]}>
                <div className={styles["info-section"]}>
                    <h1 className={styles["info-title"]}>FURTHER ENQUIRIES</h1>
                    <a href="mailto:zack.cornfield02@gmail.com">zack.cornfield02@gmail.com</a>
                </div>
                <div className={styles["info-section"]}>
                    <h1 className={styles["info-title"]}>SOCIALS</h1>
                    <a href="https://www.linkedin.com/in/zack-cornfield-9a2902236" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://github.com/ZackCornfield" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactForm;
