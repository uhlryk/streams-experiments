const createReadableStream = require("../createReadableStream");

const readable = createReadableStream();
readable.pause();

let numChunks = 0;

readable.on("data", (data) => {
  console.log(`===Got chunk ${numChunks++}===`);
  console.log(data.toString("ascii"));

  if (numChunks < 3) {
    console.log("wait some time before requesting for next chunk");
    setTimeout(() => {
      console.log("time passed request one chunk");
      readable.read();
    }, 50);
  }
});

console.log("Start timeout");
setTimeout(() => {
  console.log("time passed request one chunk");
  readable.read();
}, 2000);