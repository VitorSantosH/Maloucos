import React, { useState } from "react";
import {Link} from 'react-router-dom';

import './AlterarSenha.css';

import logoSrc from '../../assets/logoMaloucos.png'
import btVoltar from '../../assets/bt-voltar.png'
import imgOlho from '../../assets/Trailing icon.png'
import checkBoxImg from '../../assets/checked.png'


const AlterarSenha = () => {

    const [login, setLogin] = useState({});



    return (

        <div className="AlteraSenha">

            <div className="voltar">
                <Link to='/'>
                    <img src={btVoltar} alt="" />
                </Link>
            </div>

            <img src={logoSrc} alt="" />

            <h1>ALTERAR SENHA</h1>

            <div className="containerAlterarSenha">
                <label htmlFor="nomeCompleto">
                    Senha atual
                </label>
                <img src={imgOlho} alt="" />
                <input type="password" />
            </div>

            <div className="containerAlterarSenha">
                <label htmlFor="nomeCompleto">
                    Nova senha
                </label>
                <img src={imgOlho} alt="" />
                <input type="password" />
            </div>

            <div className="containerAlterarSenha">
                <label htmlFor="nomeCompleto">
                    Confirmar nova senha
                </label>
                <img src={imgOlho} alt="" />
                <input type="password" />
            </div>

            <div className="btnSalvarAltSenha">
                Salvar
            </div>

        </div>
    )
}

export default AlterarSenha