    function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: 53.382790,
                lng: -7.707616
            }
        });

        var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        var locations = [{
            // Galway
            lat: 53.271361,
            lng: -9.056890
        }, {
            // Monaghan
            lat: 54.2457488,
            lng: -6.9885574
        }, {
            // Sligo
            lat: 54.2683987,
            lng: -8.4982825
        }];
        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        var markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });

    }
    