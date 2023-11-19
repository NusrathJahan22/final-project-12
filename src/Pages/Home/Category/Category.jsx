import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SecionTitle from '../../../Components/SectionTitle/SecionTitle';



const Category = () => {
    return (
        <>
            <section>
                <SecionTitle subHeading={"From 11.00am to 9.00pm"}
                    heading={"ORDER NOW"}></SecionTitle>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={slide1} alt="" /><h2 className='text-3xl text-white mr-5 text-center uppercase -mt-20'>salads</h2></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /> <h2 className='text-3xl text-white mr-5 text-center uppercase -mt-20'>pizza</h2></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="" /><h2 className='text-3xl text-white mr-5 text-center uppercase -mt-20'>soups</h2></SwiperSlide>
                    <SwiperSlide><img src={slide4} alt="" /><h2 className='text-3xl text-white mr-5 text-center uppercase -mt-20'>dessert</h2></SwiperSlide>
                    <SwiperSlide><img src={slide5} alt="" /><h2 className='text-3xl text-white mr-5 text-center uppercase -mt-20'>salads</h2></SwiperSlide>


                </Swiper>
            </section>
        </>
    );
};

export default Category;