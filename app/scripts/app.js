define(['jquery', 'ko'], function ($, ko) {
	"use strict";

	function MyViewModel() {
		this.name = ko.observable('artur');
	}

	$.extend(MyViewModel.prototype, {
	});

	return new MyViewModel();
});

