$().ready(function(){
	//点击回到页面顶部
	$('#backtop').click(function(){
		$(window).scrollTop(0);
	});
});


$(function(){ 
	    $(window).scroll(function() { 
	    	var scrolls = $(this).scrollTop();
	    	var top = 200;
		  	if (scrolls > top) { 
		    	if (window.XMLHttpRequest) {
					$(".nav").css({
						position: "fixed",
						top: 0,
					});	
				} else {
					element.css({
						top: scrolls
					});	
				}
		    } else { 
				$(".nav").css({
					position: "relative",
					top:0,
				});
			}

			if (scrolls > 300) {
				$("#backtop").show();
			}else{
				$("#backtop").hide();
			}
		}); 
	});