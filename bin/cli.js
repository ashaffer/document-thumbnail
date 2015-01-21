var docThumb = require('../');
var input = process.argv[1];
var output = process.argv[2];

console.log('in out', input, output);


docThumb(input, output, function(err) {
  if(err) throw err;
  console.log('completed!');
});