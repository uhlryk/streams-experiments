const { Writable } = require("stream");

module.exports = class CustomWritableStream extends Writable {
  constructor(options) {
    super(options);
    this.numChunks = 0;
  }
  _write(chunk, encoding, callback) {
    if (chunk) {
      console.log(`===Got chunk ${this.numChunks++}===`);
      console.log(chunk.toString("ascii"));
    } else {
        console.log(`===no chunks===`);
    }
  }
};
