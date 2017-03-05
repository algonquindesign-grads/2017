var $dataBranding = $('[data-category*=branding]');
var $dataWeb = $('[data-category*=web]');
var $dataPrint = $('[data-category*=print]');
var $dataType = $('[data-category*=type]');
var $dataUx = $('[data-category*=ux-ui]');
var $dataExp = $('[data-category*=experience]');
var $dataPhoto = $('[data-category*=photo]');
var $dataIll = $('[data-category*=illustration]');
var $dataMotion = $('[data-category*=motion]');

var $all = $('.gp-photo');

$('#filter-select').on('change', function () {
  $all.css('opacity', 1);

  switch ($(this).val()) {
    case 'filter-branding':
      $dataBranding.css('opacity', .4);
      break;
    case 'filter-web':
      $dataWeb.css('opacity', .4);
      break;
    case 'filter-print':
      $dataPrint.css('opacity', .4);
      break;
    case 'filter-type':
      $dataType.css('opacity', .4);
      break;
    case 'filter-ux':
      $dataUx.css('opacity', .4);
      break;
    case 'filter-experience':
      $dataExp.css('opacity', .4);
      break;
    case 'filter-photo':
      $dataPhoto.css('opacity', .4);
      break;
    case 'filter-illustration':
      $dataIll.css('opacity', .4);
      break;
    case 'filter-motion':
      $dataMotion.css('opacity', .4);
      break;
  }
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};
