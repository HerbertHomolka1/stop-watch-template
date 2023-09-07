import dom from '../dom.js';
import { startTimer, stopTimer, resetTimer } from '../handlers/handlers.js';


dom.startTimerBlock.addEventListener('click', startTimer);
dom.stopTimerBlock.addEventListener('click', stopTimer);
dom.resetTimerBlock.addEventListener('click', resetTimer);

