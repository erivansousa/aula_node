var express = require('express');
var app = express();
app.set('view engine', 'ejs');

/**O modulo server.js está sendo usado dentro do arquivo app.js, 
 * então todo caminho vai iniciar no nível do arquivo app.js 
 * ('./' aponta para o nível do arquivo que está usando o comando) 
 */
app.set('views', './app/views');

module.exports = app;