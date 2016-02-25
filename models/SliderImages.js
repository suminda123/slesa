var keystone = require('keystone');
var Types = keystone.Field.Types;

var SliderImages = new keystone.List('SliderImages', {
    label: 'SliderImages'
});

SliderImages.add({
    title: { type: String, default:"Title", required: true },
    subtitle: { type: String},
    image: { type: Types.CloudinaryImage}
});

SliderImages.track = true;
SliderImages.defaultColumns = 'title'
SliderImages.register();
