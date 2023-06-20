function writeToFile(filePath, content) {
  const fs = require("fs");

  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File saved successfully.");
  });
}

writeToFile(
  "./02-async-js/easy/3-file.txt",
  "Did some overwrite on this file. Cheers!"
);
