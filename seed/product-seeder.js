var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shahrear002:shabuz2222@shopping.xcsgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

var products = [
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Video Game',
		description: 'Awesome game!!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://10images.cgames.de/images/gsgp/207/fifa-18_6006779.jpg',
		title: 'FIFA Video Game',
		description: 'Awesome game!!!!',
		price: 100
	}),
	new Product({
		imagePath: 'https://originassets.akamaized.net/origin-com-store-final-assets-prod/193632/231.0x326.0/1036451_LB_231x326_en_US_%5E_2017-10-06-22-35-54_254c746f36fdb1f4c9de2634d498aae343dc4cd6.jpg',
		title: 'Need For Speed Video Game',
		description: 'Awesome game!!!!',
		price: 50
	}),
	new Product({
		imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79xL0LBZSIKhLThJjIvC_B_FszPWOEvmnTuZNrG5neBYrWh2Mhg',
		title: 'Far Cry 5 Video Game',
		description: 'Awesome game!!!!',
		price: 60
	}),
	new Product({
		imagePath: 'http://www.mobygames.com/images/covers/l/50873-virtua-cop-sega-saturn-front-cover.jpg',
		title: 'Virtual Cop Video Game',
		description: 'Awesome game!!!!',
		price: 45
	}),
	new Product({
		imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1525818062',
		title: 'Dota 2 Video Game',
		description: 'Awesome game!!!!',
		price: 90
	})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if(done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}
