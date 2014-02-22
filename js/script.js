jQuery(function($) {

	$.scrollTo = function(to, speed) {
		var top;
		if (typeof to === 'number') {
			top = to;
		} else {
			top = $(to).offset().top;
		}
		$('html, body').animate({ scrollTop: top }, speed);
	};
	
	$('#links a').click(function() {
		var href = $(this).attr('href');
		$.scrollTo(href);
		return false;
	});
	
	$('#top-link').click(function() {
		$.scrollTo(0);
		return false;
	});
	
	var timeout;
	
	$(document).scroll(function(event) {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(function() {
			timeout = null;
			var offsets = [];
			$('header, .project').each(function() {
				offsets.push($(this).offset().top);
			});
			var nearest = 100000;
			var nearestOffset;
			var top = $(document).scrollTop();
			$.each(offsets, function(index, offset) {
				var distance = Math.abs(top - offset);
				if (distance < nearest) {
					nearest = distance;
					nearestOffset = offset;
				}
			});
			$.scrollTo(nearestOffset, 'fast');
		}, 500);
	});
	
});
