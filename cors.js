

function AllowCrossDomain(){
    this.permisos = function(req, res, next){
        res.header('Access-Control-Allow-Origin','http://localhost:4200');
        res.header('Access-Control-Allow-Headers','Content-Type');
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
        next();
    }
}
module.exports = new AllowCrossDomain();