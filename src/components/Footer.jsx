import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css"; // Import external CSS

export const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-container"]}>
                {/* Navigation */}
                <div className={styles["footer-section"]}>
                    <h2 className={styles["footer-title"]}>NAVIGATION</h2>
                    <div className={styles["separator"]}></div>
                    <ul className={styles["footer-list"]}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#about">About</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#projects">Projects</HashLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div className={styles["footer-section"]}>
                    <h2 className={styles["footer-title"]}>SOCIALS</h2>
                    <div className={styles["separator"]}></div>
                    <ul className={styles["footer-list"]}>
                        <li>
                            <a href="www.linkedin.com/in/zack-cornfield-9a2902236" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/ZackCornfield" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
            <h1 className={styles["footer-copyright"]}>© 2025 ZACK CORNFIELD</h1>
        </footer>
    );
};
