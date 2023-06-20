function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function get12HourTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let am_pm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;

  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);

  return { hours, minutes, seconds, am_pm };
}

function get24HourTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);

  return { hours, minutes, seconds };
}

setInterval(() => {
  const { hours, minutes, seconds, am_pm = "" } = get24HourTime();
  console.clear();
  console.log(`${hours}:${minutes}:${seconds} ${am_pm}`);
}, 1000);
