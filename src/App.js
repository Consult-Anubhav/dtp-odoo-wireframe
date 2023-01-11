import React, { useState, useEffect } from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import { AppContext } from "./controllers/AppContext";
import Login from './views/Auth/Login';
import RolePage from "./views/Signup/RolePage";
import SubRolePage from "./views/Signup/SubRolePage";

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

      {/* <AppContext.Provider value={ [ store, setStore ] }> */}

        <Router>

          <Routes>
            {/* Guest routes */}
            <Route path="/" exact={true} element={<Login />} />
            <Route path="/signup" element={<RolePage dataurl={"/testData/roles.json"}/>} />
            <Route path="/signup/buyer" element={<SubRolePage dataurl={"/testData/subroles.json"}/>} exact={true} />
            <Route path="/signup/supplier" element={<Login />} />
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
