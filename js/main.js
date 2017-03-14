$(function() { 
      
  var width=$('.slider-box').width();                     // Ширина слайдера.
      interval = 10000;                                    // Интервал смены слайдов.
  $('.slider img').css("width", width);
  if ($(window).width() <= '650'){
  		$('.slider-box').css("height", $('.slider-box').width());
  }
  $(window).resize(function(){
	  $('.slider img').css("width", $('.slider-box').width());
	  if ($(window).width() <= '650'){
  		$('.slider-box').css("height", $('.slider-box').width());
  	  }
	});
  $('.prev').on('click', prev);
  $('.next').on('click', next); 
  $(".slider-box").swipe( {
	        swipeLeft:next,
	        swipeRight:prev,
	        threshold:0
	});
  setInterval(next, interval)
});


var flag = true; 
function prev(){
  if (flag == true){
  	  flag = false;
  	  width=$('.slider-box').width()
	  $('.slider img:last').clone().prependTo('.slider'); 
	  $('.slider img:last').remove();
	  $('.slider').css({left: -width});
	  $('.slider').animate({left: 0},500, function() {
		  	flag = true;
		  });
	}		
}

function next(){
  if (flag == true){
  	  flag = false;
	  width=$('.slider-box').width()
	  $('.slider img:first').clone().appendTo('.slider');
	  $('.slider').animate({left: -width},500, function() {
	  	$('.slider img:first').remove();
	  	$('.slider').css({left: 0});
	  	flag = true;
	  });
	}
}

var Notify = {},
    i = 0;
function sendNoficiation() {
    Notification.requestPermission( function(result) { console.log( 'Результат запроса ' + result); } );

    var theme = 'Сообщение';
    var body = 'Test for UT';
    var params = {
            body : "Текст сообщения"
        };

    Notify["notification" + i] = new Notification(theme, params);
    i++;
    delete body, params;
};

$(function(){
    $(".slider-box").on("click", sendNoficiation);
});
