import React from "react";
import { NavLink } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';

const RolePage = () => {

    return (
        <div>

        <Header />
        
        <div style={{ backgroundColor: '#EEEEEE'}}>
            <div className="container">
                <div className="row" style={{minHeight: 'calc(100vh - 380px)'}}>
                    <div className="col-12">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div>
                                <div className="text-center mb-3" style={{fontSize: '32px'}}>
                                    What will be your role<br />on the platform?
                                    </div>
                                <div>
                                    <NavLink to="/signup/buyer" className="d-inline-block p-3 text-decoration-none text-dark">
                                        <img src="/images/Placeholder Square.png" width={'155px'} height={'155px'} />
                                        <div className="text-center" style={{fontSize: '26px'}}>Buyer</div>
                                    </NavLink>
                                    <NavLink to="/signup/supplier" className="d-inline-block p-3 text-decoration-none text-dark">
                                        <img src="/images/Placeholder Square.png" width={'155px'} height={'155px'} />
                                        <div className="text-center" style={{fontSize: '26px'}}>Supplier</div>
                                    </NavLink>
                                    <NavLink to="/signup/logistics" className="d-inline-block p-3 text-decoration-none text-dark">
                                        <img src="/images/Placeholder Square.png" width={'155px'} height={'155px'} />
                                        <div className="text-center" style={{fontSize: '26px'}}>Logistics</div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
  
        </div>
    );
}

export default RolePage;