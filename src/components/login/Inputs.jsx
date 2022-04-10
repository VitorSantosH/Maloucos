import React, { useEffect, useState } from "react";

import imgOlho from '../../assets/Trailing icon.png'
import imgApple from '../../assets/pngegg.png'
import imgGoogle from '../../assets/googleIcon.png'
import imgFacebook from '../../assets/facebookIcon.png'


const InputsLogin = (props) => {

    const [messageEmail, setMessageEmail] = useState("Usuário ou e-mail")
    const [messageSenha, setMessageSenha] = useState("Senha")
    const [emailValue, setEmailValue] = useState(undefined)
    const [senhaValue, setSenhaValue] = useState(undefined)
    const [emailStyle, setEmailStyle] = useState(undefined)
    const [senhaStyle, setSenhaStyle] = useState(undefined)
    const [inputType, setinputType] = useState("password")

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


    }, [emailValue, senhaValue])


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
                <label htmlFor="InputMail">{messageEmail}</label>
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
                <div>
                    <label htmlFor="InputSenha">{messageSenha}</label>
                    <img
                        src={imgOlho} alt=""
                        style={{ 'width': '30px', 'position': 'relative', "left": "62vw", "top": "52px" }}
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
                Esqueci minha senha
            </span>

            <br />

            <div className="entre" onClick={e => props.logar(emailValue, senhaValue)}>
                Entre
            </div>

            <div className="loginsRedes">
                <div className="rede">
                    <img src={imgFacebook} alt=""  />
                </div>
                <div className="rede">
                    <img src={imgGoogle} alt=""  />
                </div>
                <div className="rede">
                    <img src={imgApple} alt=""  />
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