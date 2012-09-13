require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min',
	ko: 'vendor/knockout-2.1.0.debug'
  }
});

require(['ko', 'jquery', 'app'], function (ko, $, app) {
	$(function () {
		var module, containerId, container;

		module = $(document.body).data('module');
		containerId = $(document.body).data('container');
		container = $(containerId ? '#' + containerId : '#container').show().get(0);

		require([module || 'app'], function (vm) {
			ko.applyBindings(vm, container);
		});
	});
});

