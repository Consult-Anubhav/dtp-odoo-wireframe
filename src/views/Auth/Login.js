import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';
// import { AppContext } from "../../controllers/AppContext";

const Login = () => {

    // const app_context = useContext(AppContext);

    return (
        <div>

        <Header />
        {/* <AppContext.Consumer> */}
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
                                    <div className="mb-3">{app_context => <h1>{app_context}</h1>}
                                        <label className="form-label" style={{color: '#AFB1B6', fontSize: '14px'}}>Email</label>
                                        <input type="email" className="form-control" id="formEmail" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: '#AFB1B6', fontSize: '14px'}}>Password</label>
                                        <input type="password" className="form-control" id="formPassword" />
                                    </div>
                                    <button type="button" className="btn btn-light" style={{fontSize: '14px'}}>Sign In</button>
                                    <span style={{border: '1px solid #AFB1B6', margin: '0 10px'}}></span>
                                    <NavLink to="/signup">
                                        <button type="button" className="btn btn-light" style={{fontSize: '14px'}}>Create Account</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* </AppContext.Consumer> */}

        <Footer />
  
        </div>
    );
}

export default Login;