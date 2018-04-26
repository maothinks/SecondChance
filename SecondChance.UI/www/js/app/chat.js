$(document).ready(function () {
    setTimeout(function () {
        $("#chat").show();
        $("#loading").hide();

        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }, 1000);

});
