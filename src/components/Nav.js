import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Nav = ({isLibraryActive , setIsLibraryActive})=> {
    return(
        <nav>
            <h1>Waves</h1>
            <button onClick={()=> setIsLibraryActive(!isLibraryActive)}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;