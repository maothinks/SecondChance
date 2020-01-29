$(document).ready(function () {
    // Empty    
    
});

function loadTinderCards()
{
    var timeout = cardPage == 0 ? 2000 : 2000;
    $($("#cardContainer").find("div[id = tinderslide]")).remove();
    $("#cardContainer").html('<div id="searching" class="text-center" style="padding-top:120px"><img style="width:100px;height:100px" src="img/searching.gif" /><p style="color:black;font-size:medium;font-weight:bold"></br>Searching...<p/></div>');
    $(".footer").hide();

    setTimeout(function () {
        $($("#cardContainer").find("div[id = searching]")).remove();
        $(".footer").show();
        $("#cardContainer").append(cardsTemplate());

        /**
        * jTinder initialization
        */
        $("#tinderslide").jTinder({
            // dislike callback
            onDislike: function (item) {
                // set the status text
                //$('#status').html('Dislike image ' + (item.index()+1));

                if (item.index() == 0) {
                    loadTinderCards();
                }
            },
            // like callback
            onLike: function (item) {
                // set the status text
                //$('#status').html('Like image ' + (item.index()+1));

                if (item.index() == 0) {
                    loadTinderCards();
                }
            },
            animationRevertSpeed: 200,
            animationSpeed: 400,
            threshold: 1,
            likeSelector: '.like',
            dislikeSelector: '.dislike'
        });

        /**
         * Set button action to trigger jTinder like & dislike.
         */
        $('.btn-like').click(function (e) {
            e.preventDefault();
            onclick = PageTransitions.nextPage(1, 2, 4);
            //$("#tinderslide").jTinder("like");
        });

        $('.btn-dislike').click(function (e) {
            e.preventDefault();
            PageTransitions.nextPage(32, 2, 1);
        });
    }, timeout);

}

function cardsTemplate() {
    var pagination = cardPage * 4;
    cardPage = cardPage == 6 ? 0 : cardPage + 1;

    var paneName ='pane';
    if (search)
        paneName = 'pane-product';

    return '<div id="tinderslide">' +
        '    <ul>' +
        '        <li class="' + paneName + (pagination + 4) + '">' +
        '            <div class="card-name"><h1><b>' + getName(pagination + 4) +'</b> </h1></div>' +
        '            <div class="img"></div>' +
        '            <div class="like"></div>' +
        '            <div class="dislike"></div>' +
        '        </li>' +
        '        <li class="' + paneName + (pagination + 3) + '">' +
        '            <div class="card-name"><h1><b>' + getName(pagination + 3) +'</b> </h1></div>' +
        '            <div class="img"></div>' +
        '            <div class="like"></div>' +
        '            <div class="dislike"></div>' +
        '        </li>' +
        '        <li class="' + paneName + (pagination + 2) + '">' +
        '            <div class="card-name"><h1><b>' + getName(pagination + 2) +'</b> </h1></div>' +
        '            <div class="img"></div>' +
        '            <div class="like"></div>' +
        '            <div class="dislike"></div>' +
        '        </li>' +
        '        <li class="' + paneName + (pagination + 1) + '">' +
        '            <div class="card-name"><h1><b>' + getName(pagination + 1) +'</b> </h1></div>' +
        '            <div class="img"></div>' +
        '            <div class="like"></div>' +
        '            <div class="dislike"></div>' +
        '        </li>' +
        '    </ul>' +
        '</div>';
}

function getName(index) {
    if (search) 
        return "";

    switch (index)
    {
        case 1: return "SUSANA";
        case 2: return "MARIA";
        case 3: return "PATRICIA";
        case 4: return "PEDRO";
        case 5: return "ALEJANDRA";
        case 6: return "JOSE";
        case 7: return "CRISTINA";
        case 8: return "JULIANA";
        case 9: return "ALVARO";
        case 10: return "CLAUDIA";
        case 11: return "PAULA";
        case 12: return "JUAN";
        case 13: return "DIANA";
        case 14: return "SERGIO";
        case 15: return "LINA";
        case 16: return "MARCELA";
        case 17: return "JOAQUIN";
        case 18: return "LEIDY";
        case 19: return "LUZ ANGELA";
        case 20: return "ROXANA";
        case 21: return "GLORIA";
        case 22: return "ESTAFANIA";
        case 23: return "LUISA";
        case 24: return "ADOLFO";
        case 25: return "BEATRIZ";
        case 26: return "LAURA";
        case 27: return "ANA";
        case 28: return "MAURICIO";
    }
}

function Search() {
    search = true;
    PageTransitions.nextPage(animation, currentPage, 2);
}