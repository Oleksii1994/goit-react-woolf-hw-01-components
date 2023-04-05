import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = props => {
  const { avatar, name, isOnline } = props;
  const backgroundColor = isOnline ? 'green' : 'red';
  return (
    <li className={css.friendsItem}>
      <span
        className={css.status}
        style={{ backgroundColor: backgroundColor }}
      ></span>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
