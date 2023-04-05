import user from '../data/user';
import statistics from '../data/statistics';
import friends from '../data/friends';
import transactions from '../data/transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionsTable } from './TransactionsTable/TransactionsTable';

export const App = () => {
  const title = 'Upload Stats';
  return (
    <div
      className="container"
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={title} stats={statistics} />
      <FriendsList friends={friends} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
};
