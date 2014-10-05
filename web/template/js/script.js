$(document).ready(function() {
	$('#toggle-left').click(function() {
		toggleLeft();
	});
	$('#toggle-right').click(function() {
		toggleRight();
	});

});

function toggleLeft() {
	if ($('#wrapper').hasClass('slide-left')) {
		$('#wrapper').removeClass('slide-left').addClass('slide-back');
		setTimeout(function(){
			$('#wrapper').removeClass('slide-back');
		},300);
	} else {
		$('#wrapper').addClass('slide-left');
	}
}
function toggleRight() {
	if ($('#wrapper').hasClass('slide-right')) {
		$('#wrapper').removeClass('slide-right').addClass('slide-back');
		setTimeout(function(){
			$('#wrapper').removeClass('slide-back');
		},300);
	} else {
		$('#wrapper').addClass('slide-right');
	}
}