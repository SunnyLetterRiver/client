import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { ReactElement } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { MapMarker } from './components/MapMarker';

export const HomeMap = (): ReactElement => {
  const latitude = 43.64253437503958;
  const longitude = -79.3871372216558;
  const center: LatLngTuple = [latitude, longitude];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker latitude={latitude} longitude={longitude} />
    </MapContainer>
  );
};

export const Route = createLazyFileRoute('/')({
  component: HomeMap,
});
