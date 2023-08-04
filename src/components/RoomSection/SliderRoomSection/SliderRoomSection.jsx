'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './style.scss'
import 'swiper/css/pagination'
import Image from 'next/image'
import { data } from '@/components/CategorySlider/data'
import { Pagination } from 'swiper/modules'
import { FiArrowRight } from 'react-icons/fi'
export const SliderRoomSection = () => {
  const [activeSlide, setactiveSlide] = useState(0)

  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      onSlideChange={(swiper) => setactiveSlide(swiper.realIndex)}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={item.id}>
            <div>
              <Image
                alt="some"
                src={item.image}
                width="373"
                height="486"
                sizes="100vw"
              />

              {activeSlide === item.id - 1 && (
                <div className="slideInfoContainer">
                  <div className="slideInfo">
                    <div className="slideInfo_wrapper">
                      <span>{item.id}</span>
                      <span className="slideInfo_Line"> </span>{' '}
                      <span>{item.label}</span>
                    </div>
                    <h2>Inner Peace</h2>
                  </div>
                  <button className="slideInfoButton">
                    <FiArrowRight />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
