import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import malougosLogo from '../../../assets/logotipo.png';
import IconPesquisa from '../../../assets/iconPesquisar.png';
import btFavoritos from '../../../assets/bt-favoritos.png';
import btFeed from '../../../assets/iconFeed.png';
import btPerfl from '../../../assets/iconUser.png';
import logo2 from '../../../assets/logoMaloucos.png';

const Header = () => {



    return (
        <div className="header">

            <Link to='/' className="linkImg" style={{ "textDecoration": "none", 'color': '#FFFFFF' }} >
                <img src={logo2} id='imgLogo2' alt="" />
            </Link>

            <img src={malougosLogo} id='imgLogo' alt="" />

            <Link to='/' className="linkImg" style={{ "textDecoration": "none", 'color': '#FFFFFF' }} >
                <div className="linkFeed" >
                    <img src={btFeed} alt="feed" id='imgFeed' />
                    FEED
                </div>
            </Link>

            <div className="barraPesquisa">
                <img src={IconPesquisa} alt="" />
                <input type="text" id="inputPesquisa" placeholder="Pesquisar no Maloucos" />
            </div>
            <img src={btFavoritos} id='favoritos' alt="" />

            <Link to='/login' className="linkImg" style={{ "textDecoration": "none", 'color': '#FFFFFF' }} >
                <div className="linkFeed">
                    <img src={btPerfl} alt="feed" id='imgPerfil' />
                    PERFIL
                </div>
            </Link>

        </div>
    )
}


export default Header;