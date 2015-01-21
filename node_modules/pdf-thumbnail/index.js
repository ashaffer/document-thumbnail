var gm = require('gm');

module.exports = function(file, opts, cb) {
  opts = opts || {};
  var out = fs.createWriteStream(opts.out || 'out.png');

  gm(file)
    .setFormat('png')
    .write(fs.createWriteStream(out), function(err) {
      cb && cb(err);
    });
};