$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll)

    if (scroll >= 200) {
        $("#myNav").addClass("bg-dark");
        $('.my_bttn').fadeIn();

    } else {
        $("#myNav").removeClass("bg-dark");
        $('.my_bttn').fadeOut();

    }

    // if (scroll <= 450) {
    //     $('.parallax').hide();
    //     $('.forum').hide();
    // } else {
    //     $('.parallax').show();
    //     $('.forum').show();
    // }

    // if (scroll >= 450) {
    //     .fadeIn("$('.card')slow");

    // } else {
    //     $('.card').hide();
    // }


});
$('.parallax-window').parallax({ imageSrc: 'img/flat.jpg' });

$(document).ready(function () {
    $(window).scroll(function () {
        $('.my_bttn').click(function () {
            $('html').animate(
                { scrollTop: 0 }, 300
            );
            console.log(scroll)
        });
    });
});