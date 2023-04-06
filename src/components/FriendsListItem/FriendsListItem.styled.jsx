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

  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    scale: 1.2;
  }

  &:hover img {
    transform: rotate(-10deg) scale(1.6) translateX(10px);
  }

  & img {
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
  }

  &:hover span {
    border-radius: 50%;
  }

  & span {
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
  }
`;

export const Status = styled.span`
  margin-left: 27px;
  width: 15px;
  height: 15px;
  border-radius: 2px;
`;
