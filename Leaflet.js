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
        layers: [esri_img , Bar, Buss]
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
    metro = new LeafIcon({iconUrl: './img/metro.jpg'}),
    sn2 = new LeafIcon({iconUrl: './img/sn2.gif'}),
    lac = new LeafIcon({iconUrl: './img/lac.gif'}),
    u3 = new LeafIcon({iconUrl: './img/u3.gif'});
    
//L.marker([37.1572788, -3.6000432,15], {icon: restaurant}).bindPopup("Restaurante.").addTo(Bar);
//L.marker([37.1572788, -3.6028000,15], {icon: bus}).bindPopup("Parada de Bus").addTo(Buss);

L.marker([37.1572788, -3.6020432,15], {icon: restaurant}).addTo(Bar).bindPopup("<b> Bar Porras </b><b>Fritura de pescado. Precio:2,00€ </b><br />37.159101 -3.6020432,15");

L.marker([37.153348, -3.597654], {icon: restaurant}).addTo(Bar).bindPopup("<b> Cervecería Alhambra</b><b>Gambas al Pil Pil.</b><br />37.153348 -3.597654");

L.marker([37.157732, -3.599930], {icon: restaurant}).addTo(Bar).bindPopup('Olimpia <p> Tapa: 1,90€');

L.marker([37.1572788, -3.6020432], {icon: restaurant}).addTo(Bar).bindPopup("<b> Bar Porras </b><b>Fritura de pescado.</b> <b> Precio:2,00€ </b><br /> ");

L.marker([37.160383, -3.596956], {icon: restaurant}).addTo(Bar).bindPopup("<b> Trending Tapas</b><br />");

L.marker([37.155790, -3.593677], {icon: restaurant}).addTo(Bar).bindPopup("<b> Cervecería ECU</b><br />Precio Tapa: 2,00€ <b> Especialmente recomendado. ");

L.marker([37.160383, -3.596956], {icon: restaurant}).addTo(Bar).bindPopup("<b> Trending Tapas</b><br /> Precio: 2,00€ <b> Pinchitos, Albondigas");

L.marker([37.161539, -3.601490], {icon: restaurant}).addTo(Bar).bindPopup("<b> Cafetería Bar El Rondel <b> Precios económicos</b><br /> ");

L.marker([37.156673, -3.603373], {icon: restaurant}).addTo(Bar).bindPopup("<b> Mesón La Loma</b><br />37.156673 -3.603373");

L.marker([37.153712, -3.591892], {icon: restaurant}).addTo(Bar).bindPopup("<b> La Cueva 1900</b><br /> Precio: 2,20€");

L.marker([37.153471, -3.597990], {icon: restaurant}).addTo(Bar).bindPopup("<b> Restaurante, Cafetería Almudena</b><br /> Precio: 2,00€");

L.marker([37.153348, -3.597654], {icon: restaurant}).addTo(Bar).bindPopup("<b> Cervecería Alhambra</b> <b> Gambas al Pil Pil </b> <br>Precio: 2,10€</b>");

L.marker([37.159757, -3.595001], {icon: restaurant}).addTo(Bar).bindPopup("<b> Gran KiKi Tapas</b><br />Precio Tapa: 2,10€ </b> Papas al ajillo <b> Especialmente recomendado. ");

// Aquí creamos las ubicaciones de las paradas de autobus-metro
L.marker([37.165786, -3.598855], {icon: lac}).addTo(Buss).bindPopup("<b> PARADA DE AÚTOBUS</b><br /> LAC");
L.marker([37.161376, -3.600062], {icon: u3}).addTo(Buss).bindPopup("<b> PARADA DE AÚTOBUS</b><br /> 121 - U3");
L.marker([37.158866, -3.599823], {icon: u3}).addTo(Buss).bindPopup("<b> PARADA DE AÚTOBUS</b><br /> 121 - SN4 - U3");
L.marker([37.155251, -3.594497], {icon: metro}).addTo(Buss).bindPopup("<b> PARADA DE AÚTOBUS</b><br /> SN2 ");
L.marker([37.158403, -3.595267], {icon: sn2}).addTo(Buss).bindPopup("<b> PARADA DE METRO</b><br /> Plaza Andres Segovia ");
L.marker([37.153677, -3.600856], {icon: u3}).addTo(Buss).bindPopup("<b> PARADA DE AÚTOBUS</b><br /> SN4 - U3 ");



//L.marker([37.1572788, -3.6020432,15]).bindPopup('This is Littleton, CO.').addTo(Bar)