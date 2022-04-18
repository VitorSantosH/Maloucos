import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import { Player as PlayerTag } from 'video-react'
import './Player.css';
import "../../../node_modules/video-react/dist/video-react.css";
import api from "../../services/api";
import baseURL from "../../services/baseUrl";



const Player = () => {


    const { obj } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const [video, setVideo] = useState("")

    useEffect(() => {
        if (isLoaded == false) {
            api.get(`/video/${obj}`)
                .then(res => {

                    console.log(res.data.video)
                    setVideo(...res.data.video)
                    setIsLoaded(true)
                    return
                })
                .catch(err => {
                    setIsLoaded(true)
                    return console.log(err)
                })
        }
    }, [isLoaded])



    return (
        <div className="player">
            <PlayerTag
                playsInline
                src={`${baseURL}static/${video.URL}`}
                poster={`${baseURL}static/${video.thumbnail}`}
            />

            <Footer />
        </div>
    )
}

export default Player;


/**
 * 
 * http://localhost:5000/static
http://localhost:5000/static
 * 
 */