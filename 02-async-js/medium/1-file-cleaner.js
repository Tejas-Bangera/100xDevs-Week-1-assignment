function fileCleaner(filePath) {
  const fs = require("fs");

  // Read the file
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    // Clean the data
    const cleanData = data
      .split(" ")
      .filter((word) => word !== "")
      .join(" ");

    // Write the data back to the file
    fs.writeFile(filePath, cleanData, "utf-8", (error) => {
      if (error) {
        console.log(error);
        return;
      }
    });
  });
}

fileCleaner("./02-async-js/medium/1-file.txt");
