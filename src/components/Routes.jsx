import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useParams
} from "react-router-dom";

import Home from './home/Home.jsx';
import Login from "./login/Login.jsx";
import Cadastro from "./cadastro/Cadastro.jsx";
import Termos from "./termosDeUso/Termos.jsx";
import Confirmacao from "./confirmacao/Confirmacao.jsx";


const Caminhos = () => {

    return (

        <Router>
            <Routes>

                <Route exact path='/home' element={<Home />} />
                <Route exact path='/cadastro' element={<Cadastro />} />
                <Route exact path="/termos-de-uso" element={<Termos />}/>
                <Route exact path="/confirmacao/:email" element={<Confirmacao/>} />
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