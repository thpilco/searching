window.onload = function(){
var Bar = L.layerGroup();
var Bus = L.layerGroup();
var Icon = L.Icon.extend({
        iconSize:     [10, 10], //Tamaño del icono
        iconAnchor:   [20, 40], //Posición del icono respecto al marcador
        popupAnchor:  [0, 20] //Posición del popup respecto al icono
    });
var busIcon = new Icon({iconUrl: 'img/marker-rojo.png'});
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';


var streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

// Crea capa openstreetmap
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
});


// Crea capa imagen de esri
var esri_img = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});


//Aquí vamos a crear el mapa. 
var mymap = L.map('map', {
    center: [37.1572788, -3.6020432],
        minZoom: 15,
        maxZoom: 18,
       zoom: 15,
        layers: [esri_img , Bar]
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 20,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

var baseLayers = {
    "Satélite": esri_img,
    "Calles": streets,
    "OpenStreetMap": osm
};

var overlays = {
	"Bar": Bar,
    "Bus": Bus
};


mymap.dragging.disable(baseLayers);

L.control.layers(baseLayers, overlays).addTo(mymap);
var popup = L.popup();

L.marker([37.1572788, -3.6020432,15]).bindPopup("<b> Bar Porras </br> Fritura de pescado. Precio:2,00€ </b><br />").addTo(Bar);

L.marker([37.153348, -3.597654]).bindPopup("<b> Cervecería Alhambra <br>Gambas al Pil Pil.</b><br />").addTo(Bar);


L.marker([37.157732, -3.599930]).bindPopup('<b>Olimpia</b> <br> Tapa: 1,90€').addTo(Bar)

L.marker([37.1572788, -3.6020432]).addTo(Bar).bindPopup("<b> Bar Porras </b><b>Fritura de pescado.</b> <b> Precio:2,00€ </b><br /> ");

L.marker([37.160383, -3.596956]).addTo(Bar).bindPopup("<b> Trending Tapas</b><br />");

L.marker([37.155790, -3.593677]).addTo(Bar).bindPopup("<b> Cervecería ECU</b><br />Precio Tapa: 2,00€ <b> Especialmente recomendado. </b> ");


L.marker([37.160383, -3.596956]).addTo(Bar).bindPopup("<b> Trending Tapas</b><br /> Precio: 2,00€ <b> Pinchitos, Albondigas </b>");

L.marker([37.161539, -3.601490]).addTo(Bar).bindPopup("<b> Cafetería Bar El Rondel <br> Precios económicos</b><br /> ");

L.marker([37.156673, -3.603373]).addTo(Bar).bindPopup("<b> Mesón La Loma</b><br />");

L.marker([37.153712, -3.591892]).addTo(Bar).bindPopup("<b> La Cueva 1900</b><br /> Precio: 2,20€");

L.marker([37.153471, -3.597990]).addTo(Bar).bindPopup("<b> Restaurante, Cafetería Almudena</b><br /> Precio: 2,00€");

L.marker([37.153348, -3.597654]).addTo(Bar).bindPopup("<b> Cervecería Alhambra</br> Gambas al Pil Pil <br>Precio: 2,10€</b>");

L.marker([37.159757, -3.595001]).addTo(Bar).bindPopup("<b> Gran KiKi Tapas<br />Precio Tapa: 2,10€ </b> Papas al ajillo <b>Especialmente recomendado.</b> ");

// Aquí creamos las ubicaciones de las paradas de autobus-metro
L.marker([37.165786, -3.598855], {icon: busIcon}).addTo(Bus).bindPopup("<b> PARADA DE AÚTOBUS<br /> LAC</b> ");
L.marker([37.161376, -3.600062], {icon: busIcon}).addTo(Bus).bindPopup("<b> PARADA DE AÚTOBUS<br /> 121 - U3</b> ");
L.marker([37.158866, -3.599823], {icon: busIcon}).addTo(Bus).bindPopup("<b> PARADA DE AÚTOBUS<br /> 121 - SN4 - U3</b> ");
L.marker([37.155251, -3.594497], {icon: busIcon}).addTo(Bus).bindPopup("<b> PARADA DE AÚTOBUS<br /> SN2</b> ");
L.marker([37.158403, -3.595267], {icon: busIcon}).addTo(Bus).bindPopup("<b> PARADA DE AÚTOBUS<br /> Metropolitano. Plaza Andres Segovia </b> ");
L.marker([37.153677, -3.600856], {icon: busIcon}).addTo(Bus).bindPopup("<b> PARADA DE AÚTOBUS<br /> SN4 - U3 </b> ");
}