import React, { useEffect, useRef } from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { motion, useInView, useAnimation } from "framer-motion";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])

  return <section 
  ref={ref}  id="hero" className={styles.container}>
    <motion.div 
    variants={{
      hidden: {opacity: 0, y: -75},
      visible: {opacity: 1, y:0}
    }}
    initial = "hidden"
    animate = {mainControls}
    transition={{duration: 0.5, ease: "easeIn"}}
    className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Gabriel </h1>
        <p className={styles.description}> I'm a front-end developer. Reach out if you'd like to learn more</p>
        <a href="/myCv.pdf" className={styles.contactBtn} download="Gabriel_CV.pdf" >Download CV</a>
    </motion.div>
    <img  src={getImageUrl("hero/heroImage1.JPG")} alt="Hero image of me" className={styles.heroImg} /> 
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
