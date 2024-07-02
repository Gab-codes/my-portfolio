import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import styles from './Contact.module.css';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.section
      id='contact'
      className={styles.container}
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className={styles.title}>Contact</h2>
      <form action="https://formspree.io/f/mzzpbzrg" method='post' enctype="multipart/form-data">
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name='name' id='name' placeholder='Name' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name='email' id='email' placeholder='Email' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>Message</label>
          <textarea name='message' id='message' placeholder="Message" required></textarea>
        </div>
        <input type="submit" className={styles.btn} value="Submit" />
      </form>
    </motion.section>
  );
}
