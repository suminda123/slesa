var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home');

Home.add({
	aboutus: {type: Types.Html, wysiwyg: true, height: 400},
	ourprojects: {type: Types.Html, wysiwyg: true, height: 400},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true }
});

Home.schema.virtual('content.full').get(function () {
	return this.maincontent.content;
});


Home.track = true;
Home.defaultColumns = 'state|20%, publishedDate|20%';
Home.register();
