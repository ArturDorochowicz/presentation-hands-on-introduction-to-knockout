define(['jquery', 'ko'], function ($, ko) {
	"use strict";

	function MyViewModel() {
		//this.firstName = ko.observable('john');

		//this.showFirstName();
		//this.showFullName();
		//this.showWritableFullName();
		//this.showPeople();
	}

	$.extend(MyViewModel.prototype, {
		showFirstName: function () {
			console.log(this.firstName());

			this.firstName.subscribe(function (value) {
				console.log(value);
			});

			this.firstName('jane');
		},

		showFullName: function () {
			this.lastName = ko.observable('doe');

			this.fullName = ko.computed(function () {
				return this.firstName() + ' ' + this.lastName();
			}, this);

			this.fullName.subscribe(function (value) {
				console.log(this.fullName());
			}, this);

			this.firstName('jane');
			this.lastName('smith');
		},

		showWritableFullName: function () {
			this.lastName = ko.observable('doe');

			this.fullName = ko.computed({
				read: function () {
					return this.firstName() + ' ' + this.lastName();
				},
				write: function (value) {
					this.firstName(value.charAt(0));
					this.lastName(value.charAt(1));
				},
				owner: this
			});

			this.fullName.subscribe(function (value) {
				console.log(this.fullName());
			}, this);

			this.fullName('jd');
		},

		showPeople: function () {
			this.people = ko.observableArray();

			this.people.subscribe(function () {
				console.log(arguments);
			});

			this.people.push('a');
		}

	});

	return new MyViewModel();
});

