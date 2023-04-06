import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DescriptionBox = styled.div`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 360px;
  height: auto;
  text-align: center;
  background-color: #96b8c5b3;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Avatar = styled.img`
  display: block;
  width: 360px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

export const StatsList = styled.ul`
  padding: 15px 10px;
  width: 360px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  background-color: #d0e7f0c9;
  border-radius: 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

export const StatsLabel = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
