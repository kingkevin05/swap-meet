let navbar = $(".navbar");

$(window).scroll(function () {
    // get the complete height of window
    let oTop = $(".section-3").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});
