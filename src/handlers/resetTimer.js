import data from '../data.js';
import updateValues from '../utils/updateValues.js';

function resetTimer() {
 
    data.seconds = 0;
    data.milliseconds = 0;
    data.minutes = 0;

    updateValues(data.minutes, data.seconds, data.milliseconds);
   
}

export default resetTimer;
