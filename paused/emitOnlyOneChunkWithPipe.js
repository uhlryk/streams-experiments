const CustomReadableStream = require("../CustomReadableStream");
const CustomWritableStream = require("../CustomWritableStream");

const readable = new CustomReadableStream();
const writable = new CustomWritableStream();
readable.pause();
readable.pipe(writable);
console.log("Start timeout");
setTimeout(() => {
  console.log("time passed send one chunk");
  readable.read();
}, 500);
