function initMap(){
    alert('it works');
}

google.maps.event.addDomListener(window, 'load', init);


function initMap() {
  const myLatLng = {lat: 41.8386867, lng: -87.6276365};
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}


window.initMap = initMap;