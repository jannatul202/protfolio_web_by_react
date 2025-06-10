import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
// import required modules
import { Pagination } from 'swiper/modules';
import { reviews } from '../../utils/reviews';

import { IoStar } from "react-icons/io5";

import '../../App.css'
import SectionHeading from '../../components/SectionHeading';

const Reviews = () => {
  return (
    <section className='bg-light-blue'>
      <div className='section-container '>
        {/* headding */}
        <SectionHeading title="Client Reviews" 
        subtitle="What my clients say about my work and collaboration" />
        {/* review slider */}
        <div className='py-10'>
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination , Navigation]}
          className="mySwiper"
        >
        {
          reviews.map((review , index)=>(
            <SwiperSlide 
              key={index}
              className=' bg-no-repeat bg-cover rounded-lg mt-5'>
              <div className='mb-20 h-full flex justify-center items-center'>
                <div className='bg-white px-3 py-8 rounded-lg'>
                  <div className='flex flex-row'>
                    <div className=''>
                      <img src={review.image} alt="reviewer image"  
                      className='ring-2 ring-primary
                      rounded-full mb-5'/>
                    </div>
                    <div className='ml-4 -mt-3'>
                      <h2 className='capitalize font-bold text-xl mb-1'>{review.name}</h2>
                      <h3 className='capitalize mb-2 text-primary'>Varified Customer</h3>
                      <div className='flex text-amber-300 text-[15px]'> 
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </div>
                    </div>
                  </div>

                  <p className='text-gray-600 mt-2'>{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Reviews