import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem';

export default function FriendList({ friendsList }) {
  return (
    <section>
      <ul>
        {friendsList.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              username={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
    friendsList: PropTypes.array.isRequired,
};
