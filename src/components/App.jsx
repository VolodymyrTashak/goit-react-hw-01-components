import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import Box from '../components/Box';
import { Profile } from '../components/Profile/Profile.jsx';
import Statistics from './StatisticsData/Statistics';
import FriendList from './Friends/FriendsList';

export const App = () => {
  return (
    <Box>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </Box>
  );
};
