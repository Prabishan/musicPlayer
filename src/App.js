import './styles/app.scss'
import Song from './components/Song';
import Player from './components/Player';
import {React,useState} from 'react';

//import music data
import Data from './util';


function App() {

  const [musicData, setMusicData] = useState(Data());
  const [currentSong, setCurrentSong] = useState(musicData[0]);

  return (
    <div className="App">

      <Song currentSong={currentSong}/>
      <Player />

    </div>
  );
}

export default App;
