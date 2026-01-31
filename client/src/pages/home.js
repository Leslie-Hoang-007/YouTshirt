
import { useEffect, useState } from "react";
export const Home = ({ isModalUp, setIsModalUp }) => {




    return (
        <main className="main">
            <div className="container">

                <div style={{ padding: 20 }}>
                    <h1>Modal Test</h1>
                    <div>{isModalUp ? 'yes' : 'no'}</div>
                    <button onClick={() => setIsModalUp(!isModalUp)}>
                        Toggle
                    </button>

                    {isModalUp && <p>This only shows when ON</p>}
                    {!isModalUp && <p>This only shows when OFF</p>}

                </div>

            </div>
        </main>
    );
};