$(document).on('ready', function(){ 

	var owl1 = $('#owl-reviews');

    owl1.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:10,
        dots:true,
        nav: true,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2500, //Время движения слайда
        autoplayTimeout:100, //Время смены слайда
        responsiveClass:true,        
        responsive:{
             0:{
                 items:1,
                 nav:false
             },
             1000:{
                 items:2
             },
             1230:{
                 items:2                
             }
        }
    });
});