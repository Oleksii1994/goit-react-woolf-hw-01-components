import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatsList,
  StatsItem,
  Title,
  LabelStats,
  Percentage,
} from './Statistics.styled';
export const Statistics = props => {
  const { title, stats } = props;

  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatsItem key={id}>
              <LabelStats>{label}</LabelStats>
              <Percentage>{percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
