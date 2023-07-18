'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './style.module.css'
import Image from 'next/image'
//
export const CategirySlider = ({ data }) => {
  console.log(data, 'fff')
  return (
    <section>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data ? (
          data.map((item) => (
            <SwiperSlide key={item._id}>
              <Image
                alt="some"
                src={item.img}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
              <p className={styles.label}>{item.title}</p>
              <p>{item.desc}</p>
            </SwiperSlide>
          ))
        ) : (
          <h1>HHHHHHHHHHH</h1>
        )}
      </Swiper>
    </section>
  )
}
