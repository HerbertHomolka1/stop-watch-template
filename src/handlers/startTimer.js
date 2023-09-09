import data from '../data.js';
import updateValues from '../utils/updateValues.js';



function startTimer() {
    if (!data.timerInterval) {
    data.timerInterval = setInterval(() => {
        data.milliseconds += 10;
        if (data.milliseconds === 1000) {
            data.milliseconds = 0;
            data.seconds += 1;
        }
        if (data.seconds === 60) {
            data.seconds = 0;
            data.minutes += 1;
        }
        updateValues(data.minutes, data.seconds, data.milliseconds) ;
    }, 10);
}
}



export default startTimer;


