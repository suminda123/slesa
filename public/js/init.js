(function($){
	$(function(){

		$('.button-collapse').sideNav();
		$('.dropdown-button').dropdown();
		
		if($(".fancybox").length>0)
			$(".fancybox").fancybox({
					prevEffect		: 'elastic',
					nextEffect		: 'elastic'});
		
	}); // end of document ready
})(jQuery); // end of jQuery name space
