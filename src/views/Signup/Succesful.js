import React from "react";
import { useNavigate } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';

const Succesful = () => {

    const navigate = useNavigate();

    function OpenDivLink()
    {
        navigate('/');
    }

    return (
        <div>

        <Header />
        
        <div style={{ backgroundColor: '#EEEEEE'}}>
            <div className="container">
                <div className="row" style={{minHeight: 'calc(100vh - 380px)'}}>
                    <div className="col-12">
                            <div className="d-flex justify-content-center align-items-center h-100 w-100">
                                <div className="text-center w-100 py-5" style={{fontSize: '32px'}}>
                                    Your data has been submitted<br /> successfully.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center h-100 w-100">
                            <div>
                                <div className="w-100 mx-auto text-center my-5"  onClick={() => OpenDivLink()}
                                    style={{minWidth: '240px', maxWidth: '240px', height: '50px', backgroundColor: 'white', borderRadius: '12px', padding: '12px 16px'}}>
                                    Login here
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

export default Succesful;