import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Confirmacao.css";

import logoMaloucos from '../../assets/logoMaloucos.png'

const Confirmacao = () => {

    let { email } = useParams()

    return (
        <div className="confirmacao">

            <img src={logoMaloucos} className='logoMaloucos' alt="" />
            <h1>CONFIRMAÇÃO</h1>

            <span>
                Um e-mail de confirmação foi enviado para
                <span className="inportante">
                    {" "}  {email} {" "}
                </span>
                Clique no link contido no e-mail para finalizar seu cadastro.
            </span>

            <Link id="linkEntrar" to={"/login"}>

                <div className="entre3">
                    ENTRAR
                </div>

            </Link>
        </div>
    )
}


export default Confirmacao;