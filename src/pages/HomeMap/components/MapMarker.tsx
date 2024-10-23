import { Card, Center, Group, Text, Button } from '@mantine/core';
import { LatLngTuple } from 'leaflet';
import { ReactElement } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { Marker, Popup } from 'react-leaflet';

interface IMapMarkerProps {
  latitude: number;
  longitude: number;
}

export const MapMarker = ({
  latitude,
  longitude,
}: IMapMarkerProps): ReactElement => {
  const position: LatLngTuple = [latitude, longitude];
  return (
    <Marker position={position}>
      <Popup closeButton={false} maxWidth={499} className="p-0 m-0">
        <Center>
          <Card shadow="sm" padding="lg" radius="md">
            <Card.Section>
              <ReactCompareSlider
                style={{ width: '500px' }}
                itemOne={
                  <ReactCompareSliderImage src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" />
                }
                itemTwo={
                  <ReactCompareSliderImage src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png" />
                }
              />
            </Card.Section>
            <Card.Section pl={'sm'} pr={'sm'}>
              <Group justify="space-between" p={0} m={'0'}>
                <Text fw={700} size={'lg'}>
                  C.N. Tower
                </Text>
                <Button variant="filled" color={'#224291'}>
                  Learn More
                </Button>
              </Group>
            </Card.Section>
          </Card>
        </Center>
      </Popup>
    </Marker>
  );
};
