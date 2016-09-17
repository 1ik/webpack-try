require('./styles/main.css');
var tasks = require('./scripts/tasks.js');

require('hash-change').on('change', function(hash) {
	console.log(hash);
});
