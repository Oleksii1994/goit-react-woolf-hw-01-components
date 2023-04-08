import PropTypes from 'prop-types';
import {
  TransactionsTableStyled,
  TableHead,
  TableHeadData,
  TableRowItem,
  TableData,
} from './Transactions.styled';

export const TransactionsTable = props => {
  const { transactions } = props;

  return (
    <TransactionsTableStyled>
      <TableHead>
        <tr>
          <TableHeadData>Type</TableHeadData>
          <TableHeadData>Amount</TableHeadData>
          <TableHeadData>Currency</TableHeadData>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(({ type, amount, currency, id }, index) => {
          return (
            <TableRowItem key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRowItem>
          );
        })}
      </tbody>
    </TransactionsTableStyled>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
