import React from 'react'
import styles from './style.module.scss'
import { Photo } from '../Temp/Photo'
export const FuniroFurniture = () => {
  return (
    <div className={styles.container}>
      <p>Share your setup with</p>
      <h1>#FuniroFurniture</h1>
      <Photo />
    </div>
  )
}
