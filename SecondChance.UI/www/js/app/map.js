$(document).ready(function () {
    //initializeSidebar();

    //initializeMap();

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
        zoom: 14,
        disableDefaultUI: true/*,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: 'terrain'*/
    });


    addMarkers();

}

function addMarkers() {
    // Markers
    addMarker(1, new google.maps.LatLng(6.242112619448989, -75.58958039212644));
    addMarker(2, new google.maps.LatLng(6.238694402668167, -75.59028313088834));
    addMarker(3, new google.maps.LatLng(6.239729550891222, -75.58176443505704));
    addMarker(4, new google.maps.LatLng(6.238828917366308, -75.57433471608579));
    addMarker(5, new google.maps.LatLng(6.237666398920562, -75.57116970944821));
    addMarker(6, new google.maps.LatLng(6.2344187993278375, -75.57007536817014));
    addMarker(7, new google.maps.LatLng(6.23008330252177, -75.5698876135391));
    addMarker(8, new google.maps.LatLng(6.228483479154979, -75.5697803251785));
    addMarker(9, new google.maps.LatLng(6.226403225248964, -75.56909079023859));
    addMarker(10, new google.maps.LatLng(6.222808923403714, -75.56931609579584));
    addMarker(11, new google.maps.LatLng(6.214884392471358, -75.56997055479547));
    addMarker(12, new google.maps.LatLng(6.211481997224855, -75.56929463812372));
    addMarker(13, new google.maps.LatLng(6.209679465439622, -75.56591505476496));
    addMarker(14, new google.maps.LatLng(6.207551616722727, -75.56534374424479));
    addMarker(15, new google.maps.LatLng(6.200862266255487, -75.56612694927713));
    addMarker(16, new google.maps.LatLng(6.197075799492845, -75.5655261344578));
    addMarker(17, new google.maps.LatLng(6.189822773217568, -75.56962454983255));
    addMarker(18, new google.maps.LatLng(6.1804790220268, -75.56599820324436));
    addMarker(19, new google.maps.LatLng(6.177279069291005, -75.56123460003391));
    addMarker(20, new google.maps.LatLng(6.173119101817878, -75.56333745190159));

    var flightPlanCoordinates = [
        { lat: 6.242112619448989, lng: -75.58958039212644 },
        { lat: 6.238694402668167, lng: -75.59028313088834 },
        { lat: 6.239729550891222, lng: -75.58176443505704 },
        { lat: 6.238828917366308, lng: -75.57433471608579 },
        { lat: 6.237666398920562, lng: -75.57116970944821 },
        { lat: 6.2344187993278375, lng: -75.57007536817014 },
        { lat: 6.23008330252177, lng: -75.5698876135391 },
        { lat: 6.228483479154979, lng: -75.5697803251785 },
        { lat: 6.226403225248964, lng: -75.56909079023859 },
        { lat: 6.222808923403714, lng: -75.56931609579584 },
        { lat: 6.214884392471358, lng: -75.56997055479547 },
        { lat: 6.211481997224855, lng: -75.56929463812372 },
        { lat: 6.209679465439622, lng: -75.56591505476496 },
        { lat: 6.207551616722727, lng: -75.56534374424479 },
        { lat: 6.200862266255487, lng: -75.56612694927713 },
        { lat: 6.197075799492845, lng: -75.5655261344578 },
        { lat: 6.189822773217568, lng: -75.56962454983255 },
        { lat: 6.1804790220268, lng: -75.56599820324436 },
        { lat: 6.177279069291005, lng: -75.56123460003391 },
        { lat: 6.173119101817878, lng: -75.56333745190159 }
    ];

    var lineSymbol = {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 4
    };

    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        strokeOpacity: 0,
        icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
        }]
    });

    //var flightPath = new google.maps.Polyline({
    //    path: flightPlanCoordinates,
    //    geodesic: true,
    //    strokeColor: '#000000',
    //    strokeOpacity: 1.0,
    //    strokeWeight: 2
    //});

    flightPath.setMap(map);
}

