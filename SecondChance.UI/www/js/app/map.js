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
        zoom: 7
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
}

// Adds a marker to the map and push to the array.
function addMarker(id, location) {
    var icon = "img/steps.png";

    if (currentId == id) {
        icon = "img/profile__.png";
    }

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: icon,
        draggable: false,
    });

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

function updateCurrentMarker() {
    var position;
    $(markers).each(function (index, marker) {
        if (index + 1 == currentId) {
            marker.setIcon("img/profile__.png");
            position = marker.position; 
        } else{
            marker.setIcon("img/steps.png");
        }
    });

    map.setCenter(position);
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

        if (distance > 0 && distance <= 10) {
            hit = 90;
        } else if (distance > -10 && distance < 0) {
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