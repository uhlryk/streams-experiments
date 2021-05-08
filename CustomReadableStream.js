const { Readable, finished } = require("stream");

module.exports = class CustomReadableStream extends Readable {
  constructor(options) {
    super(options);
    this.numReads = 0;
  }
  _read() {
    this.push(` test_read_${this.numReads++} `);

  }
};
