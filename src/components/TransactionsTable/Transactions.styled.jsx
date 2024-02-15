import styled from '@emotion/styled';


export const TransactionsTableStyled = styled.table`
  padding: 15px;
  background-color: #02091061;
  width: 400px;
  text-align: center;
  color: white;
`;

export const TableHeadData = styled.td`
  background-color: #013db475;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 20px;
`;

export const TableHead = styled.thead`
  font-size: 30px;
  font-weight: 500;
  padding: 5px 20px;
`;

export const TableRowItem = styled.tr`
  background-color: #00658f59;
  font-size: 20px;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:nth-of-type(2n) {
    background-color: #022a3b59;
  }

  &:hover {
    background-color: #ff9200a3;
  }
`;

export const TableData = styled.td`
  padding: 5px 30px;
`;
