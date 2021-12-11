setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function Clock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  let arr = [secondsRatio, minutesRatio, hoursRatio];
  return arr;
}

function setClock() {
  const times = Clock();
  setRotation(secondHand, times[0])
  setRotation(minuteHand, times[1])
  setRotation(hourHand, times[2])
  bgColor();
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
function bgColor() {
  let times = Clock();
  let second = Math.floor(Math.random() * times[0] * 255);
  let minute = Math.floor(Math.random() * times[1] * 255);
  let hour = Math.floor(Math.random() * times[2] * 255);
  console.log(second, minute, hour)
  document.body.style.backgroundColor = 'rgb(' + second + ',' + minute + ',' + hour + ')';
  document.getElementById('color-box').value=second;

}

setClock();