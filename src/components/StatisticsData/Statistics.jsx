import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  SpanInfo,
  SpanLabel,
} from '../StatisticsData/Statistics.styled';
import Box from '../Box';

export default function Statistics({ title, stats }) {
  return (
    <Box>
      <StatisticsSection>
        <StatisticsTitle>{title}</StatisticsTitle>

        <StatisticsList>
          {stats.map(({ label, percentage, id }) => {
            return (
              <StatisticsItem key={id} label={label}>
                <SpanInfo>{label}</SpanInfo>
                <SpanLabel>{percentage}%</SpanLabel>
              </StatisticsItem>
            );
          })}
        </StatisticsList>
      </StatisticsSection>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
