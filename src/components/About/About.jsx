import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faMusic, faFutbol, faPlane, faBook, faCode } from '@fortawesome/free-solid-svg-icons';


export const About = () => {
  return <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            
            <div className={styles.content} >
                 <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage} alt="Me sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            {/* <h3>Frontend Developer</h3> */}
                            <p>
                            Hi, I'm Temidayo Gabriel, a passionate frontend web developer aspiring to become a full stack developer.
                            My expertise lies in HTML, CSS, JavaScript, and various frontend frameworks.
                             I specialize in crafting visually stunning, user-friendly, and responsive websites. 
                             With a commitment to delivering exceptional user experiences through creativity, clean code, and best practices.
                            <br/> I am always eager to learn and adapt, striving to be better than yesterday. Let's collaborate and bring your vision to life!
                           </p>
                        </div>
                    </li>

                        <div>
                          <h3>My Hobbies</h3>
                          <ul className={styles.hobbies}>
                            <li className={styles.hobby}><FontAwesomeIcon icon={faGamepad} /> Gaming</li>
                            <li className={styles.hobby}><FontAwesomeIcon icon={faMusic} /> Music</li>
                            <li className={styles.hobby}><FontAwesomeIcon icon={faFutbol} /> Sport</li>
                            <li className={styles.hobby}><FontAwesomeIcon icon={faPlane} /> Travel</li>
                            <li className={styles.hobby}><FontAwesomeIcon icon={faBook} /> Reading</li>
                            <li className={styles.hobby}><FontAwesomeIcon icon={faCode} /> Coding</li>
                        </ul>
                         </div>
                </ul>     
            </div>
  </section>
}
