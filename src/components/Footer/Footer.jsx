import React from 'react';
import styles from "./Footer.module.css";
import {getImageUrl} from "../../utils";

export const Footer = () => {
  return (
    <footer id='footer' className={styles.container}>
        <p>&copy; 2024 Temidayo Gabriel. 
        All right reserved
        </p>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/temidayo-gabriel-3217a6276">linkedin.com/temidayo-gabriel</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://github.com/Gab-codes">github.com/temidayo-gabriel</a>
            </li>
        </ul>
    </footer>
  )
}
