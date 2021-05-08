const { Transform } = require("stream");

module.exports = class DiagnosticStream extends Transform {
    constructor(options) {
        super(options)
    }

    _transform(chunk, encoding, callback) {
        console.log("==Chunk==");
        callback(null, chunk);

    }
}