var srcRotas = './app/routes'

var app = require('./config/server');

var rotaNoticias = require(srcRotas+'/noticias')(app);
var rotaFormIncNoticias = require(srcRotas+'/formulario_inclusao_noticias')(app);
var rotaHome = require(srcRotas+'/home')(app);

/*app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia");
});*/

app.listen(3000, function(){
    console.log("servidor rodando com express!");
});