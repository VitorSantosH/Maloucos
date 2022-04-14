import React from "react";

import './Footer.css';
import logoFeed from '../../../assets/iconFeed.png';
import iconUser from '../../../assets/iconUser.png';
import iconDiamant from '../../../assets/diamante.png';



const Footer = () => {

    return (
        <div className="footer">
            <div className="iconFeed">
                <img src={logoFeed} alt="" />
                <span>FEED</span>
            </div>

            <div className="iconPremiun">
                <img src={iconDiamant} alt="" />
                <span className="premiun">
                    PREMIUN
                </span>
            </div>

            <div className="iconPerfil">
                <img src={iconUser} alt="" />
                <span className="user">
                    PERFIL
                </span>
            </div>

        </div>
    )
}


export default Footer;