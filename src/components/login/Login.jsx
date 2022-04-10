import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import './Login.css';
import api from '../../services/api'


import InputsLogin from "./Inputs";
import logoSrc from '../../assets/logoMaloucos.png'


const Login = () => {

    const [user, setUser] = useState(undefined)
    const navigate = useNavigate();
    const [statusEmail, setStatusEmail] = useState(true)
    const [statusSenha, setStatusSenha] = useState(true)
    
    const logar = (email, password) => {

        api.post('/login',{email, password})
            .then(res => {
                console.log(res.data.erros)

                if(res.data.erros){
                  
                    if(res.data.erros.includes('senha')){
                        alert('senha')
                    }

                }

                setUser(res.data)
                localStorage.setItem('userMaloucos', res.data)
                return navigate('/home');
            })
    }

    return (
        <div className="login">

            <img src={logoSrc} alt="" />

            <h1>LOGIN</h1>            
            <InputsLogin logar={logar} />

        </div>
    )
}

export default Login;