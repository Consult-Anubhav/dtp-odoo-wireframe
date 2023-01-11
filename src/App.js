import React, { useState, useEffect } from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import { AppContext } from "./controllers/AppContext";
import Login from './views/Auth/Login';
import RolePage from "./views/Signup/RolePage";
import SubRolePage from "./views/Signup/SubRolePage";
import BasicDetailsPage from "./views/Signup/BasicDetailsPage";
import Succesful from "./views/Signup/Succesful";
import CertificationDetailsPage from "./views/Signup/CertificationDetailsPage";
import CompanyDetailsPage from "./views/Signup/CompanyDetailsPage";
import CompanyAddressDetailsPage from "./views/Signup/CompanyAddressDetailsPage";
import CompanyContactDetailsPage from "./views/Signup/CompanyContactDetailsPage";
import ApprovalRequest from "./views/Signup/ApprovalRequest";

function App() {

	// const [ store, setStore ] = useState( {
	// 	email: '',
	// 	password: ''
	// } );

	// useEffect( () => {
	// 	const email    = '';
	// 	const password = '';

	// 	setStore( { ...store, email, password } );

	// }, [] );

  return (
    <div className="App">

      {/* <AppContext.Provider value="sachin"> */}

        <Router>

          <Routes>
            {/* Guest routes */}
            <Route path="/" exact={true} element={<Login />} />
            <Route path="/signup" element={<RolePage dataurl={"/testData/roles.json"} exact={true} />} />

            <Route path="/signup/buyer" element={<SubRolePage dataurl={"/testData/subroles.json"} />} exact={true} />
            <Route path="/signup/buyer/individual" element={<BasicDetailsPage dataurl={"/testData/countries.json"} type="1" />} exact={true} />

            <Route path="/signup/submitted" element={<Succesful />} />
            <Route path="/signup/requestsent" element={<ApprovalRequest />} />

            <Route path="/signup/supplier" element={<BasicDetailsPage dataurl={"/testData/countries.json"} type="3" />} />
            <Route path="/signup/supplier/company/certificates" element={<CertificationDetailsPage dataurl={"/testData/certificatedetails.json"} type="3" />} />
            <Route path="/signup/supplier/company" element={<CompanyDetailsPage dataurl={"/testData/companydetails.json"} type="3" />} exact={true} />
            <Route path="/signup/supplier/company/address" element={<CompanyAddressDetailsPage type="3" />} />
            <Route path="/signup/supplier/company/contact" element={<CompanyContactDetailsPage type="3" />} />

            <Route path="/signup/logistics" element={<BasicDetailsPage dataurl={"/testData/countries.json"} type="4" />} />
            <Route path="/signup/logistics/company/certificates" element={<CertificationDetailsPage dataurl={"/testData/certificatedetails.json"} type="4" />} />
            <Route path="/signup/logistics/company" element={<CompanyDetailsPage dataurl={"/testData/companydetails.json"} type="4" />} exact={true} />
            <Route path="/signup/logistics/company/address" element={<CompanyAddressDetailsPage type="4" />} />
            <Route path="/signup/logistics/company/contact" element={<CompanyContactDetailsPage type="4" />} />

            <Route path="/signup/logistics" element={<Login />} />
            {/* <Route path="/chatbot" element={<ChatBot />} /> */}
            {/* <Route path='*' element={<NotFound />} /> */}
            {/* Guest routes, Not logged in */}
            
            {/* Private routes */}
          </Routes>

        </Router>
      {/* </AppContext.Provider> */}

    </div>
  );
}

export default App;
