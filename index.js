var convertToPdf = require('convert-to-pdf');
var pdfThumb = require('pdf-thumbnail');
var fs = require('fs');

module.exports = function docThumb(input, output, cb) {
  convertToPdf(input)
    .pipe(pdfThumb())
    .pipe(fs.createWriteStream(output))
    .on('error', cb)
    .on('end', cb);
};