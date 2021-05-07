const { Readable, finished } = require("stream");
const stream = require("stream");

module.exports = function createReadableStream() {
  let numReads = 0;
  const readable = new stream.Readable({
    read() {
      this.push(` test_read_${numReads++} `);
    },
  });
  finished(readable, (err) => {
    if (err) {
      console.error("Stream encounter error", err);
    } else {
      console.log("stream finished");
    }
  });
  return readable;
};
