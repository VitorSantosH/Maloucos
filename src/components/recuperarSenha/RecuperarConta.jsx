import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import './RecuperarConta.css'

import logoMaloucos from '../../assets/logoMaloucos.png'

const RecuperarConta = () => {

    let { email } = useParams()
    const [emailState, setEmailState] = useState()
    const navigate = useNavigate();

    return (
        <div className="confirmacao">

            <img src={logoMaloucos} className='logoMaloucos' alt="" />
            <h1>CONFIRMAÇÃO</h1>

            {email !== undefined && email !== "undefined" && (
                <span>
                    Um e-mail de redefinicção de senha foi enviado para
                    <span className="inportante">
                        {" "}  {email} {" "}
                    </span>
                    Clique no link contido no e-mail para redefinir sua senha.
                </span>
            )}

            {email === undefined || email === "undefined" && (
                <>
                    <span>
                        Digite seu email para recurar sua senha
                    </span>
                    <label htmlFor="">E-mail</label>
                    <input
                        type="email"
                        value={emailState}
                        onChange={e => setEmailState(e.target.value)}
                    />

                    <div
                        className="entre"
                        onClick={e => {
                            return navigate(`/recuperarConta/${emailState}`)
                        }}
                    >
                        Enviar
                    </div>
                </>
            )}

            {email !== undefined && email !== "undefined" && (

                <Link id="linkEntrar" to={"/login"}>

                    <div className="entre">
                        ENTRAR
                    </div>

                </Link>
            )}
        </div>
    )
}


export default RecuperarConta;