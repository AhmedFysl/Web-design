$(function () {

  $('#owl-1').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 3 },
      576: { items: 4 },
      768: { items: 6 },
      992: { items: 8 }
    }
  });

  $('#owl-2').owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      1200: { items: 5 }
    }
  });


  $('#owl-3').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 }
    }
  });

  const $hours = $('#hours');
  const $min = $('#min');
  const $sec = $('#sec');

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tick() {
    const now = new Date();
    let end = new Date();
    end.setHours(24, 0, 0, 0);

    let diff = Math.max(0, end - now);
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    $hours.text(pad(h));
    $min.text(pad(m));
    $sec.text(pad(s));
  }

  tick();
  setInterval(tick, 1000);

  const $upBtn = $('#up');

  function toggleUpBtn() {
    if ($upBtn.length === 0) return;
    if (window.scrollY > 400) {
      $upBtn.removeClass('none').addClass('scale');
    } else {
      $upBtn.removeClass('scale').addClass('none');
    }
  }

  toggleUpBtn();
  $(window).on('scroll', toggleUpBtn);

});