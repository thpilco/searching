var Bar = L.layerGroup();
var Buss = L.layerGroup();
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
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

var mymap = L.map('map', {
	center: [37.1572788, -3.6020432,15],
        minZoom: 15,
        maxZoom: 18,
	zoom: 15,
        layers: [esri_img , Bar]
});

var baseLayers = {
    "Satélite": esri_img,
    "Escala de grises": grayscale,
    "Calles": streets,
    "OpenStreetMap": osm,
    "Stamen toner-lite": lite,
};

var overlays = {
	"Bar": Bar,
        "Bus": Buss
};

mymap.dragging.disable(baseLayers);

L.control.layers(baseLayers, overlays).addTo(mymap);

var LeafIcon = L.Icon.extend({
		options: {
			//shadowUrl: 'leaf-shadow.png',
			iconSize:     [38, 40],
			shadowSize:   [50, 64],
			iconAnchor:   [22, 94],
			shadowAnchor: [4, 62],
			popupAnchor:  [-3, -76]
		}
	});
        
var restaurant = new LeafIcon({iconUrl: './img/restaurant.png'}),
    bus = new LeafIcon({iconUrl: './img/bus.png'});
    
L.marker([37.1572788, -3.6000432,15], {icon: restaurant}).bindPopup("Restaurante.").addTo(Bar);
L.marker([37.1572788, -3.6028000,15], {icon: bus}).bindPopup("Parada de Bus").addTo(Buss);


var popup = L.popup();
//L.marker([37.1572788, -3.6020432,15]).bindPopup('This is Littleton, CO.').addTo(Bar)