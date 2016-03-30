var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'event';
	
	// Load the galleries by sortOrder
	view.query('events', 
		keystone.list('Event')
			.model.find()
			.where('state', 'published')
			.sort('-when')
	);
	
	// Render the view
	view.render('events');
	
};
