import React, { useEffect, useState } from 'react';
import './Cadastro.css';
import NumberFormat from "react-number-format";
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

import logoSrc from '../../assets/logoMaloucos.png'
import btVoltar from '../../assets/bt-voltar.png'
import imgOlho from '../../assets/Trailing icon.png'
import checkBoxImg from '../../assets/checked.png'


const Cadastro = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [tel, setTel] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const user = {
        name,
        email,
        tel,
        password
    }

    const [inputType, setinputType] = useState("password")
    const [input2Type, setinput2Type] = useState("password")
    const [styleChecked, setStyleChecked] = useState('transparent')
    const [checked, setChecked] = useState(false)
    const [stylePassword2, setStylePassword2] = useState()
    const [menssageLabelSenha2, setMenssageLabelSenha2] = useState('Confirmar Senha')
    const navigate = useNavigate();


    const changeInputType = (e, inputPosition) => {

        if (inputPosition == 1) {

            if (inputType == "password") {
                setinputType("text")
            } else {
                setinputType("password")
            }

        } else {

            if (input2Type == "password") {
                setinput2Type("text")
            } else {
                setinput2Type("password")
            }
        }

    }

    const checkTermos = (e) => {

        if (!checked) {
            setChecked(true)
            setStyleChecked('#00F7EF')
        } else {
            setChecked(false)
            setStyleChecked('transparent')
        }
    }

    const CreateAccount = () => {


        if (checked == false) {
            return Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Por favor, aceite os termos antes de prosseguir',
            })
        }


        api.post('/login', { user })
            .then(res => {

                console.log(res)
                return navigate('/')
            
            })


    }

    useEffect(() => {

        if (password2 !== password) {
            setMenssageLabelSenha2('Digitar a senha novamente, igual ao primeiro campo')
            setStylePassword2('#df6363')
        } else {
            setMenssageLabelSenha2('Confirmar senha')
            setStylePassword2('')
        }
    }, [password2])

    return (
        <div className="cadastro">
            <div className="logos">

                <div className="divVoltar">
                    <img src={btVoltar} id='btVoltar' alt="" />
                </div>
                <img src={logoSrc} className='logoMaloucos' alt="" />

                <h1>CADASTRO</h1>

                <hr />

                <div className="inputsCadastro">

                    <div className="inputCadastro">
                        <label htmlFor="">Nome completo</label>
                        <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="inputCadastro">
                        <label htmlFor="">E-mail</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="inputCadastro">
                        <label htmlFor="">Celular (DDD + número)</label>
                        <NumberFormat
                            format="+55 (##) #####-####"
                            className='inputTel'
                            aria-describedby=""
                            placeholder="(11) 98000-0000"
                            value={tel}

                            onValueChange={(values) => {
                                const { formattedValue, value } = values;
                                let cellPattern = new RegExp(/^([0-9]{2}[9]{1}[0-9]{7,8})$/);
                                console.log(cellPattern.test(value))
                                setTel(formattedValue)

                            }}
                        />
                    </div>

                    <div className="inputCadastro">
                        <div className='SenhaLabel-Icon'>
                            <label htmlFor="">Criar Senha</label>
                            <img
                                src={imgOlho} alt=""
                                onClick={e => changeInputType(e, 1)}
                            />
                        </div>
                        <input
                            type={inputType}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="inputCadastro">

                        <div className='SenhaLabel-Icon'>
                            <label 
                                htmlFor=""
                                style={{'color': stylePassword2}}>{menssageLabelSenha2}</label>
                            <img
                                src={imgOlho} alt=""
                                onClick={e => changeInputType(e, 2)}
                            />
                        </div>
                        <input
                            type={input2Type}
                            value={password2}                           
                            onChange={e => setPassword2(e.target.value)}
                        />
                    </div>


                    <div className="termos">

                        <div
                            className="checkBox"
                            onClick={e => checkTermos(e)}
                            style={{ "backgroundColor": styleChecked }}
                        >

                            <img src={checkBoxImg} alt="" />
                        </div>
                        <span>Aceito os <Link className='LinkReact' to='/termos-de-uso'>Termos de Uso </Link> do site </span>
                    </div>

                    <div
                        className="entre"
                        onClick={e => CreateAccount()}

                    >
                        PROSSEGUIR
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Cadastro;