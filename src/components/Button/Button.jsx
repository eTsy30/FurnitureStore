'use client'
import React from 'react'
import styles from './styles.module.scss'
export const Button = ({ className, text, click }) => {
  return (
    <button
      onClick={click}
      className={className ? className : styles.ListcardButton}
    >
      {text}
    </button>
  )
}
