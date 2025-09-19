// In public/js/map.js

// Leaflet expects coordinates as [latitude, longitude], 
// but GeoJSON (from your database) is [longitude, latitude].
// This line reverses the array to the correct format for Leaflet.
const reversedCoords = [...coordinates].reverse();

// Initialize the map, centering it on the listing's coordinates
var map = L.map('map').setView(reversedCoords, 13); // Centered on the listing

// Add the tile layer using the API key
L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${stadiaApiKey}`, {
    maxZoom: 9,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map);

// ---- ADD THIS CODE FOR THE MARKER ----

// 1. Create the marker at the listing's coordinates
const marker = L.marker(reversedCoords).addTo(map);

// 2. Bind a popup to the marker with the listing's title and location
marker.bindPopup(`<b>${listingTitle}</b><br>${listingLocation}`);