$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items:3
            },
            1200:{
                items: 5
            }
        }
    });
});

function showProductImage(el) {
    document.getElementById('mainProductImg').src = el.getAttribute('data-img');

    var thumbNumber = el.getAttribute('data-thumb');
    document.querySelectorAll('.thumb-label, .swatch-label').forEach(function (item) {
        item.classList.remove('active');
    });
    document.querySelectorAll('[data-thumb="' + thumbNumber + '"]').forEach(function (item) {
        item.classList.add('active');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var stage = document.querySelector('.product-stage');
    var mainImg = document.getElementById('mainProductImg');
    var zoomScale = 2;

    if (stage && mainImg) {
        stage.addEventListener('mouseenter', function () {
            stage.classList.add('is-zooming');
            mainImg.style.transform = 'scale(' + zoomScale + ')';
        });

        stage.addEventListener('mousemove', function (e) {
            var rect = stage.getBoundingClientRect();
            var x = ((e.clientX - rect.left) / rect.width) * 100;
            var y = ((e.clientY - rect.top) / rect.height) * 100;
            mainImg.style.transformOrigin = x + '% ' + y + '%';
        });

        stage.addEventListener('mouseleave', function () {
            stage.classList.remove('is-zooming');
            mainImg.style.transform = 'scale(1)';
            mainImg.style.transformOrigin = 'center center';
        });
    }

    var placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
        '<rect width="200" height="200" fill="#f1f1f5"/>' +
        '<path d="M60 130l25-30 20 22 25-35 30 43H60z" fill="#d7d9df"/>' +
        '<circle cx="80" cy="75" r="12" fill="#d7d9df"/>' +
        '</svg>'
    );
    document.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('error', function () {
            this.onerror = null;
            this.src = placeholder;
        });
    });
});
const upBtn = document.getElementById('up');

if (upBtn) {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 300) {
            upBtn.classList.remove('none');
        } else {
            upBtn.classList.add('none');
        }
    });

    upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}