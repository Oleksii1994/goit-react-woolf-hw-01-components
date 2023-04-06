import PropTypes from 'prop-types';
import {
  TransactionsTableStyled,
  TableHead,
  TableHeadData,
  TableRowItem,
  TableData,
} from './Transactions.styled';

// import css from './TransactionsTable.module.css';

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
          // return index % 2 === 0 ? (
          //   <tr key={id} className={css.tableRowItem}>
          //     <td className={css.tableData}>{type}</td>
          //     <td className={css.tableData}>{amount}</td>
          //     <td className={css.tableData}>{currency}</td>
          //   </tr>
          // ) : (
          //   <tr key={id} className={css.tableRowItemChanged}>
          //     <td className={css.tableData}>{type}</td>
          //     <td className={css.tableData}>{amount}</td>
          //     <td className={css.tableData}>{currency}</td>
          //   </tr>
          // );
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
    })
  ).isRequired,
};
