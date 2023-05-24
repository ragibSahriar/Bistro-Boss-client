import React, { useEffect, useState } from 'react';
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reivews, setReviews] = useState([]);
    const [rating , setRating] = useState([])

    useEffect(()=> {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
       <section className=''>
         <SectionTitle
        subHeading='What Our Client Say'
        heading = 'Testimonials'
        >
        </SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
           reivews.map(review => <SwiperSlide
            key={review._id}>
       <div className='m-24 flex flex-col items-center'>
       <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <p>{review.details}</p>
                <h3 className='text-2xl py-4    text-orange-400'>{review.name}</h3>
       </div>
            </SwiperSlide>)
        }
      </Swiper>
       </section>
    );
};

export default Testimonials;