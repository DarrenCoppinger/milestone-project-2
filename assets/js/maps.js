    function initMap() {

        var styledMapType = new google.maps.StyledMapType(
            [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ebe3cd"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#523735" //dark brown
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f1e6" //cream
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#c9b2a6"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [{
                        "visibility": "off"
                    }]
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
                        "color": "#ae9e90" //grey
                    }]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae" //coffee
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
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
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
                    "featureType": "poi.business",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#a5b076" //cream green
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#447530" //dark green
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
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
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
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
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
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
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
            // scaleControl: true,
            center: {
                lat: 53.382790,
                lng: -7.707616
            },
            // mapTypeControlOptions: false
            mapTypeControlOptions: {
                mapTypeIds: ['satellite', 'styled_map'],
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            }
        });



        var allIreland = new google.maps.LatLngBounds(
            new google.maps.LatLng(51.081482, -10.762186),
            new google.maps.LatLng(55.343419, -5.397540));

        map.fitBounds(allIreland);

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        // Autocomplete Start

        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');

        // Restrict Search to just Ireland

        var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input, {
            bounds: allIreland,
            strictBounds: true
        });
        // var autocomplete = new google.maps.places.Autocomplete(input);
        // **** var autocomplete = new google.maps.places.Autocomplete(input, options);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', map);

        // Set the data fields to return when the user selects a place.
        autocomplete.setFields(
            ['address_components', 'geometry', 'icon', 'name']);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var hmarker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
            infowindow.close();
            hmarker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            // If the place has a geometry this will present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            }
            else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            hmarker.setPosition(place.geometry.location);
            hmarker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            infowindowContent.children['place-icon'].src = place.icon;
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-address'].textContent = address;
            infowindow.open(map, hmarker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
            var radioButton = document.getElementById(id);
            radioButton.addEventListener('click', function() {
                autocomplete.setTypes(types);
            });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        setupClickListener('changetype-establishment', ['establishment']);
        setupClickListener('changetype-geocode', ['geocode']);

        // Autocomplete end

        var locations = [
            ["Druid Theatre Company - Mick Lally Theatre", 53.2709613, -9.0531041],
            ["Nora Barnacle's House", 53.2730267, -9.0546251],
            ["Thoor Ballylee Yeats Tower", 53.1031496, -8.7750506],
            ["Cathaoir Synge", 53.0843409, -9.6124936],
            ["Lake Isle of Innisfree", 54.2465530, -8.358062],
            ["Benbulbin", 54.3666661, -8.4788218],
            ["Lissadell House", 54.3467148, -8.583131],
            ["Yeats Building", 54.2721304, -8.4772024],
            ["Kerry Writers Museum", 52.4447289, -9.4862804],
            ["John B. Keane's Pub", 52.4470431, -9.4856969],
            ["Glenties Cemetery - Resting place of Playwright Brian Friel", 54.7866719, -8.2833222],
            ["James Joyce House", 53.3463009, -6.2838749],
            ["James Joyce Tower & Museum", 53.288654, -6.1158117],
            ["James Joyce Centre", 53.3542008, -6.2599808],
            ["Oscar Wilde House", 53.341214, -6.2503741],
            ["Kilcolman Castle", 52.250380, -8.610485]
        ];

        var content = [
            ["Druid Theatre Company - Mick Lally Theatre", "<div>" +
                "<h3>Mick Lally Theatre - Druid Theatre Company</h3>" +
                "<p>Druid was founded in Galway in 1975 by Garry Hynes, Marie Mullen and Mick Lally, the first professional Irish theatre company outside of Dublin.</p>" +
                "<p>Over the years, Druid has worked with actors, designers, directors, writers, producers and administrators, many of whom have each gone on to play leading roles in Irish and international theatre and all of whom have contributed to the shape of the company. The core staff is based at our offices on Flood Street, Galway.</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://www.druid.ie/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/mick-lally-theatre.jpg' class='rounded mx-auto d-block' alt='Mick Lally Theatre image'></p>" +
                "</div>"
            ],
            ["Nora Barnacle's House", "<div>" +
                "<h3>Nora Barnacle's House</h3>" +
                "<p>This terrace house is located in Galway City opposite of St Nicholas Church. It was built in the late 1800s and was home to James Joyce’s wife, Nora Barnacle. Joyce also spent considerable time here when he was writing in the 20th century. The building has been restored, but it’s admittedly showing some signs of wear.</p>" +
                "<p>Joyce used the house and the tragic tale of Michael Feeney based a section the final short story in Dubliners,'The Dead'. Michael Feeney wason these incidents. Barnacle and Feeney fell in love as teenager before he of typhoid and pneumonia.</p>" +
                "<p>For more information <a class='font-weight-bold' href='http://www.irishtourist.com/details/nora-barnacle-house-museum.shtml' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/nora-barnacles-house.jpg' class='rounded mx-auto d-block' alt='Nora Barnacles House image'></p>" +
                "</div>"
            ],
            ["Thoor Ballylee Yeats Tower", "<div>" +
                "<h3>Thoor Ballylee Yeats Tower</h3>" +
                "<p>This thirteenth century Hiberno-Norman tower is closely associated with the poet WB Yeats</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://yeatsthoorballylee.org/visit/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/thoor-ballylee-yeats-tower.jpg' class='rounded mx-auto d-block' alt='Thoor Ballylee Yeats Tower image'></p>" +
                "</div>"
            ],
            ["Cathaoir Synge", "<div>" +
                "<h3>Cathaoir Synge</h3>" +
                "<p>Cathaoir Synge or 'Synge Chair' was a location used to write by the writer J.M. Synge who had a long association with the Aran Islands.  He lived on Inis Meáin for considerable time between 1898 and 1902 and drew inspiration from the island culture. Many of Synge most famous works, e.g. ‘Riders To The Sea’ and ‘The Playboy of The Western World were writtten at this spot.</p>" +
                "<p>For more information <a class='font-weight-bold' class='font-weight-bold' href='https://www.aranislands.ie/inis-meain-island/inis-meain-island-churches-celtic-sites/cathaoir-synge' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/cathaoir-synge.jpg' class='rounded mx-auto d-block' alt='Cathaoir image'></p>" +
                "</div>"
            ],
            ["Lake Isle of Innisfree", "<div>" +
                "<h3>Lake Isle of Innisfree</h3>" +
                "<p>The Lake Isle of Innisfree a beautiful island just off the south coast of Lough Gill. It was the inspiration for the peom by WB Yeats of the same name.</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://sligotours.ie/locations/lake-isle-of-innisfree/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/lake-isle-of-innisfree.jpg' class='rounded mx-auto d-block' alt='Lake Isle of Innisfree image'></p>" +
                "</div>"
            ],
            ["Benbulbin", "<div>" +
                "<h3>Ben bulbin</h3>" +
                "<p>Ben bulbin, sometimes spelled Benbulbin or Benbulben, is a large flat-topped rock formation in County Sligo, Ireland. It is part of the Dartry Mountains, in an area sometimes called 'Yeats Country'. Benbulbin is featured in WB Yeats peom 'Under Ben Bulben'.</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://www.discoverireland.ie/Arts-Culture-Heritage/benbulben/87761' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p>To sign up to a local walking tour of the mountain and surrounding forrests <a href='https://sligowalks.ie/walks/benbulbin-gortarowey-looped-walk/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/benbulbin.jpg' class='rounded mx-auto d-block' alt='Benbulbin image'></p>" +
                "</div>"
            ],
            ["Lissadell House", "<div>" +
                "<h3>Lissadell House</h3>" +
                "<p>Lissadell House is a neo-classical Greek revivalist style country house located in County Silgo. </p>" +
                "<p>The house was a holiday retreat of WB Yeats who imortalised it with the opening lines of his poem: 'In Memory of Eva Gore-Booth and Con Markiewicz' </p>" +
                "<p>For more information <a class='font-weight-bold' href='http://lissadellhouse.com/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/lissadell-house.jpg' class='rounded mx-auto d-block' alt='Lissadell House image'></p>" +
                "</div>"
            ],
            ["Yeats Building", "<div>" +
                "<h3>Yeats Building - Yeats Society</h3>" +
                "<p>The Yeats Building is centrally located on Hyde Bridge, in Sligo Town Centre. This beautiful building is the home of the Yeats Society, Sligo since 1973.</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://www.yeatssociety.com/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/yeats-building.jpg' class='rounded mx-auto d-block' alt='Yeats Building image'></p>" +
                "</div>"
            ],
            ["Kerry Writers Museum", "<div>" +
                "<h3>Kerry Writers Museum</h3>" +
                "<p>Kerry Writers’ Museum collects, safeguards, holds in trust, displays and interprets a variety of material and objects relating to the rich literary heritage of County Kerry, and the cultural, social & political heritage of Listowel & North Kerry.</p>" +
                "<p>For more information <a class='font-weight-bold' href='http://www.kerrywritersmuseum.com' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/kerry-writers-museum.jpg' class='rounded mx-auto d-block' alt='Kerry Writers Museum image'></p>" +
                "</div>"
            ],
            ["John B. Keane's Pub", "<div>" +
                "<h3>John B Keane's Pub</h3>" +
                "<p>This pub was previously owned and run by renowned playwrite John B Keane. At the counter, after closing time, Keane wrote his many masterpieces. The pub is now run by Keane's son Billy, who is also a writer and broadcaster.</p>" +
                "<p>For more information <a class='font-weight-bold' href='http://www.gokerry.ie/businesses/john-b-keanes-bar/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/john-b-keane-pub.jpg' class='rounded mx-auto d-block' alt='John B. Keane's Pub image'></p>" +
                "</div>"
            ],
            ["Glenties Cemetery - Resting place of Playwright Brian Friel", "<div>" +
                "<h3>Glenties Cemetery</h3>" +
                "<p>Resting place of Playwright Brian Friel</p>" +
                "<p><img src='./assets/images/brian-friel-square.jpg' class='rounded mx-auto d-block' alt='Brian Friel image'></p>" +
                "</div>"
            ],
            ["James Joyce House", "<div>" +
                "<h3>James Joyce House</h3>" +
                "<p> Stately 18 th - century Georgian residence & setting for Joyce 's short story, 'The Dead.'</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://www.visitdublin.com/see-do/details/james-joyce-house-of-the-dead' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/james-joyce-house.jpg' class='rounded mx-auto d-block' alt='James Joyce House image'></p>" +
                "</div>"
            ],
            ["James Joyce Tower & Museum", "<div>" +
                "<h3>James Joyce Tower & Museum</h3>" +
                "<p>Martello tower containing Joyce memorabilia where the author stayed and his novel Ulysses begins.</p>" +
                "<p>For more information <a class='font-weight-bold' href='http://www.gokerry.ie/businesses/john-b-keanes-bar/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/james-joyce-tower-and-museum.jpg' class='rounded mx-auto d-block' alt='ames Joyce Tower & Museum image'></p>" +
                "</div>"
            ],
            ["James Joyce Centre", "<div>" +
                "<h3>James Joyce Centre</h3>" +
                "<p>The James Joyce Centre is a museum in Dublin, Ireland, dedicated to promoting an understanding of the life and works of James Joyce</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://jamesjoyce.ie/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/james-joyce-centre.jpg' class='rounded mx-auto d-block' alt='James Joyce Tower & Museum image'></p>" +
                "</div>"
            ],
            ["Oscar Wilde House", "<div>" +
                "<h3>James Joyce Centre</h3>" +
                "<p>Oscar Wilde 's restored childhood home, known for its Georgian architecture & period furnishings.</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://www.tripadvisor.ie/Attraction_Review-g186605-d17456678-Reviews-Oscar_Wilde_House-Dublin_County_Dublin.html' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p>For information on an Oscar Wilde Tour of Dublin <a href='https://www.visitdublin.com/wilde-days-and-nights-in-dublin-city' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/oscar-wilde-house.jpg' class='rounded mx-auto d-block' alt='ames Joyce Tower & Museum image'></p>" +
                "</div>"
            ],
            ["Kilcolman Castle", "<div>" +
                "<h3>Kilcolman Castle</h3>" +
                "<p>Kilcolman Castle is a tower located in County Cork. It was once the residence of the poet Edmund Spenser.</p>" +
                "<p>For more information <a class='font-weight-bold' href='https://www.libraryireland.com/IrishPictures/IV-Kilcolman-Castle.php' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "<p><img src='./assets/images/kilcolman-castle.jpg' class='rounded d-block' alt='Kilcolman Castle'></p>" +
                "</div>"
            ]
        ];

        var gmarkers = [];
        var ginfowindow = new google.maps.InfoWindow({
            maxHeight: 300
        });
        for (var i = 0; i < locations.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                title: locations[i][0]
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    ginfowindow.setContent(content[i][1]);
                    ginfowindow.open(map, marker);
                };
            })(marker, i));
            gmarkers.push(marker);
        }

        var markerCluster = new MarkerClusterer(map, gmarkers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });

    }
    