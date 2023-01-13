import ProfileList from 'components/ProfileList';
import StatisticsList from 'components/StatisticsList';

import profiles from './users.json';
import statisticsData from './users.json';


export default function App() {
  return (
    <div>
      <ProfileList profiles={profiles} />
      <StatisticsList title="{Privet MIR}" stats={statisticsData} />
      <StatisticsList stats={statisticsData} />
    </div>
  );
}
