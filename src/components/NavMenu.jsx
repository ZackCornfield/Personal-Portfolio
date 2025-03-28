import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";

const navLinks = [
  { title: "HOME", to: "/" },
  { title: "ABOUT", to: "/#about" },
  { title: "PROJECTS", to: "/#projects" },
  { title: "CONTACT", to: "/contact" },
];

const offsetScroll = (el) => {
  const offset = 35;
  const elementPosition = el.offsetTop;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const menuVariants = {
  initial: { 
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.75, 0.5, 1.25],
      opacity: { duration: 0.2 }
    },
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.75, 0.5, 1.25],
      opacity: { duration: 0.2 }
    },
  },
};

const navLinkContainerVars = {
  initial: { 
    transition: { 
      staggerChildren: 0.09, 
      staggerDirection: -1 
    } 
  },
  open: { 
    transition: { 
      staggerChildren: 0.09, 
      staggerDirection: 1, 
      delayChildren: 0.2 
    } 
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    opacity: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.37, 0, 0.63, 1] 
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: { 
      ease: [0, 0.55, 0.45, 1], 
      duration: 0.7 
    },
  },
};

const NavMenu = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleMenu = () => setOpenNav((prevOpen) => !prevOpen);

  return (
    <div className={`${styles["nav-menu"]} lg-hidden`}>
      <HamburgerButton onClick={toggleMenu} isActive={openNav} />
      <AnimatePresence mode="wait">
        {openNav && (
          <motion.div
            key="menu-overlay"
            className={styles["menu-overlay"]}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ originY: 0 }}
          >
            <div className={styles["menu-content"]}>
              {/* Logo */}
              <motion.div className={styles["menu-header"]}>
                <NavLink to="/" onClick={toggleMenu}>
                  <img
                    src="/assets/portfolio-logo-white.svg"
                    alt="Portfolio Logo"
                    className={styles["logo"]}
                  />
                </NavLink>
              </motion.div>

              {/* Navigation Links */}
              <motion.div
                className={styles["nav-links-container"]}
                variants={navLinkContainerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className={styles["nav-item"]}>
                    <motion.div
                      className={styles["nav-link"]}
                      variants={mobileLinkVars}
                    >
                      <HashLink
                        smooth
                        scroll={offsetScroll}
                        to={link.to}
                        onClick={toggleMenu}
                      >
                        {link.title}
                      </HashLink>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Footer */}
              <div className={styles["menu-footer"]}>
                <div>
                  <h3 className={styles["email-label"]}>EMAIL ADDRESS</h3>
                  <a
                    href="mailto:zack.cornfield02@gmail.com"
                    target="_blank"
                    className={styles["email-link"]}
                  >
                    zack.cornfield02@gmail.com
                  </a>
                </div>
                <ul className={styles["social-links"]}>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/zack-cornfield-9a2902236"
                      target="_blank"
                    >
                      LINKEDIN
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/ZackCornfield"
                      target="_blank"
                    >
                      GITHUB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;