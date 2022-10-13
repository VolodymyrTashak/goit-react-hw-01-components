import PropTypes from 'prop-types';
import { List } from './Friends.styled';
import FriendListItem from './FriendsListItem';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  friend: PropTypes.object,
};
