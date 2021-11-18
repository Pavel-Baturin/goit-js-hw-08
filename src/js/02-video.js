import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const onPlayer = function (data) {
    const currentTime = Number(data.seconds);
    localStorage.setItem("videoplayer-current-time", currentTime);
};

player.on('timeupdate', throttle(onPlayer, 1000));


const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
  player.setCurrentTime(savedCurrentTime).then(function(seconds) {
   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});
