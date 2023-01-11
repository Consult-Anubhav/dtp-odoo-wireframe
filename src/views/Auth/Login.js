import React from "react";
import { NavLink } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';
// import { useAppContext } from "../../controllers/AppContext";

const Login = () => {

    // const { app_context } = useAppContext();

    return (
        <div>

        <Header />
        
        <div style={{ backgroundColor: '#EEEEEE'}}>
            <div className="container">
                <div className="row" style={{minHeight: 'calc(100vh - 380px)'}}>
                    <div className="col-7">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div style={{border: '1px solid #AFB1B6', height: '218px', width: '450px'}}>

                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="p-4" style={{backgroundColor: 'white'}}>
                                <div class="mb-3">
                                    <label class="form-label" style={{color: '#AFB1B6', fontSize: '14px'}}>Email</label>
                                    <input type="email" class="form-control" id="formEmail" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style={{color: '#AFB1B6', fontSize: '14px'}}>Password</label>
                                    <input type="password" class="form-control" id="formPassword" />
                                </div>
                                <button type="button" class="btn btn-light" style={{fontSize: '14px'}}>Sign In</button>
                                <span style={{border: '1px solid #AFB1B6', margin: '0 10px'}}></span>
                                <button type="button" class="btn btn-light" style={{fontSize: '14px'}}>
                                    <NavLink to="/signup/role" className="text-decoration-none text-black">
                                        Create Account
                                    </NavLink>
                                </button>
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

export default Login;