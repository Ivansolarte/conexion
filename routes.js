var db = require('./queries');

function http(){
    this.configurar = function(app){
        app.get('/usuario',function(solicitud,respuesta){
            db.seleccionar(respuesta);
        })

        app.get('/usuario/:id/',function(solicitud,respuesta){
            db.seleccionarId(solicitud.params.id, respuesta);
        })

        app.post('/usuario/', function(solicitud,respuesta){
            db.insertar(solicitud.body, respuesta);
        })

        app.put('/usuario/', function(solicitud,respuesta){
            db.actualizar(solicitud.body, respuesta);
        })

        app.delete('/usuario/:id/', function(solicitud, respuesta){
            db.borrar(solicitud.params.id, respuesta);
        })
    }
}
module.exports = new http();