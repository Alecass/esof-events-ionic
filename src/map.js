const DATA  = require("./data.js")
const eventsPOI = DATA.map.geojson

module.exports = {
  name: 'Map',
  version: "0.1",
  render: function(){
//MAP INIT
console.log("MAP",L)
const myMap = L.map("mapView").setView([45.6493678,13.7756436],14)
console.log("MAP CUSTOM", myMap)
//aggiungo la basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', 
    attribution: 'Powered by Alessio Cassano',
    maxzoom: 17,

}).addTo(myMap)
//aggiungo i POI

var myIcon = L.icon({
  iconUrl: 'https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

L.geoJSON(eventsPOI,{icon: myIcon}).addTo(myMap)

//ascolto il cambio di tabs
const tabs = document.querySelector('#tabs')
//ricalcola la mappa
tabs.addEventListener('ionTabsDidChange', (event) => {
    if(event.detail.tab === 'map'){
        setTimeout(() => {
            myMap.invalidateSize()
        },100)
    }
})
  }
}