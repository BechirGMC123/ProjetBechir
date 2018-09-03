$('#myCarousel').carousel({
    interval:2000
});


function myMap() {
var mapProp= {
    center:new google.maps.LatLng(36.789520, 10.119743),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

