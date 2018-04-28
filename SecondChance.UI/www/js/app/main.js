var currentPage = 1;
var lastPage = 0;
var animation = 37;

$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});