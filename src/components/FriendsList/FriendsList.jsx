import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
