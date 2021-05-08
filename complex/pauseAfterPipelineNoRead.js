const { pipeline } = require("stream");
const CustomReadableStream = require("../CustomReadableStream");
const DiagnosticStream = require("../DiagnosticStream");
const CustomWritableStream = require("../CustomWritableStream");

const readable = new CustomReadableStream();
readable.pause();
const writable = new CustomWritableStream();
const diagnostic = new DiagnosticStream();

pipeline(readable, diagnostic, writable, (err) => {
    if(err) {
        console.error("Stream error", err);
    } else {
        console.log("finishe");
    }
})
readable.pause();