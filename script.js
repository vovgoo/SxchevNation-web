window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var container = document.getElementById('header');
    if (scrollPosition > 0) {
        container.style.backgroundColor = '#F8F9FD'; 
    } else {
        container.style.backgroundColor = 'transparent';
    }
});

$(document).ready(function(){
    $('.img__main').addClass('active');
    $('.img__emoji__1').addClass('active');
    $('.img__emoji__2').addClass('active');
    $('.img__emoji__3').addClass('active');
    $('.img__emoji__4').addClass('active');
});

$(document).ready(function(){
    $('.slider').waypoint(function() {
        $(this.element).addClass('active'); 
    }, { offset: '80%' });

    $('.about__site__right img').waypoint(function() {
        $(this.element).addClass('active'); 
    }, { offset: '80%' });

    $('.brands').waypoint(function() {
        $(this.element).addClass('active'); 
    }, { offset: '110%' });

    $('.left__advantages').waypoint(function() {
        $(this.element).addClass('active'); 
    }, { offset: '80%' });

    $('.right__advantages').waypoint(function() {
        $(this.element).addClass('active'); 
    }, { offset: '80%' });
});

var targetElement = document.getElementById('burger');

targetElement.addEventListener('click', function() {
    var elementsToSlide = document.getElementsByClassName('burger__menu');

    for (var i = 0; i < elementsToSlide.length; i++) {
        var element = elementsToSlide[i];
        element.style.transform = 'translateX(0%)';
    }
});

var targetElement2 = document.getElementById('burger__close');

targetElement2.addEventListener('click', function() {
    var elementsToSlide = document.getElementsByClassName('burger__menu');

    for (var i = 0; i < elementsToSlide.length; i++) {
        var element = elementsToSlide[i];
        element.style.transform = 'translateX(-100%)';
    }
});