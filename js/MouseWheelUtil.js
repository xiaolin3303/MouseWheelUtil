/*!
 * Mouse wheel util v1.0
 *
 * Contact: https://github.com/xiaolin3303
 * 2016-07-20
 *
 * Designed and built with all the love of Web
 */

"use strict";
function MouseWheelUtil (target, opts) {

	opts = $.extend({
		sensitivity: 4,
		timeLimit: 500,
		onWheel: function(){},
		preventDefault: true
	}, opts)

	var totalWheel = 0;

	var timeId = null;
	// 1 => scrollUp, -1 => scrollDown
	var wheelDirection = 1;

	var isTriggered = false;

	function trigger (direction) {
		totalWheel = 0;
		isTriggered = true;
		opts.onWheel(direction);

		setTimeout(function () {
			isTriggered = false;
			totalWheel = 0;
		}, 400);
	}

	target.on('mousewheel', function (e) {
		opts.preventDefault && e.preventDefault();
		var _direction = e.originalEvent.wheelDelta / Math.abs(e.originalEvent.wheelDelta);
		if (timeId) {
			clearTimeout(timeId);
		}

		if (!isTriggered) {
			timeId = setTimeout(function () {
				trigger(_direction);
			}, opts.timeLimit);
		}

		if (_direction === wheelDirection) {
			totalWheel += _direction;

			if (Math.abs(totalWheel) > opts.sensitivity) {
				if (timeId) {
					clearTimeout(timeId);
				}
				trigger(_direction);
			}
		} else {
			wheelDirection = _direction;
			totalWheel = 0;
		}
	});
};
