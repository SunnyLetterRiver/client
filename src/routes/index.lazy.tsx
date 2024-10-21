import { createLazyFileRoute } from '@tanstack/react-router';
import { HomeMap } from '../pages/HomeMap/HomeMap';

export const Route = createLazyFileRoute('/')({
  component: () => <HomeMap />,
});
