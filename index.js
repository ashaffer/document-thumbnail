var fileType = require('file-type');
var unoconv = require('unoconv');
var gm = require('gm');
var fs = require('fs');

var convertToPdf = ['doc', 'docx', 'ppt'];


function pdfThumbnail(pdf) {
  fs.writeFileSync('tmp.pdf', pdf);
  gm('tmp.pdf')
    .setFormat('png')
    .write(fs.createWriteStream('tmp.png'), function(err) {
      console.log('err', err);
    });
}

module.exports = function docThumb(str, cb) {
  var file = fs.readFileSync(str);
  var type = fileType(file);

  if(convertToPdf.indexOf(type.ext) !== -1) {
    unoconv(str, 'pdf', function(err, res) {
      if(err) throw err;
      pdfThumbnail(res);
    });
  } else
    pdfThumbnail(file);
};