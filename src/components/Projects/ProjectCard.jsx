import React, { useEffect, useRef } from 'react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { motion, useAnimation, useInView } from "framer-motion";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      cardControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={styles.container}
      initial={{ opacity: 0, x: -75 }}
      animate={cardControls}
      variants={{
        hidden: { opacity: 0, x: 75},
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} target='_blank' className={styles.link}>Demo</a>
        <a href={source} target='_blank' className={styles.link}>Source</a>
      </div>
    </motion.div>
  );
};
