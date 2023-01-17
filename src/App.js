import ProfileList from 'components/Profile/ProfileList';
import StatisticsList from 'components/StatisticsList';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';


import profiles from './users.json';
import statisticsData from './StatisticsData.json';
import friendsList from './friendsList.json';
import transactions from './transactionsList.json';



export default function App() {
  return (
    <div>
      <ProfileList profiles={profiles} />
      <StatisticsList title="Upload stats" stats={statisticsData} />
      <StatisticsList stats={statisticsData} />
      <FriendList friendsList={friendsList}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
}
