//console.log('testando saida node!');

var http = require('http');

http.createServer(function(req, resp){
    resp.end("<html><body>Pertal de noticias</body></html>");
}).listen(3000);