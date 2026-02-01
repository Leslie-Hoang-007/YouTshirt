import waveLogo from '../media/waveLogo.png';
import { useState, useEffect } from 'react';

export const Navbar = ({isModalUp, setIsModalUp}) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        checkMobile();
    });

    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    return (
        <div className="navbar" >
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <id className="nav-logo">
                        <img className="logo" src={waveLogo} />
                    </id>

                    <div className='navbar-menu'>
                        {/* Navigation Links */}
                        <ul>
                            <li>
                                <h1>{isModalUp? '+':'-'}</h1>
                            </li>
                            <li>
                                <button onClick = {() => setIsModalUp(!isModalUp)}>Toggle</button>
                            </li>
                            <li>
                                <h1>Account</h1>
                            </li>
                            <li>
                                <h1>Shopping Cart</h1>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};