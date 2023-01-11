import React from "react";

const Header = () => {
    return (
        <header className="container" style={{padding: '45px'}}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div style={{ borderRadius: '50%', height: '100px', width: '100px', height: '100px'}}>
                        <img src="images/Placeholder Circle.png" width={'100%'} height={'100%'} />
                    </div>
                    <div style={{fontFamily: 'Poppins', fontSize: '26px', marginLeft: '32px'}}>LOGO</div>

                    <div style={{ marginLeft: '80px', width: '240px'}}>
                        <select class="form-select" aria-label="Default select example" style={{border: '1px solid #AFB1B6'}}>
                            <option selected>Language</option>
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