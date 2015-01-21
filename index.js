var convertToPdf = require('convert-to-pdf');
var pdfThumb = require('pdf-thumbnail');

module.exports = function docThumb(input, cb) {
  convertToPdf(input, function(err, buf) {
    err ? cb(err) : pdfThumb(buf, cb);
  });
};