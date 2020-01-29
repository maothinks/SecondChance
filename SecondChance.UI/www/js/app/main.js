var currentPage = 1;
var lastPage = 0;
var animation = 8;
var cardPage = 0;
var search = false;

var videoCurrentTime = 0;

$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});