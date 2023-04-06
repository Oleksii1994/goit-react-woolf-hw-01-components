import PropTypes from 'prop-types';
import { FriendsItem, Status } from './FriendsListItem.styled';

export const FriendsListItem = props => {
  const { avatar, name, isOnline } = props;
  const backgroundColor = isOnline ? 'green' : 'red';
  return (
    <FriendsItem>
      <Status style={{ backgroundColor: backgroundColor }}></Status>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendsItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
