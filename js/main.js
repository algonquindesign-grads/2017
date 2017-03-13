var $dataBranding = $('[data-category*=branding]');
var $dataWeb = $('[data-category*=web]');
var $dataPrint = $('[data-category*=print]');
var $dataType = $('[data-category*=type]');
var $dataUx = $('[data-category*=ux-ui]');
var $dataExp = $('[data-category*=experience]');
var $dataPhoto = $('[data-category*=photo]');
var $dataIll = $('[data-category*=illustration]');
var $dataMotion = $('[data-category*=motion]');
var $dataAll = $('[data-category]');

var $all = $('.gp-photo');

$('#filter-select').on('change', function () {
  $all.css('opacity', .4);

  switch ($(this).val()) {
    case 'filter-all':
      $dataAll.css('opacity', 1);
      break;
    case 'filter-branding':
      $dataBranding.css('opacity', 1);
      break;
    case 'filter-web':
      $dataWeb.css('opacity', 1);
      break;
    case 'filter-print':
      $dataPrint.css('opacity', 1);
      break;
    case 'filter-type':
      $dataType.css('opacity', 1);
      break;
    case 'filter-ux':
      $dataUx.css('opacity', 1);
      break;
    case 'filter-experience':
      $dataExp.css('opacity', 1);
      break;
    case 'filter-photo':
      $dataPhoto.css('opacity', 1);
      break;
    case 'filter-illustration':
      $dataIll.css('opacity', 1);
      break;
    case 'filter-motion':
      $dataMotion.css('opacity', 1);
      break;
  }
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};

$('.play-sound').click(function() {
  if ($('video').get(0).muted == true) {
    $('video').get(0).muted = false;
  }
  else {
    $('video').get(0).muted = true;
  }
});

$(window).on('load', function() {
  $("#loader").fadeOut("slow");
});
