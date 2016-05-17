'use strict';
const cheerio = require('cheerio');
const request = require('superagent');

const DOUBAN_MOVIE_URL = 'https://movie.douban.com';

/**
 * @param  {[type]}
 * @param  {Function}
 * @return {[type]}
 */
exports.celebrity = function celebrity(id, callback){
	request.get(`${DOUBAN_MOVIE_URL}/celebrity/${id}`, function(err, res){
		let $ 		= cheerio.load(res.text);
		let name 	= $('#content > h1').text();
		let pic  	= $('#headline .nbg').attr('href');
		let intro   = $('#intro .all').text().trim();
		let info  	= $('#headline .info li');
		let gender  	   = info.slice(0,1).text().replace(/性别:/, '').trim();
		let constellation  = info.slice(1,2).text().replace(/星座:/, '').trim();
		let birthday  	   = info.slice(2,3).text().replace(/出生日期:/, '').trim();
		let birthplace     = info.slice(3,4).text().replace(/出生地:/, '').trim();
		let occupation	   = info.slice(4,5).text().replace(/职业:/, '').trim();

		callback(err, {
			name   		 : name			, 
			gender 		 : gender		, 
			birthday	 : birthday		, 
			birthplace	 : birthplace	, 
			occupation	 : occupation	,
			constellation: constellation, 
			intro		 : intro
		});
	})
};