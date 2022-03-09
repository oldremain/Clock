const secondArrow = document.querySelector('.clock-seconds');
const minuteArrow = document.querySelector('.clock-minutes');
const hourArrow = document.querySelector('.clock-hour');

function setTime() {
  let date = new Date();

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let secondsDegree = (seconds / 60) * 360 + 90;
  secondArrow.style.transform = `rotate(${secondsDegree}deg)`;

  let minutesDegree = (minutes / 60) * 360 + 90;
  minuteArrow.style.transform = `rotate(${minutesDegree}deg)`;

  let hoursDegree = (hours / 12) * 360 + 90;
  hourArrow.style.transform = `rotate(${hoursDegree}deg)`;

  setTimeout(setTime, 1000);
}

setTime();
