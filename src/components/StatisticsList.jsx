import PropTypes from 'prop-types';

export default function StatisticsList({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {/* <div>{stats}</div> */}
        {console.log(stats)}
        <div>{title}</div>
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{'%' + stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
