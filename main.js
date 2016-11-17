function scrollDown(){
	$('body').animate({ scrollTop: $('.div-2').offset().top }, 1000);
	// the offset is necessary for when you have a navbar and the 2000 is
	// actually 2 seconds written in milliseconds (time for carryout)
	//.top is unknown, but do it anyways lol
}

function scrollUp(){
	$('body').animate({ scrollTop: $('.div-1').offset().top }, 1000);
}

function hideImage(){
	document.getElementById('puppy').style.display = 'none';
	//document is the html document and the id is added into the html
	//file on the image or whatever you want to grab
	//none is like the element has been taken completely off the page
	//a different form of in-line block or inline, ect...
}

function showImage(){
	document.getElementById('puppy').style.display = 'block';
	//you knew to set it to block bc divs are block by default (check code)
}

function hideShow(){
	var display = document.getElementById('puppy').style.display;
	if(display === 'none'){
		showImage();
	}
	else{
		hideImage();
	}
}

function fadeImageIn(){
	$('#puppy').hide();
	$('#puppy').fadeIn();
	//# tells jquery that you're looking for some id
	//hide it before you fade it in so that it actually appears
}

function fadeImageIn(){
	$('#puppy').show();
	$('#puppy').fadeOut(5000);
}

$(window).scroll(function(){
	console.log($(window).scrollTop());

	var offsetPoint = 1450;

	if($(window).scrollTop() >= offsetPoint){
		$('.div-4').css('visibility', 'visible').hide().fadeIn(2000);
		$(this).off('scroll');
	}
});
