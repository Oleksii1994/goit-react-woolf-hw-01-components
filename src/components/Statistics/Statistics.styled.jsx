import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  background-color: #04b7f85c;
  border-radius: 20px;

  padding: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 25%;
  width: 60px;
  background-color: #f2fffcf0;
`;

export const Title = styled.h2`
  font-size: large;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

export const LabelStats = styled.span`
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-size: 22px;
`;
