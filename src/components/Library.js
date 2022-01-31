import React from 'react';
import LibrarySong from './LibrarySongs';

const Library = ({musicList,setCurrentSong,setMusicData, isLibraryActive})=> {
    return (
        <div className={`library ${isLibraryActive?'library-active':''}`}>
            <h2>Library</h2>
            <div className="library-list">
            {musicList.map(i=>(
                <LibrarySong 
                musicDetail = {i}
                id = {i.id}
                key = {i.id} 
                musicList = {musicList}
                setCurrentSong = {setCurrentSong} 
                setMusicData = {setMusicData}
                />
                ))}
            </div>
        </div>
    );
}

export default Library;