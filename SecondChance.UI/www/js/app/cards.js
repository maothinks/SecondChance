﻿$(document).ready(function () {
    //setTimeout(function () {
    $("#loading").hide();
    $("#cards").show();

    /**
    * jTinder initialization
    */
    $("#tinderslide").jTinder({
        // dislike callback
        onDislike: function (item) {
            // set the status text
            //$('#status').html('Dislike image ' + (item.index()+1));

            if (item.index() == 0) {
                reloadCards();
            }
        },
        // like callback
        onLike: function (item) {
            // set the status text
            //$('#status').html('Like image ' + (item.index()+1));

            if (item.index() == 0) {
                reloadCards();
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

    //$("#menu-toggle").click(function (e) {
    //    e.preventDefault();
    //    $("#wrapper").toggleClass("toggled");
    //});


    //for (var i = 3; i <= 5; i++) {
    //    var img = new Hammer.Manager(document.getElementById('img-' + i));

    //    img.add(new Hammer.Tap({ event: 'superpress', time: 500 }));

    //    img.on("superpress", function (ev) {
    //        alert('this was a tap');  
    //    });
    //}

    //}, 1000);
});

function singleChat() {
    alert("go to chat!!!");
}

function reloadCards() {
    //$("#tinderslide").jTinder({
    //    // dislike callback
    //    onDislike: function (item) {
    //        // set the status text
    //        //$('#status').html('Dislike image ' + (item.index()+1));

    //        if (item.index() == 0) {
    //            reloadCards();
    //        }
    //    },
    //    // like callback
    //    onLike: function (item) {
    //        // set the status text
    //        //$('#status').html('Like image ' + (item.index()+1));

    //        if (item.index() == 0) {
    //            reloadCards();
    //        }
    //    },
    //    animationRevertSpeed: 200,
    //    animationSpeed: 400,
    //    threshold: 1,
    //    likeSelector: '.like',
    //    dislikeSelector: '.dislike'
    //});
}

