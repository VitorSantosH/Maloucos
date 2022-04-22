import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Input2.css';


import imgOlho from '../../assets/Trailing icon.png';
import imgFacebook from '../../assets/facebookIcon.png';
import imgGoogle from '../../assets/googleIcon.png';
import imgApple from '../../assets/pngegg.png';

function useInputState() {

    const [inputsState, setInputsState] = useState({
        emailValue: null,
        senhaValue: null
    })


    return {
        inputsState
    }

}

const Input2 = () => {

    const {inputsState} = useInputState();

    return (
        <div className="input2">

            <div className="ladoEsquerdo">

                <div className="input2Email">
                    <label htmlFor="emailInput2" className="emailLabel2">
                        Usuário ou email
                    </label>
                    <input type="text" className="emailInput2" />
                </div>

                <div className="input2Email">
                    <label htmlFor="senhaInput2" className="senhaLabel2">
                        Usuário ou email
                    </label>
                    <input type="text" className="senhaInput2" />
                    <img src={imgOlho} id='imgOlhoInput2' alt="" />
                </div>

            

                <span id="esqueciInput2">
                    <Link to={`/recuperarConta/${inputsState.emailValue}`} style={{ "textDecoration": "none", 'color': '#00F7EF' }} >
                        Esqueci minha senha
                    </Link>
                </span>

                <br />

                <div className="entreInput2" >
                    Entrar
                </div>

                <div className="loginsRedesInput2">
                    <div className="redeInput2">
                        <img src={imgFacebook} alt="" />
                    </div>
                    <div className="redeInput2">
                        <img src={imgGoogle} alt="" />
                    </div>
                    <div className="redeInput2">
                        <img src={imgApple} alt="" />
                    </div>
                </div>


            </div>

            <div className="meio">
                <div className="linha1">

                </div>
                <span>
                    <h1 id="ouInput2">OU</h1>
                </span>
                <div className="linha2">

                </div>
            </div>


            <div className="ladoDireito">
                <div className="inscrevaInput2">
                    INSCREVA-SE
                </div>
            </div>

        </div>


    )
}



export default Input2;