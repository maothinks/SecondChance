var map;
var currentAngle = 15;
$(document).ready(function () {
    
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

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
            ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
            ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
        ]);

    });

    function setOutput(data) {
        var outputStr = "> ";
        for (var i = 0; i < data.length; i++) {
            outputStr += data[i][0] + ": " + data[i][1] + ((i === data.length - 1) ? '' : ' , ');
        }
        var output = document.getElementById('output');
        output.innerHTML = outputStr;
    }


    var tapElementOne = document.getElementById('rotatable');
    var regionOne = new ZingTouch.Region(tapElementOne, true, false);
    var longTap = new ZingTouch.Tap({
        maxDelay: 1000
    })
    regionOne.bind(tapElementOne, longTap, function (e) {
        location.href = "cards.html";
    });
});

function cards() {
    location.href = "cards.html";
}