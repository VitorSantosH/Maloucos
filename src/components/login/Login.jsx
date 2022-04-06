import React from "react";
import './Login.css';

import InputsLogin from "./Inputs";
import logoSrc from '../../assets/logoMaloucos.png'

const Login = () => {

    return (
        <div className="login">
            <img src={logoSrc} alt="" />

            <h1>LOGIN</h1>
            
            <InputsLogin/>

        </div>
    )
}

export default Login;