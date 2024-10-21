import { createFileRoute } from '@tanstack/react-router';
import { Location } from '../pages/Location/Location';

export const Route = createFileRoute('/location/$locationId')({
  component: () => <Location />,
});
