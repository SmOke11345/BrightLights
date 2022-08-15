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
    nav:false,
    navText:['<img src="./Style/Img/Carousel/ArrowLeft.svg">','<img src="./Style/Img/Carousel/ArrowRight.svg">'],
   
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            item: 1,
        },
        1280: {
            item: 3,
        }
    }
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

