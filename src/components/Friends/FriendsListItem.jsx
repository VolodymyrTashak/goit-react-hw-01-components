import PropTypes from 'prop-types';
import { FriendsItem, SpanInfo, Name } from './Friends.styled';

export default function FriendListItem({ friend }) {
  const { isOnline, name, avatar } = friend;
  return (
    <FriendsItem>
      <SpanInfo isOnlineStatus={isOnline}></SpanInfo>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
