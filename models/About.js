var keystone = require('keystone');
var Types = keystone.Field.Types;

var About = new keystone.List('About', {
    label: 'About'
});

About.add({
    title: { type: String, default:"About us", required: true },
    content: {type: Types.Html, wysiwyg: true, height: 500},
    image: { type: Types.CloudinaryImage}
});

About.track = true;
About.defaultColumns = 'title'
About.register();
