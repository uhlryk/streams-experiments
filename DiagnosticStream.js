const { Transform } = require("stream");

module.exports = class DiagnosticStream extends Transform {
    constructor(options) {
        super(options);
        this.numChunks = 0;
    }

    _transform(chunk, encoding, callback) {
        console.log("==Diagnostic Stream==");
        console.log(`Num chunks ${++this.numChunks}`);
        console.log(`Body: '${chunk.toString('ascii')}'`);
        callback(null, chunk);

    }
}