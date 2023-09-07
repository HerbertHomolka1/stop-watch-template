import dom from "../dom.js";

function updateValues(minutes, seconds,milliseconds) {
    dom.minuteBlock.innerText = minutes;
    dom.secondBlock.innerText = seconds;
    dom.millisecondBlock.innerText = milliseconds;
}


export default updateValues;