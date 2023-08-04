'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './stule.module.scss'
const Footer = () => {
  const [emailValue, setemailValue] = useState()
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <h2>Funiro.</h2>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className={styles.rightColumn}>
          <p className={`${styles.cell1} ${styles.title}`}>Links</p>
          <Link href="/" className={styles.cell2}>
            Home
          </Link>
          <Link href="/shop" className={styles.cell3}>
            Shop
          </Link>
          <Link href="/about" className={styles.cell4}>
            About
          </Link>
          <Link href="/contact" className={styles.cell5}>
            Contact
          </Link>

          <p className={`${styles.cell6} ${styles.title}`}>Help</p>
          <Link href="https://www.google.by/" className={styles.cell7}>
            Payment Options
          </Link>
          <Link href="https://www.google.by/" className={styles.cell8}>
            Returns
          </Link>
          <Link href="https://www.google.by/" className={styles.cell9}>
            Payment Options
          </Link>

          <p className={`${styles.cell10} ${styles.title}`}>Newsletter</p>
          <div className={styles.cell11}>
            <input
              type="text"
              onChange={(e) => setemailValue(e.target.value)}
              value={emailValue}
              placeholder="Enter Your Email Address"
            />
            <button onClick={() => alert(`send email to  ${emailValue}`)}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <p>{currentYear} furino. All rights reverved</p>
    </footer>
  )
}

export default Footer
