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
import RecuperarConta from "./recuperarSenha/RecuperarConta.jsx";
import Premiun from "./premiun/Premiun.jsx";
import Player from "./player/Player.jsx";
import AlterarSenha from "./alterarSenha/AlterarSenha.jsx";
import Perfil from "./perfil/Perfil.jsx";

const Caminhos = () => {

    return (

        <Router>
            <Routes>

                <Route exact path='/home' element={<Home />} />
                <Route exact path='/cadastro/:end' element={<Cadastro />} />
                <Route exact path='/cadastro' element={<Cadastro />} />
                <Route exact path="/termos-de-uso" element={<Termos />}/>
                <Route exact path="/confirmacao/:email" element={<Confirmacao/>} />
                <Route exact path="/recuperarConta/:email" element={<RecuperarConta/>} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path="/premiun" element={<Premiun/>}/>
                <Route exact path="/player/:obj" element={<Player/>} />
                <Route exact path='/altsenha' element={<AlterarSenha/>} />
                <Route exact path='/perfil' element={<Perfil/>} />
                <Route exact path='/' element={<Home />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </Router>


    )

}


export default Caminhos