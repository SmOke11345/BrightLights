// Soft scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1250);
});

// Scroll to header
window.addEventListener('scroll',function() {
var scroll = document.querySelector('.upward');
scroll.classList.toggle("active", window.scrollY > 600);
});

// Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<img src="../Style/img/Carousel/ArrowLeft.svg">','<img src="../Style/img/Carousel/ArrowRight.svg">'],
    item: 3,
    dots: false,
})

// Modal window
$('.modal-btn').click(function(e) {
    e.preventDefault();
    var destinationPopup = $(this).attr("href");
    $(destinationPopup).addClass('show');

    $(destinationPopup + ' .popup__close').click(function() {
        $(destinationPopup).removeClass('show');
    });

     $(destinationPopup + ' .popup__overlay').click(function() {
        $(destinationPopup).removeClass('show');
    });
});

