import React from 'react'
import { Card } from '../Card/Card'
import styles from './style.module.scss'
import { Button } from '../Button/Button'
export const ListCadr = ({ children, text, click }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 55, 66]

  return (
    <>
      <div className={styles.containerCard}>
        {array.map((index) => (
          <Card key={index} />
        ))}
      </div>
      <Button text={'fdvfdvf'} />
    </>
  )
}
