$(document).ready(function () {
    //initializeSidebar();

    initializeMap();

    initializeRing();
});

//-- GOOGLE MAPS IMPLEMENTATION

//------------------------------------------------------- 
//------------------------------------------------------- Global Variables
//-------------------------------------------------------
var map;
var marker;
var markers = [];
var currentId = 20;
var hit = 0;

function initializeMap() {
    // -- Medellin
    defaultPosition = new google.maps.LatLng(6.244203, -75.58121189999997);
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultPosition,
        zoom: 6,
        mapTypeId: 'terrain'
    });


    addMarkers();
    
}

function addMarkers() {
    // Markers
    addMarker(1, new google.maps.LatLng(3.6246555626684307, -76.54729401069983));
    addMarker(2, new google.maps.LatLng(4.014732562247033, -76.19958179090412));
    addMarker(3, new google.maps.LatLng(4.504153648374109, -76.1482559370246));
    addMarker(4, new google.maps.LatLng(4.799021826796936, -75.67663216982277));
    addMarker(5, new google.maps.LatLng(5.33522145897845, -76.14025602136047));
    addMarker(6, new google.maps.LatLng(5.584284041555005, -76.54923826790031));
    addMarker(7, new google.maps.LatLng(5.842113772256935, -76.3922543927684));
    addMarker(8, new google.maps.LatLng(6.032250396593195, -76.11320206072475));
    addMarker(9, new google.maps.LatLng(6.200476702881321, -75.6144231661811));
    addMarker(10, new google.maps.LatLng(6.74513343077512, -75.71446389771404));
    addMarker(11, new google.maps.LatLng(7.14633231645950, -76.07507794856156));
    addMarker(12, new google.maps.LatLng(7.624152603564998, -76.459024781425));
    addMarker(13, new google.maps.LatLng(8.183483125970875, -76.6729920545381));
    addMarker(14, new google.maps.LatLng(8.433672671260823, -76.35997543756014));
    addMarker(15, new google.maps.LatLng(8.672145783613004, -75.93157772507845));
    addMarker(16, new google.maps.LatLng(9.194285921913059, -75.67274471152086));
    addMarker(17, new google.maps.LatLng(9.295753579000955, -75.317256535519));
    addMarker(18, new google.maps.LatLng(9.848240767181084, -75.5292568041221));
    addMarker(19, new google.maps.LatLng(10.363844930163014, -75.32321494731542));
    addMarker(20, new google.maps.LatLng(10.613376345815507, -75.24850872072813));

    var flightPlanCoordinates = [
        { lat: 3.6246555626684307, lng: -76.54729401069983},
        { lat: 4.014732562247033, lng: -76.19958179090412 },
        { lat: 4.504153648374109, lng: -76.1482559370246 },
        { lat: 4.799021826796936, lng: -75.67663216982277 },
        { lat: 5.33522145897845, lng: -76.14025602136047 },
        { lat: 5.584284041555005, lng: -76.54923826790031 },
        { lat: 5.842113772256935, lng: -76.3922543927684 },
        { lat: 6.032250396593195, lng: -76.11320206072475 },
        { lat: 6.200476702881321, lng: -75.6144231661811},
        { lat: 6.74513343077512, lng:-75.71446389771404 },
        { lat: 7.14633231645950, lng:-76.07507794856156 },
        { lat: 7.624152603564998, lng: -76.459024781425 },
        { lat: 8.183483125970875, lng: -76.6729920545381 },
        { lat: 8.433672671260823, lng: -76.35997543756014 },
        { lat: 8.672145783613004, lng: -75.93157772507845 },
        { lat: 9.194285921913059, lng: -75.67274471152086 },
        { lat: 9.295753579000955, lng: -75.317256535519 },
        { lat: 9.848240767181084, lng: -75.5292568041221 },
        { lat: 10.363844930163014, lng: -75.32321494731542 },
        {lat: 10.613376345815507, lng: -75.24850872072813 }
    ];

    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000000',
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    flightPath.setMap(map);
}

