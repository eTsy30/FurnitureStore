import React from 'react'
import styles from './styles.module.scss'
export const ButtonsFull = ({ className, text, click }) => {
  return (
    <button
      onClick={click}
      className={className ? className : styles.buttonsFull}
    >
      {text}
    </button>
  )
}
