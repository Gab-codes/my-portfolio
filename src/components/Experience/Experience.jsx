import React, { useEffect, useRef } from 'react';
import styles from "./Experience.module.css";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../../utils";
import { motion, useInView, useAnimation } from "framer-motion";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillsControls = useAnimation();
  const historyControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      skillsControls.start("visible");
      historyControls.start("visible");
    }
  }, [isInView]);

  return (
    <section ref={ref} className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <motion.div
              key={id}
              className={styles.skill}
              initial={{ opacity: 0, y: -75 }}
              animate={skillsControls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: id * 0.1 }}
            >
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </motion.div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <motion.li
              key={id}
              className={styles.historyItem}
              initial={{ opacity: 0, x: -75 }}
              animate={historyControls}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: id * 0.1 }}
            >
              <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
