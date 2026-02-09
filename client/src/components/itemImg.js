import {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, EffectFade, Keyboard, Zoom } from 'swiper/modules';

export const ItemImg = ({itemSelected}) => {
   
    return (
       <Swiper
                modules={[Pagination, A11y, Navigation, EffectFade, Keyboard, Zoom]}
                pagination={true}
                navigation={true}
                loop={true}
                // effect={'fade'}
                zoom={true}

                keyboard={{
                    enabled: true,
                }}

                style={{
                    '--swiper-navigation-color': 'dark-grey',
                    '--swiper-pagination-color': 'black',
                    '--swiper-pagination-bullet-vertical-gap': '0px',
                    '--swiper-pagination-bottom': '0px'
                    // 'height': '100px'
                }}

                // touch gestures
                simulateTouch={true}
                allowTouchMove={true}

                touchAngle={45}   // only trigger swipe if mostly horizontal
                threshold={10}    // ignore tiny accidental movements
            >

                {/* Maps images in selected item  */}
                {itemSelected.img.map((e)=>(
                    <SwiperSlide>
                        <img src={e}/>
                    </SwiperSlide>
                ))}

            </Swiper>
    );
};

export default ItemImg;