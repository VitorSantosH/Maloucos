import React from "react";

import Header from "../home/hearder/Header";
import Footer from "../footer/Footer";
import './Premiun.css';
import logo from '../../assets/logoMaloucos.png';
import diamante from '../../assets/diamante.png';



const Premiun = () => {


    return (
        <div className="premium">
            <Header/>
            <img src={logo} className='logoPremium' alt="" />
            <img src={diamante} className='diamante' alt="" />
            <h1>ASSINATURA PREMIUM</h1>
            <span className="spanValor">Acesse os conteúdos exclusivos por {'\n'}apenas </span>
            <h1>R$3,00/mês</h1>
            <div className="assinarPremium">
                <h1>ASSINAR PREMIUM</h1>

            </div>
            <ul>
                <li>Séries exclusivas para Premium</li>
                <li>Novos conteúdos semanais</li>
            </ul>
            <Footer />
        </div>
    )
}


export default Premiun;


/**
 * function usePlayerState($videoPlayer) {

    const [playerState, setPlayerState] = useState({
        playing: true,
        percentage: 0
    });

    useEffect(() => {
        if (!playerState.playing) {
            $videoPlayer.current.play();
        } else {
            $videoPlayer.current.pause();
        }
    }, [playerState, $videoPlayer])


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
        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 *  n.target.value
        console.log(n.target.value)
    }

    return {
        
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
    }

}

const videoURL = 'http://localhost:5000/static/COMANDOTORRENTS.COM.mp4'

const Player = () => {

    const $videoPlayer = useRef(null);
    const { playerState, 
            toggleVideoPlay,  
            handleTimeUpdate,
            handleChangeVideoPercentage} = usePlayerState($videoPlayer);
    const { obj } = useParams();




    
                return (
                    <div className="player">
            
                        <video
                            ref={$videoPlayer}
                            style={{ "width": "100%" }}
                            src={videoURL}
                            poster={`http://localhost:5000/static/maxresdefault.jpg`}
                            onTimeUpdate={e =>  handleTimeUpdate()}
                            autoPlay={false}
            
                        />
                        <div className="controls">
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
            
                        <Footer />
                    </div>
                )
            }
            
 */

