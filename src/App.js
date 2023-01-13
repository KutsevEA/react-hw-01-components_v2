import Profile from 'components/Profile';
import profiles from './users.json';

export default function App() {
  return (
    <div>
      {/* {profiles.map(profile => (
        <Profile
          avatar={profile.avatar}
          username={profile.username}
          tag={profile.tag}
          location={profile.location}
          followers={profile.stats.followers}
          views={profile.stats.views}
          likes={profile.stats.likes}
        />
      ))} */}
      <Profile
        avatar={profiles.avatar}
        username={profiles.username}
        tag={profiles.tag}
        location={profiles.location}
        followers={profiles.stats.followers}
        views={profiles.stats.views}
        likes={profiles.stats.likes}
      />
    </div>
  );
}
