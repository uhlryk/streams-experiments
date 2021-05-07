const createReadableStream = require("../createReadableStream");

const readable = createReadableStream();
readable.pause();

let numChunks = 0;

readable.on("data", (data) => {
  console.log(`===Got chunk ${numChunks++}===`);
  console.log(data.toString("ascii"));
});

console.log("Start timeout");
setTimeout(() => {
  console.log("time passed no chunks");
}, 2000);
