    function initMap() {

        var styledMapType = new google.maps.StyledMapType(
            [
                { "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] },
                { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] },
                { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{ "color": "#c9b2a6" }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#dcd2be"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#ae9e90"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#93817c"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#a5b076"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#447530"
                    }]
                },
                {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f1e6"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#fdfcf8"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f8c967"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#e9bc62"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e98d58"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#db8555"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#806b63"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8f7d77"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#ebe3cd"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#b9d3c2"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#92998d"
                    }]
                }
            ], { name: "Styled Map" });


        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: 53.382790,
                lng: -7.707616
            },
            mapTypeControlOptions: {
                mapTypeIds: ['satellite', 'styled_map']
            }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        var locations = [
            ["galway", 53.271361, -9.056890],
            ["Monaghan", 54.2457488, -6.9885574],
            ["Sligo", 54.2683987, -8.4982825],
            ["Killarney", 52.0599, -9.5044],
            ["Donegal", 54.9681842, -7.7611702]
        ];

        var content = [
            ["<div>" +
                "<h3>Galway</h3>" +
                "<img src='#' width='150 ' height='100 ' alt=''>" +
                "<p></p>" +
                "<a href='#'></a>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Monaghan</h3>" +
                "<img src='#' width='150 ' height='100 ' alt=''>" +
                "<p></p>" +
                "<a href='#'></a>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Sligo</h3>" +
                "<img src='#' width='150 ' height='100 ' alt=''>" +
                "<p></p>" +
                "<a href='#'></a>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Killarney</h3>" +
                "<img src='#' width='150 ' height='100 ' alt=''>" +
                "<p></p>" +
                "<a href='#'></a>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Donegal</h3>" +
                "<img src='#' width='150 ' height='100 ' alt=''>" +
                "<p></p>" +
                "<a href='#'></a>" +
                "</div>"
            ],
        ];
        // Initialise Markers on Map 
        for (i = 0; i < locations.length; i++) {
            var position = new google.maps.LatLng(locations[i][1], locations[i][2]);

            markers = new google.maps.Marker({
                position: position,
                map: map,
                title: locations[i][0]
            });

            var infowindow = new google.maps.InfoWindow({
                content: content[i][0]
            });

        // Add info window to marker    
            google.maps.event.addListener(markers,'click', (function(markers, i) {
                return function() {
                infoWindow.setContent(content[i][0]);
                infoWindow.open(map, markers);
                 };
            }));
        }
        var markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
    }
    