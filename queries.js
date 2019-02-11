var conexion = require('./connection');

function MetodosDB(){

    this.seleccionar = function(respuesta){
        conexion.obtener(function(er,cn){
            cn.query('select * from usuario',function(error,resultado) {
                cn.release();
                if (error) {
                    respuesta.send({estado:'Error'})
                }else{
                    respuesta.send(resultado);
                }
            })
        })
    }

    this.seleccionarId = function(id,respuesta){
        conexion.obtener(function(er,cn){
            cn.query('select * from usuario where id =?',id,function(error,resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado:'Error'});
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }

    this.insertar = function(datos,respuesta){
        conexion.obtener(function(er,cn){
            cn.query('insert into usuario set ?',datos,function(error,resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado:'Error'});
                } else {
                    respuesta.send({estado:'ok'});
                }
            })
        })
    }

    this.actualizar = function(datos, respuesta){
        conexion.obtener(function(er,cn){
            cn.query('update usuario set ? where id = ?',[datos, datos.id], function(error,resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'error'});
                } else {
                    respuesta.send({estado:'ok'});
                }
            } )
        })
    }

    this.borrar = function(id, respuesta){
        conexion.obtener(function(er,cn){
            cn.query('delete from usuario where id = ?', id, function(error, resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'error'});
                } else {
                    respuesta.send({estado:'ok'});
                }
            })
        })
    }

}
module.exports = new MetodosDB();