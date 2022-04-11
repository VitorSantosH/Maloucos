import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Home from './home/Home.jsx';
import Login from "./login/Login.jsx";
import Cadastro from "./cadastro/Cadastro.jsx";

const Caminhos = () => {

    return (

        <Router>
            <Routes>

                <Route exact path='/home' element={<Home />} />
                <Route exact path='/cadastro' element={<Cadastro />} />
                <Route exact path='/' element={<Login />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </Router>


    )

}


export default Caminhos