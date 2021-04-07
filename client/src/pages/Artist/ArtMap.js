import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';

export default function ArtMap({ art }) {
  const markers = art.map(item => ({
    name: item.title.display,
    position: [
      parseFloat(item.location.latitude),
      parseFloat(item.location.longitude),
    ],
  }));

  return (
    <Box mt={8}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Map
      </Typography>
      <MapContainer
        center={[39.952, -75.165]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: 400 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(marker => (
          <Marker
            key={marker.name}
            position={marker.position}
            alt={marker.name}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
