import React, { useEffect, useState } from "react";
import "./Termos.css";

import btFchar from '../../assets/bt-fechar@2x.png';

const Termos = (props) => {

    const [dispayState, setDispayState] = useState(props.dispay);
    const [valueDispay, setValueDispay] = useState('none')
    useEffect(() => {

        if (dispayState == false) {
            setValueDispay('none')
        } else {
            setValueDispay('flex')
        }

    }, [dispayState])

    return (
        <div className="termosDeUso" style={{ 'display': valueDispay }}>

            <div className="btnTermos" style={{'backgroundColor' : "transparents"}} onClick={e => props.setDispay(false)}>
                <img src={btFchar} alt="" />
            </div>
            <h1>

                TERMOS DE USO
            </h1>
            <span>Aceito os Termos de Uso do site Maloucos, incluindo lorem ipsium larium das rerum novarum.</span>
            <span>  orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum consequat enim at aliquam. Phasellus quis ipsum et urna tempor iaculis. Aliquam vestibulum et erat id maximus. Donec aliquam neque nec lacus posuere, non interdum nunc ultricies. Morbi fermentum dapibus posuere. Vestibulum dignissim molestie massa, nec tincidunt elit blandit a. Maecenas nec enim venenatis, hendrerit leo et, commodo arcu. Nulla laoreet justo quam, pellentesque varius ex feugiat et. Aliquam sed laoreet orci. Proin placerat justo ipsum. Mauris tristique ut dui at consectetur. Vestibulum lectus velit, suscipit sed ex et, feugiat tempor tellus. Fusce ultricies malesuada lacinia.</span>
 
        </div>
    )
}


export default Termos;