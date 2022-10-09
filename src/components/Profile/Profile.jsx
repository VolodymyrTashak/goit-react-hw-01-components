import PropTypes from 'prop-types';
import {
  Box,
  ProfileBox,
  Title,
  Text,
  ProfileList,
  ProfileItem,
  SpanInfo,
  SpanLabel,
} from './Profile.styled';

export function Profile({ avatar, username, tag, location, stats }) {
  const { followers, views, likes } = stats;
  return (
    <Box>
      <ProfileBox>
        <img src={avatar} alt={username} width="200" />
        <Title>{username}</Title>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </ProfileBox>

      <ProfileList>
        <ProfileItem>
          <SpanInfo>Followers</SpanInfo>
          <SpanLabel>{followers}</SpanLabel>
        </ProfileItem>
        <ProfileItem>
          <SpanInfo>Views</SpanInfo>
          <SpanLabel>{views}</SpanLabel>
        </ProfileItem>
        <ProfileItem>
          <SpanInfo>Likes</SpanInfo>
          <SpanLabel>{likes}</SpanLabel>
        </ProfileItem>
      </ProfileList>
    </Box>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
