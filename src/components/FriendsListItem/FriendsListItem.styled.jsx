import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  background-color: #05e4ff45;
  padding: 15px 15px 15px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  font-size: 20px;
  font-weight: 500;

  width: 360px;
  border-radius: 50%;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Status = styled.span`
  margin-left: 27px;
  width: 15px;
  height: 15px;
  border-radius: 2px;
`;
