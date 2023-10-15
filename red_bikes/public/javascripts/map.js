var map = L.map('main_map').setView([-34.60122424,-58.3861497], 13);

L.tileLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy: <a href="https://www.openstreetmap.org/copyright">0penStreetMap</a> contributors'
}).addTo(map);

// L.marker([-34.6012424,-58.3861497]).addTo(map);
// L.marker([-34.596932,-58.3808287]).addTo(map);
// L.marker([-34.599564,-58.3778777]).addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bikes",
    success: function(result){
        console.log(result);
        result.bikes.forEach(function(bike){
            L.marker(bike.ubicacion, {title: bike.id}).addTo(map);
        });
    }
})