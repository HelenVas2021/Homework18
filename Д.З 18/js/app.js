
const numbersPicture = {
  0: 'image/ziro.png',
  1: 'image/one.png',
  2: 'image/two.png',
  3: 'image/three.png',
  4: 'image/four.png',
  5: 'image/five.png',
  6: 'image/six.png',
  7: 'image/seven.png',
  8: 'image/eight.png',
  9: 'image/nine.png',
}


let previousHours = 0;
let previousMinutes = 0;
let previousSeconds = 0;

function showClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hLastNum = hours % 10;
  let hFirstNum = (hours - hLastNum) / 10;
  let minLastNum = minutes % 10;
  let minFirstNum = (minutes - minLastNum) / 10;
  let secLastNum = seconds % 10;
  let secFirstNum = (seconds - secLastNum) / 10;

  const firstSecondsNum = document.querySelector('.firstSecondsNum');
  const secondSecondsNum = document.querySelector('.secondSecondsNum');
  const secondMinuteNum = document.querySelector('.secondMinuteNum');
  const firstMinuteNum = document.querySelector('.firstMinuteNum');
  const secondHourNum = document.querySelector('.secondHourNum');
  const firstHourNum = document.querySelector('.firstHourNum');


  if (hours < 10) {
    firstHourNum.setAttribute('src', numbersPicture[hFirstNum]);
  }
  if (minutes < 10) {
    firstMinuteNum.setAttribute('src', numbersPicture[minFirstNum]);
  }
  if (seconds < 10) {
    firstSecondsNum.setAttribute('src', numbersPicture[secFirstNum]);
  }

  if (hours != previousHours) {
    firstHourNum.setAttribute('src', numbersPicture[hFirstNum]);
    secondHourNum.setAttribute('src', numbersPicture[hLastNum]);
  }
  if (minutes != previousMinutes) {
    firstMinuteNum.setAttribute('src', numbersPicture[minFirstNum]);
    secondMinuteNum.setAttribute('src', numbersPicture[minLastNum]);
  }
  if (seconds != previousSeconds) {
    firstSecondsNum.setAttribute('src', numbersPicture[secFirstNum]);
    secondSecondsNum.setAttribute('src', numbersPicture[secLastNum]);
  }

  previousHours = hours;
  previousMinutes = minutes;
  previousSeconds = seconds;
}

setInterval(showClock, 1000);
showClock();


