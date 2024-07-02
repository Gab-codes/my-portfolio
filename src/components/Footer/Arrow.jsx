import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import styles from "./Footer.module.css";

export const Arrow = () => {
  return (
    <FontAwesomeIcon icon={faArrowUp}  className={styles.arrow}/>
  )
}
