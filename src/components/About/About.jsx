import React, { useEffect, useRef } from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faMusic, faFutbol, faPlane, faBook, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView, useAnimation } from "framer-motion";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const aboutControls = useAnimation();
  const hobbiesControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      aboutControls.start("visible");
      hobbiesControls.start("visible");
    }
  }, [isInView]);

  return (
    <section ref={ref} className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      
      <div className={styles.content}>
        <motion.img 
          src={getImageUrl("about/aboutImage.png")} 
          className={styles.aboutImage} 
          alt="Me sitting with a laptop"
          initial={{ opacity: 0, x: -75 }}
          animate={aboutControls}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <ul className={styles.aboutItems} >
          <motion.li 
            initial={{ opacity: 0, x: -75 }}
            animate={aboutControls}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Hi, I'm Temidayo Gabriel, a passionate frontend web developer aspiring to become a full stack developer.
                My expertise lies in HTML, CSS, JavaScript, and various frontend frameworks.
                I specialize in crafting visually stunning, user-friendly, and responsive websites.
                With a commitment to delivering exceptional user experiences through creativity, clean code, and best practices.
                <br /> I am always eager to learn and adapt, striving to be better than yesterday. Let's collaborate and bring your vision to life!
              </p>
            </div>
          </motion.li>
          <motion.div 
            initial={{ opacity: 0, y: 75 }}
            animate={hobbiesControls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3>My Hobbies</h3>
            <ul className={styles.hobbies}>
              <li className={styles.hobby}><FontAwesomeIcon icon={faGamepad} /> Gaming</li>
              <li className={styles.hobby}><FontAwesomeIcon icon={faMusic} /> Music</li>
              <li className={styles.hobby}><FontAwesomeIcon icon={faFutbol} /> Sport</li>
              <li className={styles.hobby}><FontAwesomeIcon icon={faPlane} /> Travel</li>
              <li className={styles.hobby}><FontAwesomeIcon icon={faBook} /> Reading</li>
              <li className={styles.hobby}><FontAwesomeIcon icon={faCode} /> Coding</li>
            </ul>
          </motion.div>
        </ul>
      </div>
    </section>
  );
}
