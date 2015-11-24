var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	maxZoom: 18,
	id: 'gooeealyssa.o4ppiag7',
	accessToken: 'pk.eyJ1IjoiZ29vZWVhbHlzc2EiLCJhIjoiY2lndjAzYjV4MGYwdTRwbTMzZWI0aHEyZSJ9.zjuydhn0ZylIE4ik8aXFUg'
}).addTo(map);