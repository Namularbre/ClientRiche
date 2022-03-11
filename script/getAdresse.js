$.fn.getAdresse = function () {
    //geocoder et map son déclarer en dehors de tout module, dans la vue du menu (/views/menu.html)
    geocoder = new google.maps.Geocoder();
    let resultat = {
        lat: null,
        lng: null,
    };
    return resultat;
}