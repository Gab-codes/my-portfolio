import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { motion, useInView, useAnimation } from "framer-motion";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      id="hero"
      className={styles.container}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gabriel</h1>
        <p className={styles.description}>
          I'm a front-end developer. Reach out if you'd like to learn more
        </p>
        <a
          href="https://temidayo-gabriel-portfolio-2.vercel.app/"
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </motion.section>
  );
};
