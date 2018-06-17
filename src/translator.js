"use strict";

const Translate = require('@google-cloud/translate');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './translator.conf.json',
});


/*
* @return a promise
*/
TranslateService.translateText = function (content, targetLang) {

  return translate.translate( content, targetLang );

}


module.exports = TranslateService;
