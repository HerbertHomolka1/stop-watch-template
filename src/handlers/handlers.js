import dom from '../dom.js';
import data from '../data.js';
import updateValues from '../utils/updateValues.js';

let { minutes, seconds, milliseconds } = data; 


let timerInterval; 

function startTimer() {
    timerInterval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        updateValues(minutes, seconds,milliseconds) ;
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval); 
}

function resetTimer() {
    seconds = 0;
    milliseconds = 0;
    minutes = 0;
    updateValues(minutes, seconds,milliseconds) ;
}



export { startTimer, stopTimer, resetTimer };
<<<<<<< HEAD

=======
>>>>>>> 981ae4250530d7570e75515736b1348e599706c3
