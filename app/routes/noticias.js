module.exports = function(app){
    app.get('/noticias', function(req, res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host :'localhost',
            user :'root',
            password : 'eriv35',
            database : 'aulanode'
        });

        connection.query('select * from noticias',function(erro, resultado){
            //função de callback
            res.send(resultado);
        });
        //res.render("noticias/noticias");
    });
}
