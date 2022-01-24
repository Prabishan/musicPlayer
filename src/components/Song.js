import React from 'react';

const Song = ({currentSong}) => {


    return (
        <div className='song-container'>
            <img src={currentSong.picture_url} alt='music album cover'/>
            <p>{currentSong.song_name}</p>
            <p>{currentSong.artist_name}</p>
        </div>
    )
}

export default Song;