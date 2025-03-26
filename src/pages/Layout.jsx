import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/Toaster";
import NavMenu from "@/components/NavMenu";
import styles from "./Layout.module.css"; // Import the CSS module

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <NavMenu />

      <Outlet />
      <Toaster />

      <Footer />
    </div>
  );
};

export default Layout;