var fileType = require('file-type');
var unoconv = require('unoconv');
var gm = require('gm');
var fs = require('fs');

var convertToPdf = ['doc', 'docx', 'ppt'];


function pdfThumbnail(pdf, output) {
  fs.writeFileSync('tmp.pdf', pdf);
  gm('tmp.pdf')
    .setFormat('png')
    .write(fs.createWriteStream(output), function(err) {
      if(err) return cb(err);
      cb();
    });
}

module.exports = function docThumb(input, output, cb) {
  var file = fs.readFileSync(str);
  var type = fileType(file);

  if(convertToPdf.indexOf(type.ext) !== -1) {
    unoconv(str, 'pdf', function(err, res) {
      if(err) return cb(err);
      pdfThumbnail(res, output, cb);
    });
  } else
    pdfThumbnail(file, output, cb);
};