// Adds a marker to the map and push to the array.
function addMarker(id, location) {
    var marker;

    if (currentId == id) {
        marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: false
        });


    } else {

        marker = new google.maps.Marker({
            position: location,
            map: null,
            draggable: false
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
        case "1": { $("#selectTime").val(20); $("#lbl-place").text("C.C Unicentro"); break; }
        case "2": { $("#selectTime").val(19); $("#lbl-place").text("Burger Del Oeste"); break; }
        case "3": { $("#selectTime").val(18); $("#lbl-place").text("Discoteca Carboncito"); break; }
        case "4": { $("#selectTime").val(17); $("#lbl-place").text("Metrofrenos"); break; }
        case "5": { $("#selectTime").val(16); $("#lbl-place").text("EPS San Diego"); break; }
        case "6": { $("#selectTime").val(15); $("#lbl-place").text("Casino Rio"); break; }
        case "7": { $("#selectTime").val(14); $("#lbl-place").text("C.C Premium Plaza"); break; }
        case "8": { $("#selectTime").val(13); $("#lbl-place").text("Colpensiones"); break; }
        case "9": { $("#selectTime").val(12); $("#lbl-place").text("Reposteria Astor"); break; }
        case "10": { $("#selectTime").val(11); $("#lbl-place").text("Centro Automotriz"); break; }
        case "11": { $("#selectTime").val(10); $("#lbl-place").text("Colinas del Poblado"); break; }
        case "12": { $("#selectTime").val(9); $("#lbl-place").text("Chef Burger Poblado"); break; }
        case "13": { $("#selectTime").val(8); $("#lbl-place").text("Crepes & Waffles"); break; }
        case "14": { $("#selectTime").val(7); $("#lbl-place").text("Bogota Beer Company"); break; }
        case "15": { $("#selectTime").val(6); $("#lbl-place").text("Hotel Casa Victoria"); break; }
        case "16": { $("#selectTime").val(5); $("#lbl-place").text("Dominos Pizza"); break; }
        case "17": { $("#selectTime").val(4); $("#lbl-place").text("Museo el castillo"); break; }
        case "18": { $("#selectTime").val(3); $("#lbl-place").text("Parroquia San Lucas"); break; }
        case "19": { $("#selectTime").val(2); $("#lbl-place").text("Colegio Montessori"); break; }
        case "20": { $("#selectTime").val(1); $("#lbl-place").text("Urbanizacion Burdeos"); break; }
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

        switch (currentPage) {
            case 1: {
                for (var i = 0; i < data.length; i++) {
                    outputStr += "";
                }

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
                break;
            }
            case 7: {
                var vid = document.getElementById("myVideo");
                
                for (var i = 0; i < data.length; i++) {
                    outputStr += "";
                }

                if (distance > 0 && distance <= 90) {
                    hit = 90;
                } else if (distance > -90 && distance < 0) {
                    hit = -90;
                }

                if (hit != 0) {
                    if (distance > 0 && distance > hit) {
                        hit += 90;

                        vid.currentTime = vid.currentTime + 1;
                    }

                    if (distance < 0 && distance < hit) {
                        hit -= 90;

                        if (currentId >= 1) {
                            vid.currentTime = vid.currentTime - 1;
                        }
                    }
                }

                break;
            }
            default:
                break;
        }


    }

    var tapElementOne = document.getElementById('rotatable');
    var regionOne = new ZingTouch.Region(tapElementOne, true, false);
    var longTap = new ZingTouch.Tap({
        maxDelay: 1000
    });

    regionOne.bind(tapElementOne, longTap, function (e) {

        switch (currentPage) {
            case 1: {
                search = false;
                PageTransitions.nextPage(33, 1, 2);
                break;
            }
            case 7: {
                var vid = document.getElementById("myVideo");

                if (vid.paused) {
                    vid.play();
                } else {
                    vid.pause();
                }
                
                break;
            }
            default: break;
        }
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
    currentId = parseInt($(e).val());
    updateCurrentMarker();
}