
import { useEffect, useState } from "react";
import oneImg from '../media/1.png';
import twoImg from '../media/2.png';
import threeImg from '../media/3.png';
import fourImg from '../media/4.png';
import fiveImg from '../media/5.png';
import sixImg from '../media/6.png';
import sevenImg from '../media/7.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, EffectFade, Keyboard, Zoom } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';


export const Home = ({ isModalUp, setIsModalUp }) => {
    
    // constants
    
    const clothes = [
        { id: 1, name: 'Rebuke You Shirt', price: '$20', description: 'It is a soft shirt', sizes: ['S', 'M', 'L'], status: 'available', img: [oneImg, twoImg] },
        { id: 2, name: 'Jesus is King Sweater', price: '$30', description: 'It is a shirt2', sizes: ['S', 'M', 'L'], status: 'available', img: [twoImg, twoImg] },
        { id: 3, name: 'He is Risen Hoodie', price: '$40', description: 'It is a soft shirt3', sizes: ['S', 'M', 'L'], status: 'available', img: [threeImg, twoImg] },
        { id: 4, name: 'Cross Necklace', price: '$50', description: 'It is a soft shirt4', sizes: ['S'], status: 'available', img: [fourImg, twoImg] },
        { id: 5, name: 'Walk By Faith Tote', price: '$60', description: 'It is a soft shirt5', sizes: ['S'], status: 'available', img: [fiveImg, twoImg] },
        { id: 6, name: 'Jogn 3:16 Slippers', price: '$70', description: 'It is a soft shirt6', sizes: ['S'], status: 'available', img: [sixImg, twoImg] },
        { id: 7, name: 'Faith over Feat Hat', price: '$21', description: 'It is a soft shirt7', sizes: ['S'], status: 'available', img: [sevenImg, twoImg] },
    ]
    
    // for context
    const [colunmSize, setColumnSize] = useState([3, 5]);
    const [colunmIndex, setColumnIndex] = useState(0);
    const [isMobile, setIsmobile] = useState(false);

    // for Modals
    const [isLeftOpen, setIsLeftOpen] = useState(false);
    const [isRightOpen, setIsRightOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    
    useEffect(() => {
        // checks if mobile and changes colunm sizes available
        if (isMobile) {
            setColumnSize([3, 2, 1]);
            setColumnIndex(0);
        } else {
            setColumnSize([5, 3]);
            setColumnIndex(0);
        }

        setItemSelected(clothes[0])
    }, [isMobile]);

    const cycleColumns = () => {
        setColumnIndex((prev) => (prev + 1) % colunmSize.length);
    };



    // Changes Array of Apparel Data into smaller chunks based on the number of colunms
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    // Renders chunkArray
    const renderClothesRow = () => {
        return chunkArray(clothes, colunmSize[colunmIndex]
        ).map((row) => (
            <tr>
                {row.map((item) => (
                    <td>
                        <img src={item.img[0]} onClick={()=>{setIsLeftOpen(true); setItemSelected(item)}}/>
                        <p>
                            {item.name}
                        </p>
                        <p>
                            {item.price}
                        </p>
                    </td>
                ))}
            </tr>
        ));
        
        
    };
    
    const swiperImages = () => {
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
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={oneImg} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={twoImg} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={threeImg} />
                    </div>
                </SwiperSlide>
            </Swiper>
        );
    }


    
    const leftPannel = () => {
        return (
            <div>
                hello
                <button onClick={() => setIsLeftOpen(false)}>Close</button>
                {swiperImages()}
                {itemSelected.name}
            </div>
        )
    }

   
    return (
        <main className="main">
            <div className="container">

                <button onClick={() => setIsLeftOpen(true)}>Open Left Panel</button>
                <button onClick={() => setIsRightOpen(true)}>Open Right Panel</button>

                <div className={`side-panel left ${isLeftOpen ? "open" : ""}`}>
                    {leftPannel()}
                </div>

                <div className={`side-panel right ${isRightOpen ? "open" : ""}`}>
                    
                </div>
                <h1>Modal Test</h1>

                {/* toggle Shevron */}
                <div>{isModalUp ? 'yes' : 'no'}</div>
                {isModalUp && <p>This only shows when ON</p>}
                {!isModalUp && <p>This only shows when OFF</p>}
                <button onClick={() => setIsModalUp(!isModalUp)}>
                    Toggle + and 'shev'
                </button>
                {/* toggle Colunms */}
                <button onClick={cycleColumns}>
                    Toggle Colunm
                </button>
                {/* toggle Mobile */}
                <button onClick={() => setIsmobile(!isMobile)}>
                    {isMobile ? 'Mobile' : 'Not Mobile'}
                </button>


                <table className="container">
                    <tbody>
                        {renderClothesRow()}
                    </tbody>
                </table>
            </div>
        </main>
    );
};