import user from '../data/user.json';
import { Profile } from '../components/Profile/Profile.jsx';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
};
