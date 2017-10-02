/*var mymap = L.map('map').setView([37.1572788, -3.6020432,15], 15);

var map = L.map('map', {
        minZoom: 0,
        maxZoom: 0
    });

    var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: cartodbAttribution
    }).addTo(map);

    map.setView([0, 0], 0);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 15,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

L.marker([37.1572788, -3.6020432,15]).addTo(mymap)
            .bindPopup("<b> Bar Porras</b><br />37.159101 -3.6020432,15").openPopup();

L.marker([37.155790, -3.593677]).addTo(mymap)
            .bindPopup("<b> Cervecería ECU</b><br />37.155790 -3.593677").openPopup();
	
L.marker([37.160383, -3.596956]).addTo(mymap)
            .bindPopup("<b> Trending Tapas</b><br />37.160383, -3.596956").openPopup();

L.marker([37.153528, -3.598293]).addTo(mymap)
            .bindPopup("<b> Mar de Tapas</b><br />37.153528 -3.598293").openPopup();

L.marker([37.156673, -3.603373]).addTo(mymap)
            .bindPopup("<b> Mesón La Loma</b><br />37.156673 -3.603373").openPopup();

L.marker([37.153712, -3.591892]).addTo(mymap)
            .bindPopup("<b> La Cueva 1900</b><br />37.153712 -3.591892").openPopup();

L.marker([37.153471, -3.597990]).addTo(mymap)
            .bindPopup("<b> Restaurante, Cafetería Almudena</b><br />37.153471 -3.597990").openPopup();

L.marker([37.153348, -3.597654]).addTo(mymap)
            .bindPopup("<b> Cervecería Alhambra</b><br />37.153348 -3.597654").openPopup();


L.marker([37.155320, -3.593274]).addTo(mymap)
            .bindPopup("<b> Restaurante Madraza</b><br />37.155320 -3.593274").openPopup();


var popup = L.popup();

function onMapClick(e) {
        popup
	.setLatLng(e.latlng)
	.setContent("You clicked the map at " + e.latlng.toString())
	.openOn(mymap);
}

mymap.on('click', onMapClick);

var ggl = new L.Google('ROADMAP');

mymap.addLayer(ggl);*/

var mymap = L.map('map', {
	center: [37.1572788, -3.6020432,15],
        minZoom: 15,
        maxZoom: 18,
	zoom: 15,
        dragging: "false"
});
/*
var Bar = L.layerGroup();

var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
    */
// Crea capa openstreetmap
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
});

// Crea capa stamen lite
var lite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, ' +
    '<a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a> &mdash; ' +
    'Map data &copy <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
});

// Crea capa imagen de esri
var esri_img = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Crea capa OpenWeatherMap nubes
var owm_clouds = L.tileLayer('http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png', {
  opacity: 0.75, 
  attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'
});

// Crea capa OpenWeatherMap presión
var owm_pressure_cntr = L.tileLayer('http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'
});

/*var baseLayers = {
    "Escala de grises": grayscale,
    "Calles": streets,
    "OpenStreetMap": osm,
    "Stamen toner-lite": lite,
    "Satélite": esri_img
};

var overlays = {
	"Bar": Bar
};
*/
//mymap.dragging.disable(baseLayers);

//L.control.layers(baseLayers, overlays).addTo(mymap);

L.control.layers({ // Capas base
  "OpenStreetMap": osm,
  "Stamen toner-lite": lite,
  "Satélite": esri_img
}, { // Capas de superposición
    "OpenWeatherMap nubes": owm_clouds,
  "OpenWeatherMap presión": owm_pressure_cntr
}).addTo(mymap);

var popup = L.popup();