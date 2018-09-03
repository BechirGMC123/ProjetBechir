function moveMapToBerlin(map){
  map.setCenter({lat:36.789484, lng: 10.119700});
  map.setZoom(14);
}
var berlinMarker = new H.map.Marker({
  lat:36.789484,
  lng:10.119700
});
map.addObject(berlinMarker);