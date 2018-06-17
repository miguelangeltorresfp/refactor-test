"use strict";

const translate = require('./translator');
const co = require('co');

let text = "quiero trabajar con los mejores";
let targetLang = 'en';

/*
* co libray which is a wrapper around promises and generators
* https://github.com/tj/co
*/
co(function *(){
	try {
		let result = yield translate.translateText(text, targetLang);
		console.log(result[0]);
	} catch (err) {
    	console.error(err.message); // "boom"
	}
}).catch( (err) => {
	console.log(err);
});





