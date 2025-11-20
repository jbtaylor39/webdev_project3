function initMap() {

  const centerMap = { lat: 41.8386867, lng: -87.6276365 }

  const mapOptions = {
    center: centerMap,
    zoom: 10
  }

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}