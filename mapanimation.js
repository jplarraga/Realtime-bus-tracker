mapboxgl.accessToken = 'pk.eyJ1IjoianBsYXJyYWdhIiwiYSI6ImNrcHE0bzUyazA5Mzgyb3A3NWF3ZXVtbzIifQ.LODm3IuYL5GJexU6cX91ew'

var map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://styles/jplarraga/ckpsqo9ks0uuk18jxiwb8zwuf',
    center: [-71.104081, 42.365554], //pending
    zoom: 12
});

var marker = new mapboxgl.Marker()
.setLngLat([-71.10346665, 42.365293089])
.addTo(map);


async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(locations);
    locations.forEach(element => {
      busStations.push([element.attributes.longitude, element.attributes.latitude])    
    });

}
// to fetch the data
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}


// I create an array in which I am going to store all the data information of Longitud and Latitud of the bus stops
busStations = [];

//The counter will serve to iterate each of the bus stops and will increase accordingly to each Time
var counter = 0;

function move() {
    run();

    setTimeout(() => {
        if(counter >= busStations.length) return;
        marker.setLngLat(busStations[counter]);
        counter++;
        move();
    }, 1000);
}