// Adds a marker to the map and push to the array.
function addMarker(id, location) {
    var marker

    if (currentId == id) {
        marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: false,
        });

        
    } else {
        
        marker = new google.maps.Marker({
            position: location,
            map: null,
            draggable: false,
        });
    }

    marker.set("id", id);
    // add event handlers
    //addClickHandler(marker);
    //addDragHandler(marker);
    //addDragEndHandler(marker);

    markers.push(marker);

    if (currentId == id) {
        map.setCenter(location);
    }
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function updateCurrentMarker() {
    setMapOnAll(null);
    var position;

    $(markers).each(function (index, marker) {
        if (index + 1 == currentId) {
            position = marker.position;
            marker.setMap(map);
        }
    });

    map.setCenter(position);

    switch (currentId.toString()) {
        case "20": { $("#selectTime").val(20); $("#lbl-place").text("Restaurante Sta Catalina"); break; }
        case "19": { $("#selectTime").val(19); $("#lbl-place").text("Hosteria Los Vientos"); break; }
        case "18": { $("#selectTime").val(18); $("#lbl-place").text("Pasteleria Las Brisas"); break; }
        case "17": { $("#selectTime").val(17); $("#lbl-place").text("Centro Comercial Orion"); break; }
        case "16": { $("#selectTime").val(16); $("#lbl-place").text("Urbanizacion Altos de Lorica"); break; }
        case "15": { $("#selectTime").val(15); $("#lbl-place").text("Don pancho Cafe-Bar"); break; }
        case "14": { $("#selectTime").val(14); $("#lbl-place").text("BodyTech Gym"); break; }
        case "13": { $("#selectTime").val(13); $("#lbl-place").text("Minorista de Turbo"); break; }
        case "12": { $("#selectTime").val(12); $("#lbl-place").text("Revuelteria Maria Ana"); break; }
        case "11": { $("#selectTime").val(11); $("#lbl-place").text("C.C Agua Clara"); break; }
        case "10": { $("#selectTime").val(10); $("#lbl-place").text("Finca Los Benzos"); break; }
        case "9": { $("#selectTime").val(9); $("#lbl-place").text("C.C Ciudad Azul"); break; }
        case "8": { $("#selectTime").val(8); $("#lbl-place").text("Club Altos de Concordia"); break; }
        case "7": { $("#selectTime").val(7); $("#lbl-place").text("Restaurante El Carmen"); break; }
        case "6": { $("#selectTime").val(6); $("#lbl-place").text("Cafe Internet FastPoint"); break; }
        case "5": { $("#selectTime").val(5); $("#lbl-place").text("Supermercado Tamana"); break; }
        case "4": { $("#selectTime").val(4); $("#lbl-place").text("Gimnasio EnForma"); break; }
        case "3": { $("#selectTime").val(3); $("#lbl-place").text("Vereda La Union"); break; }
        case "2": { $("#selectTime").val(2); $("#lbl-place").text("Billares la Luz"); break; }
        case "1": { $("#selectTime").val(1); $("#lbl-place").text("Farmacia AlCosto"); break; }
    }
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

//-- RING TRANSITION

//------------------------------------------------------- 
//------------------------------------------------------- Variables
//-------------------------------------------------------
var currentAngle = 0;

function initializeRing() {
    $("#second-chance-ring").show();

    document.getElementById('rotatable').style.transform = 'rotate(0deg)';

    var target = document.getElementById('rotatable');
    var region = new ZingTouch.Region(target);

    region.bind(target, 'rotate', function (e) {
        var rotatable = document.getElementById('rotatable');
        currentAngle += e.detail.distanceFromLast;
        rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

        setOutput([
            ['Gesture', 'Rotate'],
            ['angle', Math.floor(e.detail.angle) + "°"],
            ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin)],
            ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
        ]);
    });

    function setOutput(data) {
        var outputStr = "> ";
        var distance = parseInt(data[2][1]);
        
        for (var i = 0; i < data.length; i++) {
            outputStr += "";
        }
        var output = document.getElementById('output');

        if (distance > 0 && distance <= 90) {
            hit = 90;
        } else if (distance > -90 && distance < 0) {
            hit = -90;
        }

        if (hit != 0) {
            if (distance > 0 && distance > hit) {
                hit += 90;
               
                if (currentId <= 20) {
                    currentId += 1;
                    updateCurrentMarker();
                }
            }

            if (distance < 0 && distance < hit) {
                hit -= 90;
                

                if (currentId >= 1) {
                    currentId -= 1;
                    updateCurrentMarker();
                }
            }
        }
        //output.innerHTML = data[2][0] + ": " + data[2][1];
    }


    var tapElementOne = document.getElementById('rotatable');
    var regionOne = new ZingTouch.Region(tapElementOne, true, false);
    var longTap = new ZingTouch.Tap({
        maxDelay: 1000
    })
    regionOne.bind(tapElementOne, longTap, function (e) {
        PageTransitions.nextPage(33, 1, 2);
    });
}

//-- SIDE BAR IMPLEMENTATION

//------------------------------------------------------- 
//------------------------------------------------------- Variables
//-------------------------------------------------------

function initializeSidebar() {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
}

function onTimeChanged(e) {
    currentId = $(e).val();
    updateCurrentMarker();
}