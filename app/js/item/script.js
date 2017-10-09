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