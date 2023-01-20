import React from 'react'
import './Home.css'
import Product from './Product'
import ProductFour from './ProductFour'
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss'
function Home() {

  return (
    <div className='home'>

        <div className='home__container'>

            <Swiper modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            className='product-slider'
            >
            <SwiperSlide>
              <div >
              <img className='home__image'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Heropanti2/3000x1200_Hero-Tall_NP._CB637454814_.jpg" 
              alt="Join Prime Now" 
              />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
              <img className='home__image'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_Hero_2022/2x_Xbiz_march22_pc._CB627753471_.jpg" 
              alt="Join Prime Now" 
              />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
              <img className='home__image'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Monitors/Fest/June/D43539063_IN_OP_Back_to_school_Apr22_3000x1200._CB634480593_.jpg" 
              alt="Join Prime Now" 
              />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
              <img className='home__image'
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/JayeshbhaiJordaar/3000x1200_Hero-Tall_NP._CB634520229_.jpg" 
              alt="Join Prime Now" 
              />
              </div>
              </SwiperSlide>
            </Swiper>

            <div className='home__row'>
            <ProductFour />
            <ProductFour />
              <Product />
              <ProductFour />
               {/* Product */}
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>

            <div className='home__row2'>
            <ProductFour />
            <ProductFour />
            <ProductFour />
            <ProductFour />
                {/* Product */}
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>

            <div className='home_row'>
            </div>


        </div>
       
    </div>
  )
}

export default Home
