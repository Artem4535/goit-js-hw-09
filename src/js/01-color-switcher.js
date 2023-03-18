const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick)

stopBtn.disabled = true;

function onStartBtnClick() {
   timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute("disabled", "true");
  stopBtn.disabled = false;
}

function onStopBtnClick() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled')
  console.log('stop')
  stopBtn.disabled = true;
}

