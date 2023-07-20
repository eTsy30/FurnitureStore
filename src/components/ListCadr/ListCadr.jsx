import React, { Children } from 'react'
import { Card } from '../Card/Card'
import styles from './style.module.scss'
export const ListCadr = ({ children }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55, 66]
  return (
    <div className={styles.containerCard}>
      {array.map((imdex) => (
        <Card key={imdex} />
      ))}
      {children}
    </div>
  )
}
