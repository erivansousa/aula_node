var connection = require('../../config/dbConnection')();
module.exports = function(app){
    app.get('/noticias', function(req, res){
        connection.query('select * from noticias',function(erro, resultado){
            //função de callback
            res.render("noticias/noticias", {noticias : resultado});
        });
    });
}
