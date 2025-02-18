import type { Route } from './+types/home';
import { Main } from '~/main';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '10K Excel Sheet' },
    { name: 'description', content: 'Welcome to 10K Excel Sheet test app!' },
  ];
}

export default function Home() {
  return <Main />;
}
