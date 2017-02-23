//instantiate leaflet map
var map = L.map('mapContainer'). setView([39.9042, 116.3788],12);


L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);


  //L.marker([39.9055, 116.3915] ).addTo(map)
  //.bindPopup('Tiananmen Square-A Landmark of Beijng')
    
  //L.marker([39.9180, 116.3910]).addTo(map)
  //.bindPopup('The Forbidden City-The Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty')

  //L.marker([39.8837, 116.4128]).addTo(map)
  //.bindPopup('Temple of Heaven- An imperial complex of religious buildings')
  
  //L.marker([39.9080, 116.3680]).addTo(map)
  //.bindPopup('Xidan-A Shopping Center in western Beijng')
  
  //L.marker([39.9097, 116.4145]).addTo(map)
  //.bindPopup('Dongdan-A Shopping Center in eastern Beijng')
  

    var Landmark = [
   {
     name:'Tiananmen Square',
     information: 'A Landmark of Beijng',
     coord: [39.9055, 116.3915],
   },
   {
     name:'The Forbidden City',
     information: 'The Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty',
     coord: [39.9180, 116.3910],
   },
   {
     name:'Temple of Heaven',
     information:'An imperial complex of religious buildings',
     coord: [39.8837, 116.4128],
   },
   ]

   var Shoppingcenter = [
   {
     name:'Xidan',
     information: 'A Shopping Center in western Beijng',

     coord: [39.9080, 116.3680],
   },
   {
     name:'Dongdan',
     information: 'A Shopping Center in eastern Beijng',
     coord: [39.9097, 116.4145],
   },
 ]
 
 var LandmarkLayerGroup = L.layerGroup();
 
 Landmark.forEach(function(data) 
   {
   var thisMarker = L.marker(data.coord, {
     title: data.name, 
   });
 
   thisMarker.bindPopup(data.name +' is '+ data.information);
 
   LandmarkLayerGroup.addLayer(thisMarker);
   
 });
 
 var ShoppingcenterLayerGroup = L.layerGroup( );
 
 Shoppingcenter.forEach(function(data) {
   var thisCircleMarker = L.circleMarker(data.coord, {
     color: 'orange',
     fillColor: 'red',
     fillOpacity: .9,
     weight: 1,
   })
     .bindPopup(data.name + ' is ' + data.information)
     .addTo(map)
 
     ShoppingcenterLayerGroup.addLayer(thisCircleMarker);
 });
 
 LandmarkLayerGroup.addTo(map);
 ShoppingcenterLayerGroup.addTo(map);
 
 
 var locations = {
   "Landmark": LandmarkLayerGroup,
   "Shopping Center": ShoppingcenterLayerGroup,
 }
 
 L.control.layers(null, locations, {
   collapsed: false
 }).addTo(map);






