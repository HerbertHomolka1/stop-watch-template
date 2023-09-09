import dom from "../dom.js";

function addZeros(num, numOfZeros) {
    num = String(num);
    let numbersOfLackingZeros = num.length - numOfZeros;
    
    if (numbersOfLackingZeros) {
        return '0'*numbersOfLackingZeros + num
    } else {
        return num
    }
}

function updateValues(minutes, seconds, milliseconds) {
  dom.minuteBlock.innerText = addZeros(minutes,2);
  dom.secondBlock.innerText = addZeros(seconds,2);
  dom.millisecondBlock.innerText = addZeros(milliseconds,3);
}

export default updateValues;
