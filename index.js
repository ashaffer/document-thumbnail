var convertToPdf = require('convert-to-pdf');
var pdfThumb = require('pdf-thumbnail');
var fs = require('fs');

module.exports = function docThumb(input, output, cb) {
  convertToPdf(input)
    .on('error', cb)
    .pipe(pdfThumb())
    .on('error', cb)
    .pipe(fs.createWriteStream(output))
    .on('error', cb)
    .on('end', cb);
};