import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';
import logoFeed from '../../assets/iconFeed.png';
import iconUser from '../../assets/iconUser.png';
import iconDiamant from '../../assets/diamante.png';



const Footer = () => {

    return (
        <div className="footer">
            <div className="iconFeed">

                <Link to={'/'} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                    <img src={logoFeed} alt="" />
                </Link>
                <Link to={'/'} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                    <span>FEED</span>
                </Link>
            </div>

            <div className="iconPremiun">
                <Link to={'/premiun'} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                    <img src={iconDiamant} alt="" />
                </Link>
                <Link to={'/premiun'} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>

                    <span className="premiun">
                        PREMIUN
                    </span>
                </Link>
            </div>

            <Link to={'/login'} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>

                <div className="iconPerfil">
                    <img src={iconUser} alt="" />
                    <span className="user">
                        PERFIL
                    </span>
                </div>

            </Link>


        </div >
    )
}


export default Footer;