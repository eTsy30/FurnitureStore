'use client'
import React from 'react'
import styles from './style.module.css'
import Navbar from '../Navbar/Navbar'
import logo from '@/assets/Logo.png'
import Image from 'next/image'
import { montserrat } from '@/assets/fonts'
import heart from '@/assets/heart.svg'
import search from '@/assets/search.svg'
import shopping from '@/assets/shopping.svg'
import account from '@/assets/account.svg'
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} width={50} height={32} alt="Picture of the author" />

        <h3 className={`${montserrat.className} ${styles.textLogo}`}>
          Furniro
        </h3>
      </div>
      <div>
        <Navbar />
      </div>
      <div className={styles.iconGroup}>
        <Image
          src={account}
          width={28}
          height={28}
          alt="Picture of the author"
        />

        <Image src={heart} width={28} height={28} alt="Picture of the author" />
        <Image
          src={search}
          width={28}
          height={28}
          alt="Picture of the author"
        />
        <Image
          src={shopping}
          width={28}
          height={28}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
