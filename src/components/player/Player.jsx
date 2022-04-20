import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
//import { Player as PlayerTag } from 'video-react'
import './Player.css';
//import "../../../node_modules/video-react/dist/video-react.css";
import api from "../../services/api";
import baseURL from "../../services/baseUrl";
import Feed from '../home/feed/Feed';

import btPlay from '../../assets/bt-play@2x.png';
import btSom from '../../assets/bt-som@2x.png';
import btCompartilhar from '../../assets/bt-compartilhar.png';
import btLegendas from '../../assets/bt-legendas@2x.png';
import btConfig from '../../assets/bt-configuração@2x.png';
import btAmpliar from '../../assets/bt-ampliar.png';
import btFullScreen from '../../assets/bt-fullscreen@2x.png';
import favoritos from '../../assets/bt-favoritos.png';
import btVoltar from '../../assets/bt-voltar.png';


function usePlayerState($videoPlayer, obj) {

    const [playerState, setPlayerState] = useState({
        playing: true,
        percentage: 0,
        video: "",
        isLoaded: false,

    });

    const [stateObj, setStateObj] = useState(obj)
    const [controlState, setControlState] = useState(true);

    useEffect(() => {

        if (!playerState.playing) {
            $videoPlayer.current.play();
        } else {
            $videoPlayer.current.pause();
        }
        if (playerState.isLoaded == false) {
            api.get(`/video/${obj}`)
                .then(res => {

                    console.log(res.data.video)
                    setPlayerState({
                        ...playerState,
                        video: res.data.video,
                        isLoaded: true
                    })
                    return
                })
                .catch(err => {
                    setPlayerState({
                        ...playerState,
                        isLoaded: true
                    })
                    return console.log(err)
                })
        }
        if (obj != stateObj) {
            setPlayerState({
                ...playerState,
                isLoaded: false

            })
            setStateObj(obj)
            window.scrollTo(0,0)
        }


    }, [playerState, $videoPlayer, obj, stateObj])


    function toggleVideoPlay() {
        setPlayerState({
            ...playerState,
            playing: !playerState.playing,

        })
    }

    function handleTimeUpdate() {
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100
        setPlayerState({ ...playerState, percentage: currentPercentage })
    }

    function handleChangeVideoPercentage(n) {
        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * n.target.value
        console.log(n.target.value)
    }

    function showControls() {

        setControlState(!controlState)
    }

    function mouseEnter() {
        setControlState(true)
    }
    function mouseDown() {
        setControlState(false)
    }

    return {

        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage,
        showControls,
        controlState,
        mouseEnter,
        mouseDown

    }

}

//const videoURL = 'http://localhost:5000/static/COMANDOTORRENTS.COM.mp4'

const Player = () => {

    const { obj } = useParams();
    const $videoPlayer = useRef(null);
    const $divPlayer = useRef(null)
    const navigate = useNavigate();
    const { playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage,
        showControls,
        controlState,
        mouseEnter,
        mouseDown } = usePlayerState($videoPlayer, obj,);


    function ReturnDate() {

        var date = new Date(playerState.video[0].date)

        return (
            <span>{date.toLocaleDateString()}</span>
        )

    }

    var toHHMMSS = (secs) => {
        var sec_num = parseInt(secs, 10)
        var hours = Math.floor(sec_num / 3600) % 24
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60
        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }

    return (
        <div className="player">
            <div className="back">
                <img 
                    src={btVoltar} 
                    alt="" 
                    onClick={e => navigate('/')}
                    />
            </div>
            {playerState.video[0] && (
                < div
                    style={{ 'backgroundColor': "#252525" }}
                    ref={$divPlayer}
                    onMouseOver={e => {

                        mouseEnter()
                    }}
                    onMouseOut={e => {

                        mouseDown()
                    }}
                >
                    <video

                        ref={$videoPlayer}
                        style={{ "width": "100%" }}
                        src={`${baseURL}static/${playerState.video[0].URL}`}
                        poster={`${baseURL}static/${playerState.video[0].thumbnail}`}
                        onTimeUpdate={e => handleTimeUpdate()}
                        autoPlay={false}

                        onClick={e => {
                            toggleVideoPlay()
                            showControls()
                        }}


                    />

                    <div className="videoControls">

                        <div className="controls" style={{ 'display': controlState ? 'flex' : "none" }}>
                            <div
                                onClick={e => toggleVideoPlay()}
                            >
                                {playerState.playing ?
                                    <img src={btPlay} alt="" />
                                    : "Pause"}
                            </div>

                            <input

                                type="range"
                                min={0}
                                max={100}
                                onChange={e => handleChangeVideoPercentage(e)}
                                value={playerState.percentage}

                            />
                            <div className="timeVideo">
                                {toHHMMSS($videoPlayer.current.currentTime)}
                            </div>
                            <div className="volume">
                                <img src={btSom} alt="" />
                                <input
                                    type="range"
                                    min="0"
                                    value={$videoPlayer.current.volume}
                                    max="1"
                                    step="0.1"
                                    onChange={e => {
                                        $videoPlayer.current.volume = e.target.value
                                    }}
                                />
                            </div>
                            <img className="imgControl" src={btLegendas} alt="" />
                            <img className="imgControl" src={btConfig} alt="" />
                            <img className="imgControl" src={btAmpliar} alt="" />
                            <img className="imgControl" src={btFullScreen} alt=""
                                onClick={e => {
                                    $videoPlayer.current.requestFullscreen();
                                }}
                            />
                            {/**
                         * <select name="" id="">
                            {[1, 2, 3].map(speed => (
                                <option key={`speedChange_${speed}`}>
                                    {speed}
                                </option>
                            ))}
                        </select>
                         */}
                        </div>
                    </div>

                </div>
            )
            }

            {!playerState.video[0] && (
                <>
                    <video
                        ref={$videoPlayer}
                        style={{ "width": "100%", 'minHeight': '50vw' }}
                        src=""
                        poster=""
                        onTimeUpdate={e => handleTimeUpdate()}
                        autoPlay={false}

                    />
                    <div className="controls"  >
                        <button onClick={e => toggleVideoPlay()}>
                            {playerState.playing ? "Play" : "Pause"}
                        </button>

                        <input
                            type="range"
                            min={0}
                            max={100}
                            onChange={e => handleChangeVideoPercentage(e)}
                            value={playerState.percentage}

                        />
                        <select name="" id="">
                            {[1, 2, 3].map(speed => (
                                <option key={`speedChange_${speed}`}>
                                    {speed}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )
            }

            <div className="spanvideo">
                <div className="btns">
                    <img src={favoritos} alt="" />
                    <img src={btCompartilhar} className={"btCompartilhar"} alt="" />
                </div>
                {playerState.video[0] && (
                    <span>{playerState.video[0].span}</span>

                )}

                {playerState.video[0] && ReturnDate()}


            </div>
            <Feed />
            <Footer />
        </div >
    )
}



export default Player;


/**
 * 
 * http://localhost:5000/static
   http://localhost:5000/static
    
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

* 

 */