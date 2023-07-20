import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import share from '@/assets/share.svg'
import heart from '@/assets/heartWhite.svg'
import compare from '@/assets/compare.svg'
export const Card = () => {
  return (
    <div className={styles.container}>
      <Image
        alt="some"
        src="https://publications-us-en.ikea.com/76561/1524619/pages/eff1df03-b6ef-4d0b-926e-c17b5148b934-at1600.jpg"
        width="0"
        height="0"
        sizes="100vw"
        style={{ display: 'block', width: '100%', height: '301px' }}
      />
      <div className={styles.promo}>-30%</div>
      <div className={styles.description}>
        <h2 className={styles.title}>Syltherine</h2>
        <p className={styles.subTitle}>Stylish cafe chair</p>
        <div className={styles.priceContainer}>
          <h3 className={styles.price}>Rp 2.500.000</h3>
          <strike className={styles.discount}>Rp 3.500.000</strike>
        </div>
      </div>
      <div className={styles.descriptionHover}>
        <div className={styles.descriptionHoverWrapper}>
          <button className={styles.button}>Add to cart</button>
          <div className={styles.descriptionImage}>
            <figure className={styles.labelForImage}>
              <Image
                src={share}
                width={16}
                height={16}
                alt="Picture of the share"
              />
              <figcaption>Share</figcaption>
            </figure>
            <figure className={styles.labelForImage}>
              <Image
                src={compare}
                width={16}
                height={16}
                alt="Picture of the compare"
              />
              <figcaption>Compare</figcaption>
            </figure>
            <figure className={styles.labelForImage}>
              <Image
                src={heart}
                width={16}
                height={16}
                alt="Picture of the heart"
              />
              <figcaption>Like</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
