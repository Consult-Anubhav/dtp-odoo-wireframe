import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="container" style={{padding: '45px'}}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <NavLink to="/" className="text-black">
                        <div className="d-inline-block" style={{ borderRadius: '50%', width: '100px', height: '100px'}}>
                            <img src="/images/Placeholder Circle.png" width={'100%'} height={'100%'} alt="logo"/>
                        </div>
                        <div className="d-inline-block" style={{fontFamily: 'Poppins', fontSize: '26px', marginLeft: '32px'}}>LOGO</div>
                    </NavLink>

                    <div style={{ marginLeft: '80px', width: '240px'}}>
                        <select className="form-select" defaultValue="" style={{border: '1px solid #AFB1B6'}}>
                            <option value="">Language</option>
                        </select>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </header>
    );
}
const Footer = () => {
    return (
        <footer style={{height: '190px'}}>
        </footer>
    );
}

export default Header;
export { Footer };