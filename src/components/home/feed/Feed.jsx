import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import api from "../../../services/api";
import Swal from 'sweetalert2';
import './Feed.css';

import iconIr from '../../../assets/iconIR.png';
import baseURL from '../../../services/baseUrl';

const Feed = () => {

    
    const [feedObjs, setFeedObjs] = useState([])
    const [reqStatus, setReqStatus] = useState(0)

    useEffect(() => {

        if (reqStatus == 0) {

            api.get('/feed')
                .then(res => {

                    console.log(res)
                    setFeedObjs(res.data)
                    setReqStatus(1)

                })
                .catch(err => {

                    console.log(err)
                    setReqStatus(1)

                    return Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: err,
                    })


                })

        }


    })

    function ReturnObj() {

        const objs = feedObjs.map((obj) => {

            return (
                <div className="feedCard">
                    <Link to={`/player/${obj.name}`} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                        <img src={`${baseURL}static/${obj.thumbnail}`} className='thumb' alt="alt" />
                    </Link>

                    <div className="spanCard">
                        <span>{obj.span}</span>
                        <Link to={`/player/${obj.name}/${obj.thumbnail}`} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                            <img src={iconIr} alt="" />
                        </Link>

                        <span className="date">
                            {obj.date}
                        </span>
                    </div>

                </div>
            )
        })

        return objs

    }


    return (
        <div className="feed">
            <ReturnObj />
            <ReturnObj />
            <ReturnObj />
        </div>
    )
}


export default Feed;