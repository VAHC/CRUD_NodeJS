var Bike = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bike.prototype.toString = function(){
    return 'id: ' + this.id + " | color: " + this.color;
}

Bike.allBike = [];
Bike.add = function(aBike){
    Bike.allBike.push(aBike);
}

Bike.findById = function(aBikeId){
    var aBike = Bike.allBike.find(x => x.id == aBikeId);
    if(aBike)
        return aBike;
    else 
        throw new Error(`No existe una bicicleta con el id ${aBikeId}`);
}

Bike.removeById = function(aBikeId){
    // var aBike = Bike.findById(aBikeId);
    for (let i = 0; i < Bike.allBike.length; i++) {
        if(Bike.allBike[i].id == aBikeId){
            Bike.allBike.splice(i, 1);
            break;
        }        
    }
}

var a = new Bike(1, 'rojo', 'urbana', [-34.6012424,-58.3861497]);
var b = new Bike(2, 'blanca', 'urbana', [-34.596932,-58.3808287]);

Bike.add(a);
Bike.add(b);

module.exports = Bike;