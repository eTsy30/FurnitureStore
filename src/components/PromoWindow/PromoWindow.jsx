import React from 'react'
import styles from './style.module.css'
export const PromoWindow = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.promo} ${styles.prmoHide}`} />
      <div className={styles.promo}>
        <p className={styles.colontitul}>New Arrival</p>
        <h1 className={styles.label}>Discover Our New Collection</h1>
        <span className={styles.colontitulDown}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </span>
        <button className={styles.button}>BUY Now</button>
      </div>
    </section>
  )
}
