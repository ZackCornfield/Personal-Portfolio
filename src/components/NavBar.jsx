import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ResumePDF from "/Zack_Cornfield_Resume.pdf";
import styles from "./NavBar.module.css"; // Correct CSS module import

export const NavBar = () => {
  return (
    <header className={styles["navbar"]}>
      <nav className={styles["nav-container"]}>
        <NavLink to="/">
          <h1 className={styles["nav-title"]}>Zack Cornfield</h1>
        </NavLink>
        <ul className={styles["nav-links"]}>
          <li>
            <NavLink to="/">
              <DrawOutlineButton>Home</DrawOutlineButton>
            </NavLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              <DrawOutlineButton>About</DrawOutlineButton>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              <DrawOutlineButton>Projects</DrawOutlineButton>
            </HashLink>
          </li>
          <li>
            <NavLink to="/contact">
              <DrawOutlineButton>Contact</DrawOutlineButton>
            </NavLink>
          </li>
          <li>
            <DrawOutlineButton>
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </DrawOutlineButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles["outline-button"]}>
      <span>{children}</span>
      <span className={styles["border-top"]} />
      <span className={styles["border-right"]} />
      <span className={styles["border-bottom"]} />
      <span className={styles["border-left"]} />
    </button>
  );
};
