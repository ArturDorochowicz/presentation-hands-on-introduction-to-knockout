define(['jquery', 'ko'], function ($, ko) {
	"use strict";

	function MyViewModel() {
		this.r = ko.observable(0);
		this.g = ko.observable(0);
		this.b = ko.observable(0);

		//this.addBinding();
	}

	$.extend(MyViewModel.prototype, {
		addBinding: function () {

			ko.bindingHandlers.canvasColor = {
				init: function (element, valueAccessor, allBindingsAccessor, context) {
					var values = ko.utils.unwrapObservable(valueAccessor()),
						ctx = element.getContext('2d');

					ctx.fillStyle = 'rgb(' + values[0] + ', ' + values[1] + ', ' + values[2] + ')';
					ctx.fillRect(0, 0, 200, 200);
				},
				update: function (element, valueAccessor, allBindingsAccessor, context) {
					var values = ko.utils.unwrapObservable(valueAccessor()),
						ctx = element.getContext('2d');

					ctx.fillStyle = 'rgb(' + values[0] + ', ' + values[1] + ', ' + values[2] + ')';
					ctx.fillRect(25, 25, 150, 150);
				}
			};
		}
	});

	return new MyViewModel();
});

