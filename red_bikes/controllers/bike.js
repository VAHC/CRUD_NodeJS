var Bike = require('../models/bike');

exports.bike_list = function(req, res){
    res.render('bikes/index', {bikes: Bike.allBike});
}

exports.bike_create_get = function(req, res){
    res.render('bikes/create');
}

exports.bike_create_post = function(req, res){
    var bike = new Bike(req.body.id, req.body.color, req.body.modelo);
    bike.ubicacion = [req.body.lat, req.body.lng];
    Bike.add(bike);

    res.redirect('/bikes');
}

exports.bike_update_get = function(req, res){
    var bike = Bike.findById(req.params.id);

    res.render('bikes/create');
}

exports.bike_update_post = function(req, res){
    var bike = Bike.findById(req.params.id);
    bike.id = req.body.id;
    bike.color = req.body.color;
    bike.modelo = req.body.modelo;
    bike.ubicacion = [req.body.lat, req.body.lng];
    
    res.redirect('/bikes');
}

exports.bike_delete_post = function(req, res){
    Bike.removeById(req.body.id);

    res.redirect('/bikes');
}