import React, { useEffect, useState } from 'react';
import NumberFormat from "react-number-format";
import { Link, useNavigate } from 'react-router-dom'
import './Perfil.css';
import Header from '../home/hearder/Header';
import Footer from '../footer/Footer';

const Perfil = () => {

    const [login, setLogin] = useState({});

    return (
        <>
            <Header />
            <div className="perfil">

                <h1>MEU PERFIL</h1>
                <div className="conteinerPerfil">

                    <div className="lado1Perfil">

                        <div className="containerInputs">
                            <label htmlFor="nomeCompleto">
                                Nome Completo
                            </label>
                            <input type="text" readOnly value={login.name ? login.name : "John Doe"} />
                        </div>

                        <div className="containerInputs">
                            <label htmlFor="email">
                                E-mail
                            </label>
                            <input type="text" readOnly name='email' value={login.email ? login.email : "johndoe@email.com"} />
                        </div>

                        <div className="containerInputs">
                            <label htmlFor="celular">
                                E-mail
                            </label>
                            <NumberFormat
                                readOnly
                                format="+55 (##) #####-####"
                                className='inputTel'
                                aria-describedby=""
                                placeholder="(11) 98000-0000"
                                value={login.cel ? login.cel : "31996400879"}
                                name='celular'

                            />
                        </div>

                        <Link to='/altSenha' className="altSenha">
                            <span  >
                                Alterar Senha
                            </span>

                        </Link>


                        <div className="btnSalvar">
                            Salvar
                        </div>

                    </div>


                    <div className="lado2Perfil">
                        <span className='AssinaturaStatus'>{login.statusAssinatura ? login.statusAssinatura : "Assinatura premiun vigente"}</span>
                        <span className='AssinaturaStatus2'>{login.assinaturaPeriodo ? login.assinaturaPeriodo : "Periodo 10/03/2022 a 10/04/2022"}</span>
                        <div className="btnRenovarAssinatura">
                            RENOVAR ASSINATURA
                        </div>

                        <div className="spanFinalPerfil">
                            <span>
                                Cancelar assinatura
                            </span>
                            <span>
                                Apagar Conta
                            </span>
                        </div>
                    </div>



                </div>
                <Footer />
            </div>
        </>

    )
}


export default Perfil;