import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return <section id="hero" className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Gabriel </h1>
        <p className={styles.description}> I'm a front-end developer. Reach out if you'd like to learn more</p>
        <a href="/myCv.pdf" className={styles.contactBtn} download="Gabriel_CV.pdf" >Download CV</a>
    </div>
    <img src={getImageUrl("hero/heroImage1.JPG")} alt="Hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
