'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCard from '../movieCard/MovieCard';
import RecommendationCard from '../recommendationCard/RecommendationCard';
import dynamic from 'next/dynamic';
const Recommendations = ({ recommendations }: any) => {
    const recommend = recommendations?.results.slice(0, 10)
    console.log('10 recommend', recommend);

    return (
        <div>
            <hr className='mt-[20px]' />
            <h1 className=' text-center my-[30px] text-[28px] font-bold'>Recommendations</h1>

            <Swiper
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }} // Ensure you set autoplay correctly
                loop={true}
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={{
                    425: { // screens >= 640px
                        slidesPerView: 1,
                    },
                    640: { // screens >= 640px
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: { // screens >= 768px
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: { // screens >= 1024px
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Navigation]}
            >
                {recommend?.map((item: any, index: number) => (
                    <SwiperSlide key={index}> {/* Ensure to add a key prop */}
                        <RecommendationCard movie={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default dynamic(() => Promise.resolve(Recommendations), { ssr: false })
