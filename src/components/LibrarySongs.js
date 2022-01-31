import React from 'react';

const LibrarySongs = ({musicDetail,setCurrentSong, id,musicList,setMusicData})=>{
    
    const setCurrentMusicHandler = ()=>{
        const currMusic = musicList.filter(i=> i.id === id)
        setCurrentSong(currMusic[0]);

        const newMusicData = musicList.map(i=>{
            if(i.id === id){
                return {...i, active:true}
            }else {
                return {...i, active:false}
            }
         
        })
        setMusicData(newMusicData);
    }
    
    return(
        <div onClick={setCurrentMusicHandler} className={`librarySong-container ${musicDetail.active ? 'selected':""}` }>
            <img src={musicDetail.picture_url} alt='music album cover'/>
            <div className="music-description">
            <h3>{musicDetail.song_name}</h3>
            <h4>{musicDetail.artist_name}</h4>
            </div>
        </div>
    );
}
export default LibrarySongs;