const { finished } = require("stream");
const CustomReadableStream = require("./CustomReadableStream");

module.exports = function createReadableStream() {
  const readable = new CustomReadableStream();
  finished(readable, (err) => {
    if (err) {
      console.error("Stream encounter error", err);
    } else {
      console.log("stream finished");
    }
  });
  return readable;
};
