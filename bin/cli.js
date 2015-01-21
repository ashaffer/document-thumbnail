var docThumb = require('../');
var idx = process.argv[0] === 'node' || process.argv[0] === 'nodejs' ? 2 : 1;
var input = process.argv[idx];
var output = process.argv[idx + 1];

console.log('in out', process.argv, idx, input, output);


docThumb(input, output, function(err) {
  if(err) throw err;
  console.log('completed!');
});