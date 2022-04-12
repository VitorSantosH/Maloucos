import React, { useEffect, useState } from "react";
import "./Termos.css";


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

            <button onClick={e => props.setDispay(false)}>
                Voltar
            </button>
            <h1>

                TERMOS DE USO
            </h1>
            <span>Aceito os Termos de Uso do site Maloucos, incluindo lorem ipsium larium das rerum novarum.</span>
            <span>  orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum consequat enim at aliquam. Phasellus quis ipsum et urna tempor iaculis. Aliquam vestibulum et erat id maximus. Donec aliquam neque nec lacus posuere, non interdum nunc ultricies. Morbi fermentum dapibus posuere. Vestibulum dignissim molestie massa, nec tincidunt elit blandit a. Maecenas nec enim venenatis, hendrerit leo et, commodo arcu. Nulla laoreet justo quam, pellentesque varius ex feugiat et. Aliquam sed laoreet orci. Proin placerat justo ipsum. Mauris tristique ut dui at consectetur. Vestibulum lectus velit, suscipit sed ex et, feugiat tempor tellus. Fusce ultricies malesuada lacinia.</span>
            <span>                In sit amet orci est. Praesent congue urna eget volutpat rutrum. Nam rutrum, elit et cursus gravida, elit purus laoreet massa, placerat rhoncus elit nisl at tortor. Vivamus tellus felis, ullamcorper vel tristique vel, faucibus sed tellus. Aliquam placerat pulvinar convallis. Fusce ultrices scelerisque scelerisque. Phasellus id feugiat enim.</span>
            <span >
                Mauris est lorem, venenatis in tempus in, euismod non sapien. Etiam efficitur diam at sapien consectetur, a interdum enim porttitor. Cras luctus tortor at leo vestibulum luctus. Cras accumsan semper odio. Nunc vehicula orci in enim aliquam, ut pharetra velit ullamcorper. Sed auctor rutrum pellentesque. Sed eros justo, pellentesque ut sapien quis, sagittis tincidunt arcu. Proin at lectus at quam iaculis tristique. Phasellus consequat, neque in sollicitudin ultrices, enim dolor ornare neque, quis vehicula nibh arcu ut arcu.
            </span>
        </div>
    )
}


export default Termos;