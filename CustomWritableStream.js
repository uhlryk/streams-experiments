const { Writable } = require("stream");

module.exports = class CustomWritableStream extends Writable {
  constructor(options) {
    super(options);
    this.numChunks = 0;
  }
  _write(chunk, encoding, callback) {
    console.log(`===Got chunk ${this.numChunks++}===`);
    console.log(data.toString("ascii"));
  }
};
