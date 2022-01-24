import {React, useRef,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleRight,faAngleLeft,faPause  } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong,isPlaying, setIsPlaying})=>{

    
    const formatTime = (time)=>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const updateTimeHandler = (e)=>{
       const current = e.target.currentTime;
       const duration = e.target.duration;
       setTimeInfo({...timeInfo,currentTime:current, duration:duration});

    }

    const playSongHandler =()=>{
     
        if(!isPlaying){
            audioTag.current.play();
            setIsPlaying(true);
        }else{
            audioTag.current.pause();
            setIsPlaying(false);
        }
        
  
    }
    const dragHandler = (e) => {
        audioTag.current.currentTime = e.target.value;
        setTimeInfo({...timeInfo, currentTime: e.target.value})
    }

    const audioTag = useRef();
    const [timeInfo, setTimeInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    
    return(
        <div className="player-container">
            <div className="time-control">
               
                <p>{formatTime(timeInfo.currentTime)}</p>
                <input min = '0' max = {timeInfo.duration} value = {timeInfo.currentTime} onChange={dragHandler} type="range"/>
                <p>{formatTime(timeInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-backward" icon={faAngleLeft} size="2x"  />
                <FontAwesomeIcon className="play-icon" icon={isPlaying? faPause: faPlay} size="2x" onClick={playSongHandler} />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"  />
            </div>
            <audio onTimeUpdate={updateTimeHandler} onLoadedMetadata={updateTimeHandler} ref={audioTag} src={currentSong.audio}/>
        </div>

    );
}

export default Player;