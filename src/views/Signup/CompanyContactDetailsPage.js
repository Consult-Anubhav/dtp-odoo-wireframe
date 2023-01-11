import React from "react";
import { useNavigate } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';

const CompanyContactDetailsPage = () => {

    const navigate = useNavigate();

    function OpenDivLink()
    {
        navigate('/signup/requestsent'); //Seller and Logistics 
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
                                Company Address Details
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center h-100 w-100">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row mb-3 mx-auto" style={{maxWidth: '600px'}}>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Contact Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">My Post ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Email ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Matrix ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Fax ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100 mx-auto text-center my-5" onClick={() => OpenDivLink()}
                                    style={{minWidth: '240px', maxWidth: '240px', height: '50px', backgroundColor: 'white', borderRadius: '12px', padding: '12px 16px'}}>
                                    Request for Approval
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

export default CompanyContactDetailsPage;