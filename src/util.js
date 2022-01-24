import { v4 as uuidv4 } from 'uuid';

function musicData() {
    return [
        {
            id: uuidv4(),
            picture_url: 'https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg',
            song_name: 'In My Head',
            artist_name: 'Misha, NDO, Flozigg',
            active: false,
            color: ['#152F3C', '#7C3A41'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=28878'
        }, {
            id: uuidv4(),
            picture_url: 'https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/617a7ed058ad2c144e5e1756_chillhop-e2021-04-winter-album-digital-cover-v01-jpg-p-500.png',
            song_name: 'Happy In My Mind',
            artist_name: 'Otxhello',
            active: false,
            color: ['#042C35', '#DA554F'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=24701'
        }, {

        }, {

        }, {

        }
    ];
}

export default musicData;