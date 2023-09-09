import dom from '../dom.js';
import stopTimer from '../handlers/stopTimer.js';
import startTimer from '../handlers/startTimer.js';
import resetTimer from '../handlers/resetTimer.js';


dom.startTimerBlock.addEventListener('click', startTimer);
dom.stopTimerBlock.addEventListener('click', stopTimer);
dom.resetTimerBlock.addEventListener('click', resetTimer);

