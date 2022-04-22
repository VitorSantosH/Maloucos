import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import api from "../../../services/api";
import Swal from 'sweetalert2';
import './Feed.css';

import iconIr from '../../../assets/iconIR.png';
import baseURL from '../../../services/baseUrl';
import btDiamante from '../../../assets/diamante.png';
import Header from '../hearder/Header';

const Feed = (props) => {

    const [feedObjs, setFeedObjs] = useState([])
    const [reqStatus, setReqStatus] = useState(0)
    const navigate = useNavigate();

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

    function ReturnDate() {

        var date = new Date(feedObjs[0].date)

        return (
            <span>{date.toLocaleDateString()}</span>
        )

    }

    function ReturnObj() {

        const objs = feedObjs.map((obj, i) => {

            return (
                <div className="feedCard" key={`${obj.Date}-${i}`}>
                    <Link to={`/player/${obj.name}`} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                        <img src={`${baseURL}static/${obj.thumbnail}`} className='thumb' alt="alt" />
                    </Link>

                    <div className="spanCard">
                        <span>{obj.span}</span>
                        <Link to={`/player/${obj.name}`} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                            <img src={iconIr} alt="" />
                        </Link>

                        <span className="date">
                            {ReturnDate()}
                        </span>
                    </div>

                </div>
            )
        })

        return objs

    }


    return (
        <div className="feed">
           
            {feedObjs[0] && props.destaque != true  && (
                <div className="videoDestaque">

                    <div className="accPremiun" onClick={e => navigate('/premiun')}>
                        <img src={btDiamante} alt="" />
                        ACESSAR O PREMIUM
                    </div>

                    <Link to={`/player/${feedObjs[0].name}`} style={{ "textDecoration": "none", 'color': '#FFFFFF' }}>
                        <img src={`${baseURL}static/${feedObjs[0].thumbnail}`} alt="destaque" />
                    </Link>

                    <div className="spanVideoPremiun" >

                        <span>{feedObjs[0].span}</span>

                        <span className="date">
                            {ReturnDate()}
                        </span>
                    </div>

                </div>
            )}
            <div className="variados" >
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
                <ReturnObj />
            </div>
        </div>
    )
}


export default Feed;