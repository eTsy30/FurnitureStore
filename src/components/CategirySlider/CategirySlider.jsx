'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './style.module.css'
import Image from 'next/image'
const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/category', {
      cache: 'force-cache',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch topics')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}
export const CategirySlider = async () => {
  const data = await getTopics()
  return (
    <section>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item._id}>
              <Image
                alt="some"
                src="https://publications-us-en.ikea.com/76561/1312782/pages/aa27a43e-1864-4731-9bfc-706d55854fbd-at1600.jpg"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
              <p className={styles.label}>{item.title}</p>
              <p>{item.desc}</p>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}
