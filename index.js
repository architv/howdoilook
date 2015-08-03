window.onload = function() { init() };

	var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1j8-PvfpixsB2URW8PcvornQbRzIA4YMNu2GxEwvag7M/pubhtml';
	var previousIndex = -1;

	function init() {
		commentData = Tabletop.init({ key: public_spreadsheet_url, callback:function(data) {console.log(data)}, simpleSheet: true })
	}

	$(function() {      
      $(".wrapper").swipe( {
        //Generic swipe handler for all directions
        tap:function(event, target) {
        	var index = getRandomNumber(commentData.data().length);
        	while (index == previousIndex) {
        		index = getRandomNumber(commentData.data().length);
        	}
        	previousIndex = index;
			getSuggestion(index);
        }
      });
    });

	function getRandomNumber(max) {
		return Math.floor(Math.random() * (max));
	}

	function getSuggestion(index) {
	    // console.log(randNum);
	    $("#comment").removeClass().html(commentData.data()[index].Comment).addClass('animated flipInX title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	      $(this).removeClass().addClass('title');
	    });
	    if (commentData.data()[index].Author != "") {
	    	$("#credits").html("Suggested by <a href=https://twitter.com/" + commentData.data()[index].Author + ">@" + commentData.data()[index].Author).addClass('animated fadeIn credit').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	     		$(this).removeClass().addClass('credit');
	    	});
	    } else {
	    	$("#credits").html("");
	    }
	    console.log("inside getSuggestion");
	} 