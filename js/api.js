function api_get(field, callbackFn) {
	const baseUrl = 'https://my-json-server.typicode.com/barbosajackson/vitruvian-store-fakeapi/';
	const https = new XMLHttpRequest();
	https.open("GET", baseUrl + field);
	https.onload = () => callbackFn(JSON.parse(https.responseText));
	https.send();	
}

function add_cart(id, name, price) {
	const storage = localStorage;
	let cart = JSON.parse(storage.getItem('cart'));
	if(!cart) {
		cart = [];
	}
	cart.push({'id': id, 'name': name, 'price':price});
	storage.setItem('cart', JSON.stringify(cart));
}