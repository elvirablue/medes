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
  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************

     
  
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup;
    var close;

    
    

    $('.js-modal-open').click(function(event){
          event.preventDefault();

          popup = document.querySelector('.js-modal');
          close = popup.querySelector('.modal_close');          
          popup.querySelector('.modal__title').innerText = this.getAttribute('data-title-modal');    
          PopupShow(event);
          var heightModal = $('.js-modal').height();
          popup.style.marginTop = '-' + heightModal/2 + 'px';
         
    });

    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
    };
   

    function closePopup() {
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 100);
                
          };
          
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

     $('.modal_wrapper').click(function(event) {
          closePopup();
          
    });
 
    $('.modal_close').click(function(event) {
          event.preventDefault();
          closePopup();
    });


});
$(document).on('ready', function(){ 
	
  $("[data-toggle='tooltip']").tooltip(); 
 
  $('#description-1').show();

  $('#modalBox').on('shown.bs.modal', function () {
    if ($(document).height() > $(window).height()) {
      $('.modal-dialog').css({'width': '413px'});
    }
  })   

  $('.block-auto .button.buy').click(function(event){
    $("#modalBox #auto-name").text($(this).data('autoName'));
    $("#modalBox #auto-price").text($(this).data('autoPrice'));
    $("#modalBox").modal('show');
  });

  $('.block-auto').hover(function(event){        
    hoverBlockAuto($(this));       
  });

  function hoverBlockAuto(event) {        
        
    var id = '#description-' + event.data("blockNumber");
    $('.block-auto.active').removeClass('active');
    event.addClass('active');    

    $('.description').hide();
    $(id).show();
  }

  //*****************



});