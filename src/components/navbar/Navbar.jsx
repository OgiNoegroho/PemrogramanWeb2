"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./navbar.module.css";

const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/accomplishment", label: "Accomplishment" },
  { path: "/gallery", label: "Gallery" },
  { path: "/portfolio", label: "Portfolio" },
 
];

const Navbar = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className={styles.navbar}>
      <ul className={`${styles.navbarContent} flex justify-center space-x-8 py-4`}>
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.path}>
              {/* <a> tag removed, styles applied to <Link> component */}
              <span className={`${styles.link} ${segment === route.path.slice(1) || (route.path === "/" && segment === null) ? styles.active : ""}`}>
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
