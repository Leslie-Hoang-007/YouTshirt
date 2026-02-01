
import { useEffect, useState } from "react";
import oneImg from '../media/1.png';
import twoImg from '../media/2.png';
import threeImg from '../media/3.png';
import fourImg from '../media/4.png';
import fiveImg from '../media/5.png';
import sixImg from '../media/6.png';
import sevenImg from '../media/7.png';
export const Home = ({ isModalUp, setIsModalUp }) => {

    const clothes = [
        { id: 1, name: 'Rebuke You Shirt', price: '$20', description: 'It is a soft shirt', sizes: ['S', 'M', 'L'], status: 'available', img: [oneImg, twoImg] },
        { id: 2, name: 'Jesus is King Sweater', price: '$30', description: 'It is a shirt2', sizes: ['S', 'M', 'L'], status: 'available', img: [twoImg, twoImg] },
        { id: 3, name: 'He is Risen Hoodie', price: '$40', description: 'It is a soft shirt3', sizes: ['S', 'M', 'L'], status: 'available', img: [threeImg, twoImg] },
        { id: 4, name: 'Cross Necklace', price: '$50', description: 'It is a soft shirt4', sizes: ['S'], status: 'available', img: [fourImg, twoImg] },
        { id: 5, name: 'Walk By Faith Tote', price: '$60', description: 'It is a soft shirt5', sizes: ['S'], status: 'available', img: [fiveImg, twoImg] },
        { id: 6, name: 'Jogn 3:16 Slippers', price: '$70', description: 'It is a soft shirt6', sizes: ['S'], status: 'available', img: [sixImg, twoImg] },
        { id: 7, name: 'Faith over Feat Hat', price: '$21', description: 'It is a soft shirt7', sizes: ['S'], status: 'available', img: [sevenImg, twoImg] },
    ]

    // constants
    const [colunmSize, setColumnSize] = useState([1, 3, 5]);
    const [colunmIndex, setColumnIndex] = useState(0);
    const [isMobile, setIsmobile] = useState(false);


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
        const output = chunkArray(clothes, colunmSize[colunmIndex]
        ).map((row) => (
            <tr>
                {row.map((item) => (
                    <td>
                        <img src={item.img[0]} />
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

        return (
            <div>{output}</div>
        );
    };

    useEffect(() => {
        // checks if mobile and changes colunm sizes available
        if(isMobile){
            setColumnSize([1,2,3]);
            setColumnIndex(0);
        } else{
            setColumnSize([3,5]);
            setColumnIndex(0);
        }
    },[isMobile]);

    const cycleColumns = () => {
        setColumnIndex((prev) => (prev + 1) % colunmSize.length);
    };
    
    return (
        <main className="main">
            <div className="container">

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