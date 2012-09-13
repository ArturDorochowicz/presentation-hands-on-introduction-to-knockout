define(['jquery', 'ko'], function ($, ko) {
	"use strict";

	function MyViewModel() {
		this.r = ko.observable(0);
		this.g = ko.observable(0);
		this.b = ko.observable(0);
	}

	$.extend(MyViewModel.prototype, {
	});

	return new MyViewModel();
});

