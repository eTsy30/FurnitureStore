'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './style.module.scss'
import Image from 'next/image'
//
export const CategorySlider = ({ data }) => {
  return (
    <section className={styles.cocntainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data
          ? data.map((item) => (
              <SwiperSlide key={item._id} className={styles.swiperSlide}>
                <Image
                  alt="some"
                  src={item.img}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                  }}
                />
                <div
                  onClick={() => alert(`go to ${item.title}`)}
                  className={styles.description}
                >
                  <p>{item.desc}</p>
                </div>
                <p className={styles.label}>{item.title}</p>
              </SwiperSlide>
            ))
          : ''}
      </Swiper>
    </section>
  )
}
