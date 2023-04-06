import { FaUser, FaPaperPlane, FaLocationArrow } from 'react-icons/fa';
import {
  ProfileBox,
  DescriptionBox,
  Avatar,
  UserInfoBox,
  Name,
  StatsList,
  StatsItem,
  StatsLabel,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = props => {
  const { avatar, username, location, tag, stats } = props;
  return (
    <ProfileBox>
      <DescriptionBox>
        <Avatar src={avatar} alt={username} />
        <UserInfoBox>
          <FaUser size="16px" />
          <Name>{username}</Name>
        </UserInfoBox>
        <UserInfoBox>
          <FaPaperPlane size="16px" />
          <p>@{tag}</p>
        </UserInfoBox>
        <UserInfoBox>
          <FaLocationArrow size="16px" />
          <p>{location}</p>
        </UserInfoBox>
      </DescriptionBox>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
