
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {lat: 41.8386867, lng: -87.6276365},
    mapId: 
  });
}

window.initMap = initMap;