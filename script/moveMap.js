$.fn.moveMap = function (container, user, success, error) {
    //geocoder et map son déclarer en dehors de tout module, dans la vue du menu (/views/menu.html)
    geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address }, function (result, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                map.setCenter(result[0].geometry.location);
                map.setZoom(16)
            }
        }
    });
}