import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { ReactElement } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const HomeMap = (): ReactElement => {
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
};

export const Route = createLazyFileRoute('/')({
  component: HomeMap,
});
