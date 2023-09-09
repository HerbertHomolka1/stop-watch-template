import data from "../data.js";

function stopTimer() {
  if (data.timerInterval) {
    clearInterval(data.timerInterval);
    data.timerInterval = null;
  }
}

export default stopTimer;
