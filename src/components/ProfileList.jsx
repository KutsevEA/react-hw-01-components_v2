import PropTypes from 'prop-types';
import Profile from 'components/Profile';

export default function ProfileList({ profiles }) {
  return (
    <ul>
      {profiles.map(profile => (
        <li key={profile.username}>
          <Profile
            avatar={profile.avatar}
            username={profile.username}
            tag={profile.tag}
            location={profile.location}
            followers={profile.stats.followers}
            views={profile.stats.views}
            likes={profile.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  profiles: PropTypes.array.isRequired,
};
