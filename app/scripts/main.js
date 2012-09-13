require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min',
	ko: 'vendor/knockout-2.1.0.debug'
  }
});

require(['ko', 'jquery', 'app'], function (ko, $, app) {
	var module, container;

	module = $(document.body).data('module');
	container = $(document.body).data('container');

	require([module || 'app'], function (vm) {
		$(function () {
			ko.applyBindings(vm, $(container ? '#' + container : '#container').show().get(0));
		});
	});
});
