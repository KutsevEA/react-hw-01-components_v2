import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, username, isOnline }) {
  return (
    <section>
      <li>
        <span>{isOnline ? "yes" : "no"}</span>
        <img src={avatar} alt={username + ' ' + 'avatar'} width="48" />
        <p>{username}</p>
      </li>
    </section>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
