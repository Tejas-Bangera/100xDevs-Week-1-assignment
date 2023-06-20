function readFromFile(filePath) {
  const fs = require("fs");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data); // Output: content of the file
  });
}

function stopWatch(seconds) {
  let start = Date.now();
  const end = Date.now() + seconds * 1000;

  // Loop runs from start to end time
  while (start < end) {
    start = Date.now();
  }
}

stopWatch(10);
readFromFile("./02-async-js/easy/3-file.txt");
