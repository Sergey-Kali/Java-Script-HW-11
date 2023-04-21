const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const nextYear = document.querySelector(".next-year");

nextYear.textContent = new Date().getFullYear() + 1;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  days.textContent = value.days.toString().padStart(2, "0");
  hours.textContent = value.hours.toString().padStart(2, "0");
  minutes.textContent = value.minutes.toString().padStart(2, "0");
  seconds.textContent = value.seconds.toString().padStart(2, "0");
}

const nextNewYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

setInterval(() => {
  const currentTime = new Date().getTime();
  const timeLeft = nextNewYear - currentTime;
  addLeadingZero(convertMs(timeLeft));
}, 1000);
