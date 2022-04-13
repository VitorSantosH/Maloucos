import React from "react";

import './Header.css';
import malougosLogo from '../../../assets/logotipo.png';
import IconPesquisa from '../../../assets/iconPesquisar.png';
import btFavoritos from '../../../assets/bt-favoritos.png';

const Header = () => {

    return (
        <div className="header">
            <img src={malougosLogo} alt="" />
            
            <div className="barraPesquisa">
                <img src={IconPesquisa} alt="" />
                <input type="text" id="inputPesquisa" placeholder="Pesquisar no Maloucos" />
            </div>
            <img src={btFavoritos} id='favoritos' alt="" />
        </div>
    )
}


export default Header;