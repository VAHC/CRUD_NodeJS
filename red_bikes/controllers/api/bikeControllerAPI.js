var Bike = require('../../models/bike');

exports.bike_list = function(req, res){
    res.status(200).json({
        bike: Bike.allBike
    });
}

exports.bike_create = function(req, res){
    var bike = new Bike(req.body.id, req.body.color, req.body.modelo);
    bike.ubicacion = [req.body.lat, req.body.lng];

    Bike.add(bike);

    res.status(200).json({
        bike: bike
    });
}

exports.bike_delete = function(req, res){
    Bike.removeById(req.body.id);
    res.status(204).send();
}