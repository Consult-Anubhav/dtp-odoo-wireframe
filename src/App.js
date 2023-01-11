import React, { useState, useEffect } from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import { AppContext } from "./controllers/AppContext";
import Login from './views/Auth/Login';
import RolePage from "./views/Signup/RolePage";

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
            <Route path="/signup/role" element={<RolePage />} />
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
