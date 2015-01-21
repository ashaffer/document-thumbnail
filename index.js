var fileType = require('file-type');
var unoconv = require('unoconv');
var gm = require('gm');
var fs = require('fs');

var convertToPdf = ['doc', 'docx', 'ppt'];


function pdfThumbnail(pdf, output, cb) {
  fs.writeFileSync('tmp.pdf', pdf);
  gm('tmp.pdf')
    .setFormat('png')
    .write(fs.createWriteStream(output), function(err) {
      if(err) return cb(err);
      cb();
    });
}

module.exports = function docThumb(input, output, cb) {
  var file = fs.readFileSync(input);
  var type = fileType(file);
  console.log('type', type);
  if(convertToPdf.indexOf(type.ext) !== -1) {
    unoconv(input, 'pdf', function(err, res) {
      if(err) return cb(err);
      pdfThumbnail(res, output, cb);
    });
  } else
    pdfThumbnail(file, output, cb);
};