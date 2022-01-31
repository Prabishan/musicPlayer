import './styles/app.scss'
import Song from './components/Song';
import Player from './components/Player';
import {React,useState} from 'react';

//import music data
import Data from './util';
//import library component
import Library from './components/Library';
import Nav from './components/Nav';


function App() {

  const [musicData, setMusicData] = useState(Data());
  const [currentSong, setCurrentSong] = useState(musicData[0]);
  const [isPlaying , setIsPlaying] = useState(false);
  const [isLibraryActive , setIsLibraryActive] = useState(false);

  return (
    <div className={`App ${isLibraryActive? 'library-selected':''}`}>
      <Nav isLibraryActive = {isLibraryActive} setIsLibraryActive = {setIsLibraryActive} />
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying = {setIsPlaying} setCurrentSong = {setCurrentSong} musicList = {musicData} setMusicData = {setMusicData}/>
      <Library musicList= {musicData} setCurrentSong={setCurrentSong} setMusicData = {setMusicData} isLibraryActive={isLibraryActive}/>
    </div>
  );
}

export default App;
