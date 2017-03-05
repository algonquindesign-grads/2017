var $dataBranding = $('[data-category*=branding]');
var $dataWeb = $('[data-category*=web]');
var $dataPrint = $('[data-category*=print]');
var $dataType = $('[data-category*=type]');
var $dataUx = $('[data-category*=ux-ui]');
var $dataExp = $('[data-category*=experience]');
var $dataPhoto = $('[data-category*=photo]');
var $dataIll = $('[data-category*=illustration]');
var $dataMotion = $('[data-category*=motion]');
var $filterBrand = $('("#filter-select").val("filter-branding")');

$filterBrand.onClick(function(){
    $dataWeb.css("opacity", ".4");
    $dataPrint.css("opacity", ".4");
    $dataType.css("opacity", ".4");
    $dataUx.css("opacity", ".4");
    $dataExp.css("opacity", ".4");
    $dataPhoto.css("opacity", ".4");
    $dataIll.css("opacity", ".4");
    $dataMotion.css("opacity", ".4");
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};
