const createReadableStream = require("../createReadableStream");

const readable = createReadableStream();
readable.pause();

let numChunks = 0;

pipeData(readable);

console.log("Start timeout");
setTimeout(() => {
  console.log("time passed request one chunk");
  readable.read();
}, 200);

function pipeData(readable) {
  readable.on("data", (data) => {
    console.log(`===GotAchunk ${numChunks++}===`);
    console.log(data.toString("ascii"));
    readable.removeAllListeners();
    readable.pause();
    
    if (numChunks < 50) {
      pipeData(readable);
    }
  });
}