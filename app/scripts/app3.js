define(['jquery', 'ko'], function ($, ko) {
	"use strict";

	function Color() {
		this.r = ko.observable(0);
		this.g = ko.observable(0);
		this.b = ko.observable(0);

		this.value = ko.computed({
			read: function () {
				return 'rgb(' + this.r() + ', ' + this.g() + ', ' + this.b() + ')';
			},
			write: function (value) {
				var b = (value & 255);
				var g = ((value >> 8) & 255);
				var r = ((value >> 16) & 255);
				this.r(r);
				this.g(g);
				this.b(b);
			},
			owner: this
		});
	}

	function MyViewModel() {
		this.gradientStops = ko.observableArray();
		this.gradientStops.push(new Color());

		this.canAddGradientStop = ko.computed(function () {
			return this.gradientStops().length < 10;
		}, this);
	}

	$.extend(MyViewModel.prototype, {
		addGradientStop: function () {
			var stop;
			if (!this.canAddGradientStop()) {
				return;
			}
			stop = new Color();
			this.gradientStops.push(stop);
		},

		removeGradientStop: function (gradientStop) {
			if (this.gradientStops().length <= 1) {
				return;
			}
			this.gradientStops.remove(gradientStop);
		}
	});

	ko.bindingHandlers.cg = {
		update: function (element, valueAccessor) {
			var gradientStops = ko.utils.unwrapObservable(valueAccessor()),
				ctx = element.getContext('2d'),
				gradient = ctx.createLinearGradient(0, 0, 50 * gradientStops.length, 0);

			$.each(gradientStops, function (i) {
				gradient.addColorStop((i+1)/gradientStops.length, this.value());
			});

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, 50 * gradientStops.length, 50);
		}
	};

	return new MyViewModel();
});

