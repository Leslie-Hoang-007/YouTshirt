import waveLogo from '../media/waveLogo.png';

export const Navbar = () => {

    return (
        <div className="navbar" >
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <id className="nav-logo">
                        <img className="logo" src={waveLogo}/>
                    </id>


                    {/* Navigation Links */}
                    <ul>
                        <li>
                            Logo
                        </li>
                        <li>
                            Clothing
                        </li>
                        <li>
                            Accessories
                        </li>
                        <li>
                            Shoppmoing Bag
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};