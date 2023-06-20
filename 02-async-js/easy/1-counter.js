function startTimer() {
  let time = 1;
  setInterval(() => {
    console.clear();
    console.log(time++);
  }, 1000);
}

startTimer();
