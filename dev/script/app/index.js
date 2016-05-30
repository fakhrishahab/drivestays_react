
var React = require('react'),
	ReactDOM = require('react-dom'),
	TodoStore = require('../stores/TodoStore'),
	TodoAction = require('../actions/TodoAction');

// var MapIndex = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			map : '',
// 			geocoder : '',
// 			map_options : {
// 				center: {lat: -34.397, lng: 150.644},
// 				zoom: 15,
// 				disableDefaultUI: true,
// 				scaleControl:false,
// 				zIndex:1,
// 				draggable: false, 
// 				zoomControl: false, 
// 				scrollwheel: false, 
// 				disableDoubleClickZoom: true
// 			},
// 			map_center : ''
// 		}
// 	},
// 	getMapLocation: function(){

// 		this.map.setCenter(this.map_center);
// 		var latlang = [
// 			{
// 				'lat' : -6.259669,
// 				'long' : 106.806074
// 			},
// 			{
// 				'lat' : -6.256757,
// 				'long' : 106.802179
// 			},
// 			{
// 				'lat' : -6.265108,
// 				'long' : 106.800548
// 			},
// 			{
// 				'lat' : 40.737998,
// 	        	'long' : -73.928678
// 			},
// 			{
// 				'lat' : 40.753893,
// 	        	'long' : -73.925052
// 			}
// 		]
// 		var image = {
// 			url: './assets/images/marker.png',
// 			// This marker is 20 pixels wide by 32 pixels high.
// 			size: new google.maps.Size(35, 35),
// 			// The origin for this image is (0, 0).
// 			origin: new google.maps.Point(0, 0),
// 			// The anchor for this image is the base of the flagpole at (0, 32).
// 			anchor: new google.maps.Point(35, 35)
// 		};

// 		var marker;
// 		for(var i=0; i < latlang.length; i++){
// 			marker = new google.maps.Marker({            
// 				position: new google.maps.LatLng(latlang[i].lat, latlang[i].long),
// 				map: this.map,
// 				icon: image,
// 				title: 'title'
// 			}); 
// 		}
// 	},
// 	initMap: function(){
// 		this.geocoder = new google.maps.Geocoder();

// 		this.map = new google.maps.Map(document.getElementById('map'), this.map_options);
		
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(function(position) {
// 				this.map_center = {
// 					lat: position.coords.latitude,
// 				  	lng: position.coords.longitude
// 				};
// 				var pos = {
// 					lat: position.coords.latitude,
// 				  	lng: position.coords.longitude
// 				};


// 			}, function() {
// 			});
// 		} else {
// 			// Browser doesn't support geolocation
// 		}
// 		//this.getMapLocation();
// 		console.log(this.map)
// 	},
// 	componentDidMount: function(){
// 		this.initMap();
// 	},
// 	render: function(){
// this.initMap();
// 		return (
// 			<div>
// 				<div>INI TEST</div>
// 			</div>
// 		)
// 	}
// });

var MapIndex = React.createClass({
	render: function(){
		return (
			<div>
				test
			</div>
		)
	}
})

ReactDOM.render(
	<MapIndex />,
	document.getElementById('testReact')
)
