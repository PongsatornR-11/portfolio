import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ImageSwiper({ images, className, rounded = 'lg' }) {
    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true, }}
            modules={[Pagination, Autoplay, Navigation]}
            className={`${className} ${rounded} mySwiper object-cover`}
        >
            {
                images?.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={image.src} alt={`slide ${index + 1}`} className={`${rounded} w-full h-full object-cover`} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}