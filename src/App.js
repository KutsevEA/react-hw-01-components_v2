import ProfileList from 'components/ProfileList';
import Statistics from 'components/ProfileList';

import profiles from './users.json';



export default function App() {
  return (
    <div>
      <ProfileList profiles={profiles} />
      <Statistics />
    </div>
  );
}
