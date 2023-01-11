import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header, { Footer } from '../Partials/Theme';

const CompanyDetailsPage = ({dataurl, type}) => {

    const [companyTypes, setCompanyTypes] = useState(['']);
    const [domainTypes, setDomainTypes] = useState(['']);

    const navigate = useNavigate();

    useEffect(() => {
        getDropDownItems();
      }, []);

    function getDropDownItems() {
        fetch(dataurl)
          .then(res => res.json())
          .then(data => {
            setCompanyTypes(data.company_types)
            setDomainTypes(data.domain_types);
        })
    }

    function OpenDivLink()
    {
        if (type == "3")
            navigate('/signup/supplier/company/address'); //Seller
        else if (type == "4")
            navigate('/signup/logistics/company/address'); //Logistics
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
                                Company Details
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
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Company Type</label>
                                                <div class="col-sm-8">
                                                    <select className="form-select" defaultValue="" 
                                                        style={{ border: '1px solid #AFB1B6', marginLeft: '10px', backgroundColor: 'inherit'}}>
                                                        <option value="">Company Type</option>
                                                        
                                                        {companyTypes && companyTypes.length > 0 && companyTypes.map
                                                            (i => 
                                                                (<option key={i.value} value={i.value}>{i.label}</option>)
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Domain Type</label>
                                                <div class="col-sm-8">
                                                    <select className="form-select" defaultValue="" 
                                                        style={{ border: '1px solid #AFB1B6', marginLeft: '10px', backgroundColor: 'inherit'}}>
                                                        <option value="">Domain Type</option>
                                                        
                                                        {domainTypes && domainTypes.length > 0 && domainTypes.map
                                                            (i => 
                                                                (<option key={i.value} value={i.value}>{i.label}</option>)
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Date of Registration</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Revenue</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Employee Strength</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Tax ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="staticEmail" placeholder="Abc Abc" 
                                                    style={{ border: '1px solid #AFB1B6',marginLeft: '10px', backgroundColor: 'inherit'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group row py-2">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Company Website</label>
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

export default CompanyDetailsPage;