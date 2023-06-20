let time = 1;

function startTimer() {
  setTimeout(() => {
    console.clear();
    console.log(time++);
    startTimer();
  }, 1000);
}

startTimer();
