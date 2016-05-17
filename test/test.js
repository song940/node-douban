
const douban = require('../');


douban.celebrity(1017885, function(err, data){
	console.log(data);
});