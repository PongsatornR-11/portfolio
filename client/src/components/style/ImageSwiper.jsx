import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const ProjectImages = [
    {
        id: 1, Name: 'Ecommerce', image: [
            { src: '/projectPics/ecommerce/Screenshot Ecommerce Project.jpg' },
            { src: '/projectPics/ecommerce/Screenshot Ecommerce Project_2.jpg' },
            { src: '/projectPics/ecommerce/Screenshot Ecommerce Project_3.jpg' }
        ]
    },
    {
        id: 2, Name: 'System Monitor', image: [
            { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project.jpg' },
            { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_2.jpg' },
            { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_3.jpg' },
            { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_4.jpg' },
            { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_5.jpg' },
            { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_6.jpg' },
        ]
    },
    {
        id: 3, Name: 'Camping', image: [
            { src: '/projectPics/camping/Screenshot camping Project.jpg' },
            { src: '/projectPics/camping/Screenshot camping Project_2.jpg' },
            { src: '/projectPics/camping/Screenshot camping Project_3.jpg' },
            { src: '/projectPics/camping/Screenshot camping Project_4.jpg' },
        ]
    }
];

export default function ImageSwiper({ images }) {
    return (
        <div className='-z-10'>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true, }}
                modules={[Pagination, Autoplay, Navigation]} className="mySwiper h-80 object-cover">
                {
                    images?.map((image, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={image.src} alt={`slide ${index + 1}`} className="w-full h-full object-cover" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}