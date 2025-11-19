
function initMap() {
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 4,
    center: {lat: 41.8386867, lng: -87.6276365},
  });
  const image =
    "C:\Users\juant\Documents\Repo\ITMD361\webdev_project3\images\x-flight.jpg";
  const beachMarker = new google.maps.Marker({
    position: { lat: 41.8386867, lng: -87.6276365 },
    map,
    icon: image,
  });
}

window.initMap = initMap;