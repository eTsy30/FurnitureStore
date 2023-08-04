import React from 'react'
import styles from './styles.module.scss'
import { ButtonsFull } from '../Buttons/ButtonsFull'
import { SliderRoomSection } from './SliderRoomSection/SliderRoomSection'
export const RoomSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <ButtonsFull text="Explore More" />
      </div>
      <div className={styles.cliderContainer}>
        <SliderRoomSection />
      </div>
    </section>
  )
}
