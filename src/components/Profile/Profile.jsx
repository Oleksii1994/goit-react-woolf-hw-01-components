import { FaUser, FaPaperPlane, FaLocationArrow } from 'react-icons/fa';
import PropTypes from 'prop-types';

import css from './Profile.module.css';

export const Profile = props => {
  const { avatar, username, location, tag, stats } = props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <div className={css.iconTextBox}>
          <FaUser size="16px" />
          <p className={css.name}>{username}</p>
        </div>
        <div className={css.iconTextBox}>
          <FaPaperPlane size="16px" />
          <p className={css.tag}>@{tag}</p>
        </div>
        <div className={css.iconTextBox}>
          <FaLocationArrow size="16px" />
          <p className={css.location}>{location}</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
