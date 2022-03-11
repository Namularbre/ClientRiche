$.fn.initMap = function (){
    //geocoder et map son déclarer en dehors de tout module, dans la vue du menu (/views/menu.html)
    geocoder = new google.maps.Geocoder();

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 100, lng: 1 },
        zoom: 6,
    });

    geocoder.geocode({ address: "9 rue Dalloz Limoges" }, function (result, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

                map.setCenter(result[0].geometry.location);
            }
        }
    });

    document.querySelectorAll('h2').forEach((address,i) => {
        geocoder.geocode({ address: address.innerText }, function (result, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    new google.maps.Marker({
                        position: {
                            lat : result[0].geometry.location.lat(),
                            lng : result[0].geometry.location.lng()
                        },
                        map,
                        title: adresse.innerText,
                        label: (i + 1).toString(),
                    });
                }
            }
        });
    })
}