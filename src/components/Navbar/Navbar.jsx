import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Spin as Hamburger } from 'hamburger-react';

export const Navbar = ({ isDark, setIsDark }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0); 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 


    const shouldShowMenu = windowWidth <= 830;

  
    const hamburgerColor = isDark ? 'var(--color-dark-mode-hamburger)' : 'var(--color-light-mode-hamburger)';

    const handleToggle = () => {
        setIsDark(!isDark);
    };

    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>

                <div className={styles.menu}>
            {shouldShowMenu && (
                    <Hamburger
                        color={hamburgerColor}
                        size={40}
                        direction="right"
                        duration={0.4}
                        alt="menu-button"
                        onToggle={() => setMenuOpen(!menuOpen)}
                        className={styles.menuBtn}
                        rounded
                        easing="ease-in"
                    />
                   )}
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            <div className={styles.toggleContainer}>
                <img
                    className={styles.toggleBtn}
                    src={isDark ? getImageUrl("theme/lightMode.png") : getImageUrl("theme/darkMode.png")}
                    onClick={handleToggle}
                    alt="theme logo"
                />
            </div>
        </nav>
    );
};
