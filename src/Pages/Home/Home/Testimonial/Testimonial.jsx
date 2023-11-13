import SecionTitle from "../../../../Components/SectionTitle/SecionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SecionTitle subHeading={'what our client say'} heading={'Testimonials'}> </SecionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id} review={review}><div className=" text-center m-24 ">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="">{review.details}</p>
                        <p className="text-yellow-500 text-center text-3xl">{review.name}</p>
                    </div></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;