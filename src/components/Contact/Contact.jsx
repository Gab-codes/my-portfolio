import React from 'react'
import styles from "./Contact.module.css";

export const Contact = () => {
  return <section id='contact' className={styles.container}>
     <h2 className={styles.title}> Contact</h2>

     <form action="https://formspree.io/f/mzzpbzrg"  method='post' enctype="multipart/form-data">
        <div className={styles.formGroup}>
            <label htmlFor="name" hidden> Name </label>
            <input type="text" name='name' id='name' placeholder='Name'  required/>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email" hidden> Email </label>
            <input type="email" name='email' id='email' placeholder='Email'  required/>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="message" hidden> Message </label>
            <textarea name='message' id='message' placeholder="Message" required></textarea>
        </div>
        <input type="submit" className={styles.btn} value="Submit" />
     </form>
  </section>
}
