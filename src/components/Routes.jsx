import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './home/Home.jsx';
import Login from "./login/Login.jsx";

const Caminhos = () => {

    return (

        <Router>
            <Routes>

                <Route exact path='/home' element={<Home />} />
                <Route exact path='/' element={<Login />} />

            </Routes>
        </Router>


    )

}


export default Caminhos