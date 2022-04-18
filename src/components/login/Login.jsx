import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import './Login.css';
import api from '../../services/api'


import InputsLogin from "./Inputs";
import logoSrc from '../../assets/logoMaloucos.png'
import Footer from "../footer/Footer";

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
                        setStatusSenha(false)
                    }
                    if(res.data.erros.includes('user')){
                        setStatusEmail(false)
                    }

                    return 
                }

                setUser(res.data)
                localStorage.setItem('userMaloucos', res.data)
                return navigate('/home');
            })
    }

    function Change(){
        
        return (
            <InputsLogin logar={logar} statusEmail={statusEmail} statusSenha={statusSenha} />
        )
    }


    return (
        <div className="login">

            <img src={logoSrc}className='logoMaloucos' alt="" />

            <h1>LOGIN</h1>            
            <Change/>
            <Footer/>
        </div>
    )
}

export default Login;