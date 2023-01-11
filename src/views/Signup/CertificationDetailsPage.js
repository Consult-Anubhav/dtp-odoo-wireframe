import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';

const CertificationDetailsPage = ({dataurl, type = "1"}) => {

    const [certificateTypes, setCertificateTypes] = useState(['']);
    const [identificationTypes, setIdentificationTypes] = useState(['']);

    const navigate = useNavigate();

    useEffect(() => {
        getDropDownItems();
      }, []);

    function getDropDownItems() {
        fetch(dataurl)
          .then(res => res.json())
          .then(data => {
            setCertificateTypes(data.certificate_types)
            setIdentificationTypes(data.identification_types);
        })
    }

    function OpenDivLink()
    {
        if (type == "3")
            navigate('/signup/supplier/company'); //Seller
        else if (type == "4")
            navigate('/signup/logistics/company'); //Logistics
        else
            navigate('submitted'); //
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
                                Certification Details
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center h-100 w-100">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Certificate Type</label>
                                                <div class="col-sm-8">
                                                    <select className="form-select" defaultValue="" 
                                                        style={{ border: '1px solid #AFB1B6', marginLeft: '10px', backgroundColor: 'inherit'}}>
                                                        <option value="">Certificate Type</option>
                                                        
                                                        {certificateTypes && certificateTypes.length > 0 && certificateTypes.map
                                                            (i => 
                                                                (<option key={i.value} value={i.value}>{i.label}</option>)
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Upload Certificate</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Identification Type</label>
                                                <div class="col-sm-8">
                                                    <select className="form-select" defaultValue="" 
                                                        style={{ border: '1px solid #AFB1B6', marginLeft: '10px', backgroundColor: 'inherit'}}>
                                                        <option value="">Identification Type</option>
                                                        
                                                        {identificationTypes && identificationTypes.length > 0 && identificationTypes.map
                                                            (i => 
                                                                (<option key={i.value} value={i.value}>{i.label}</option>)
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Upload Identification</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Company CIN Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Trademark Certificate</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Business PAN</label>
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

export default CertificationDetailsPage;