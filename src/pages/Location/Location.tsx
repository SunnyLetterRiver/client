import { ReactElement } from 'react';
import { Route } from '../../routes/location.$locationId';

export const Location = (): ReactElement => {
  const { locationId } = Route.useParams();
  return <>{locationId}</>;
};
