
import { useEffect, useState } from "react";
import oneImg from '../media/1.png';
import twoImg from '../media/2.png';
import threeImg from '../media/3.png';
import fourImg from '../media/4.png';
import fiveImg from '../media/5.png';
import sixImg from '../media/6.png';
import sevenImg from '../media/7.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';

// Components

import ItemImg from "../components/itemImg.js";
import ItemDesc from "../components/itemDesc.js";

export const Home = ({ isModalUp, setIsModalUp }) => {

    // constants

    const clothes = [
        { id: 1, name: 'Rebuke You Shirt', price: '$20', description: 'It is a soft shirt', sizes: ['S', 'M', 'L'], status: 'available', img: [oneImg, twoImg, threeImg] },
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
    const [itemSelected, setItemSelected] = useState({ id: 0, name: '', price: '', description: '', sizes: [], status: '', img: [] });

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
                        <img src={item.img[0]} onClick={() => { 
                            setIsLeftOpen(true); 
                            setItemSelected(item);
                            setIsRightOpen(true);
                            }} />
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


    const leftPanel = () => {
        return (
            <div>
                hello
                <button onClick={() => setIsLeftOpen(false)}>Close</button>
                <ItemImg itemSelected={itemSelected}/>
            </div>
        )
    }

    const rightPanel = () => {
        return (
            <div>
                hello
                <button onClick={() => { setIsRightOpen(false) }}>close</button>
                <ItemDesc itemSelected={itemSelected}/>
            </div>
        )
    }


    return (
        <main className="main">
            <div className="container">

                <button onClick={() => setIsLeftOpen(true)}>Open Left Panel</button>
                <button onClick={() => setIsRightOpen(true)}>Open Right Panel</button>

                <div className={`side-panel left ${isLeftOpen ? "open" : ""}`}>
                    {leftPanel()}
                </div>

                <div className={`side-panel right ${isRightOpen ? "open" : ""}`}>
                    {rightPanel()}
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