import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 100%;
  padding-top: 20px;
  background-color: white;
  border: 1px solid #a4abaa;
  border-radius: 5px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: #918585;
  margin-bottom: 30px;
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-left: auto;
  margin-right: auto;
  background-color: #f7f7f7;
`;

export const StatisticsItem = styled.li`
  height: 80px;
  border: 1px solid #d4cccc;
`;

export const SpanInfo = styled.span`
  display: block;
  margin: auto;
  padding-top: 10px;
  letter-spacing: 0.08em;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  height: 30px;
`;

export const SpanLabel = styled.span`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
`;
