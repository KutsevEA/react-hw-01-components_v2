import PropTypes from "prop-types";

export default function Profile({
  avatar = 'Not Found',
  username,
  tag,
  location,
  followers,
  views,
  likes,
})

{
  return (
    <div>
      <div>
        <img src={avatar} alt={username + ' ' + 'avatar'} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}


Profile.PropTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}