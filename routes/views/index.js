var keystone = require('keystone');
var async = require('async');
var Home = keystone.list('Home');
var SliderImages = keystone.list('SliderImages');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);

	var locals = res.locals;
	locals.section = 'home';
	locals.section = 'sliderImages';

	// Load the current post
	view.on('init', function (next) {

		var q = Home.model.findOne({
			state: 'published'
		});

		q.exec(function (err, result) {
			locals.home = result;
			next(err);
		});

	});

	// Load the current sliderImages
	view.on('init', function (next) {

		var q = SliderImages.model.find();

		q.exec(function (err, result) {
			locals.sliderImages = result;
			//console.log(result);
			next(err);
		});

	});

	view.render('index');
}
