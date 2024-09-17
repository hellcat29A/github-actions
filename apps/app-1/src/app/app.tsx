import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export function App() {
  return (
    <div>
        <h1>I added thcccis</h1>
      <NxWelcome title='m'/>
      <div>
      </div>
    </div>
  );
}

export default App;
