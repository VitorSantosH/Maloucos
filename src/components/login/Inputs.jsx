import React, { useEffect, useLayoutEffect, useState } from "react";

import imgOlho from '../../assets/Trailing icon.png'
import imgApple from '../../assets/pngegg.png'
import imgGoogle from '../../assets/googleIcon.png'
import imgFacebook from '../../assets/facebookIcon.png'
import { Link } from "react-router-dom";


const InputsLogin = (props) => {

    const [messageEmail, setMessageEmail] = useState("Usuário ou e-mail")
    const [messageSenha, setMessageSenha] = useState("Senha")
    const [emailValue, setEmailValue] = useState(undefined)
    const [senhaValue, setSenhaValue] = useState(undefined)
    const [emailStyle, setEmailStyle] = useState(undefined)
    const [senhaStyle, setSenhaStyle] = useState(undefined)
    const [inputType, setinputType] = useState("password")
    const [stylemailLabel, setStyleEmailLabel] = useState(props.statusEmail)
    const [styleSenhaLabel, setStyleSenhaLabel] = useState(props.statusSenha)

    useEffect(() => {

        if (emailValue !== undefined && emailValue !== "" && emailValue !== null) {
            setEmailStyle("#2f3030")
        } else {
            setEmailStyle("")
        }


        if (senhaValue !== undefined && senhaValue !== "" && senhaValue !== null) {
            setSenhaStyle("#2f3030")
        } else {
            setSenhaStyle("")
        }

        if (props.statusEmail == false) {
            setStyleEmailLabel('#be5252')
            setMessageEmail("Usuário inválido")
        }

        if (props.statusEmail == false) {
            setStyleSenhaLabel('#be5252')
            setMessageSenha("Senha inválida")
        }

    }, [emailValue, senhaValue, stylemailLabel, styleSenhaLabel])



    const changeInputType = (e) => {
        if (inputType == "password") {
            setinputType("text")
        } else {
            setinputType("password")
        }
    }

    return (

        <div className="InputsLogin">

            <div className="inputEmail">
                <label htmlFor="InputMail" style={{ 'color': stylemailLabel }}>{messageEmail}</label>
                <input
                    type="email"
                    name="InputMail"
                    id="InputMail"
                    style={{ 'backgroundColor': emailStyle }}
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                />
            </div>

            <br />

            <div className="inputSenha">
                <div
                    className="SenhaLabel-Icon"
                    style={{ "width": '75vw' }}>
                    <label htmlFor="InputSenha" style={{ "color": styleSenhaLabel }}>{messageSenha}</label>
                    <img
                        src={imgOlho} alt=""
                        onClick={e => changeInputType(e)}
                    />
                </div>
                <input
                    type={inputType}
                    name="InputSenha"
                    id="InputSenha"
                    style={{ 'backgroundColor': senhaStyle }}
                    value={senhaValue}
                    onChange={e => setSenhaValue(e.target.value)}

                />

            </div>


            <span id="esqueci">
                <Link to={`/recuperarConta/${emailValue}`} style={{"textDecoration": "none", 'color': '#00F7EF'}} >
                    Esqueci minha senha
                </Link>
            </span>

            <br />

            <div className="entre" onClick={e => props.logar(emailValue, senhaValue)}>
                Entrar
            </div>

            <div className="loginsRedes">
                <div className="rede">
                    <img src={imgFacebook} alt="" />
                </div>
                <div className="rede">
                    <img src={imgGoogle} alt="" />
                </div>
                <div className="rede">
                    <img src={imgApple} alt="" />
                </div>
            </div>

            <span id='ou'>
                OU
            </span>

            <div className="inscreva">
                INSCRAVA-SE
            </div>


        </div>
    )
}


export default InputsLogin