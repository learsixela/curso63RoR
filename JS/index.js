let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -38.7415158, lng: -72.6212797 },

        zoom: 15,
    });

    var marker = new google.maps.Marker({
        title: 'Estadio',
        map: map,
        position: { lat: -38.7415158, lng: -72.6212797 }

    });
}