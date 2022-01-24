import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleRight,faAngleLeft  } from '@fortawesome/free-solid-svg-icons';

const Player = ()=>{
    return(
        <div className="player-container">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-backward" icon={faAngleLeft} size="2x"  />
                <FontAwesomeIcon className="play-icon" icon={faPlay} size="2x"  />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"  />
            </div>
        </div>

    );
}

export default Player;