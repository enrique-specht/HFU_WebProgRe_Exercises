let fs = require("fs");
let fs_async = require("fs").promises;

let text;

// 1
fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data.toString());
  text = data.toString();

  // 2
  fs.writeFile("./new-text.txt", text, (err) => {
    err ? console.log(err) : console.log("Erfolgreich");
  });
});

// 3
const readAndWriteFileAsync = async () => {
  await fs_async.readFile("./text.txt").then((data) => {
    console.log(data.toString());
    text = data.toString();
  });

  fs_async
    .writeFile("./new-text-async.txt", text)
    .then(() => {
      console.log("Erfolgreich");
    })
    .catch((err) => {
      console.log(err);
    });
};

readAndWriteFileAsync();
