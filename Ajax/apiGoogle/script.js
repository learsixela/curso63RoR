function iniciarMap(){
    var coord = {lat:-38.729679440945624 ,lng: -72.57276967888632};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}