import { v4 as uuidv4 } from 'uuid';

function musicData() {
    return [
        {
            id: uuidv4(),
            picture_url: 'https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg',
            song_name: 'In My Head',
            artist_name: 'Misha, NDO, Flozigg',
            active: true,
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
            id: uuidv4(),
            picture_url: 'https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg',
            song_name: 'la zona',
            artist_name: 'Maydee',
            active: false,
            color: ['#042C35', '#DA554F'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=27455'
        }, {
            id: uuidv4(),
            picture_url: 'https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg',
            song_name: 'Endless Beginnings',
            artist_name: 'Smile High, Teddy Roxpin',
            active: false,
            color: ['#042C35', '#DA554F'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=23337'
        }, {
            id: uuidv4(),
            picture_url: 'https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg',
            song_name: 'Cocoon',
            artist_name: 'Aviino',
            active: false,
            color: ['#042C35', '#DA554F'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=23314'
        }
    ];
}

export default musicData;