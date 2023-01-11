import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';

const BasicDetailsPage = ({dataurl, type = 1}) => {

    const [countryItems, setCountryItems] = useState(['']);

    const navigate = useNavigate();

    useEffect(() => {
        getCountryItems();
      }, []);

    function getCountryItems() {
        fetch(dataurl)
          .then(res => res.json())
          .then(data => {
            setCountryItems(data.data);
        })
    }

    function OpenDivLink()
    {
        navigate('submitted');
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
                                Basic Details
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center h-100 w-100">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row mb-3">
                                        {type == "1" &&
                                            <div className="col-6">
                                                <div class="form-group row py-2">
                                                    <label for="staticEmail" class="col-sm-3 col-form-label">Firstname</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                            style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {type == "1" &&
                                            <div className="col-6">
                                                <div class="form-group row py-2">
                                                    <label for="staticEmail" class="col-sm-3 col-form-label">Lastname</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                        style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {["2","3"].includes(type, 0) &&
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Fullname</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                        style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label" style={{fontFamily: 'Poppins Bold'}}>Address</label>
                                                <div class="col-sm-9"></div>
                                            </div>
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Line1</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Line2</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <div className="d-flex align-items-center" style={{minHeight: '100px'}}>
                                                    <label for="staticEmail" class="col-sm-3 col-form-label">Display Picture</label>
                                                    <div class="col-sm-9">
                                                        <div className="d-inline-block" style={{ borderRadius: '50%', width: '100px', height: '100px'}}>
                                                            <img src="/images/Placeholder Circle.png" width={'100%'} height={'100%'} alt="logo" 
                                                                style={{marginLeft: '10px'}} />
                                                        </div>
                                                        {/* <input type="text" class="form-control" id="staticEmail" placeholder="Abc" style={{marginLeft: '10px'}} /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">City</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Contact Number</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="0123456789" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">State</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Mobile Number</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="0123456789" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Pin Code</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="012345" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Email ID</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="example@domain.com" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-3 col-form-label">Country</label>
                                                <div class="col-sm-9">
                                                <select className="form-select" defaultValue="" 
                                                    style={{ border: '1px solid #AFB1B6', marginLeft: '10px', backgroundColor: 'inherit'}}>
                                                    <option value="">Country</option>
                                                    
                                                    {countryItems && countryItems.length > 0 && countryItems.map
                                                        (i => 
                                                            (<option key={i.code} value={i.code}>{i.name}</option>)
                                                        )
                                                    }
                                                </select>
                                                </div>
                                            </div>
                                        </div>
                                        {type == "3" &&
                                            <div className="col-6">
                                                <div class="form-group row py-2">
                                                    <label for="staticEmail" class="col-sm-3 col-form-label">Title</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" id="staticEmail" placeholder="Abc" 
                                                        style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="w-100 mx-auto text-center my-5" onClick={() => OpenDivLink()}
                                    style={{minWidth: '240px', maxWidth: '240px', height: '50px', backgroundColor: 'white', borderRadius: '12px', padding: '12px 16px'}}>
                                    Next
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

export default BasicDetailsPage;