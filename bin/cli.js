var docThumb = require('../');
var idx = process.argv[0] === 'node' || process.argv[0] === 'nodejs' ? 2 : 1;
var input = process.argv[idx];
var output = process.argv[idx + 1];
var fs = require('fs');

docThumb(input, function(err, buf) {
  if(err) throw err;
  fs.writeFileSync(output, buf);
  console.log('completed!');
});