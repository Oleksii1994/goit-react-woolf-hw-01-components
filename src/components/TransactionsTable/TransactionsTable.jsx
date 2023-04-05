import PropTypes from 'prop-types';
import css from './TransactionsTable.module.css';

export const TransactionsTable = props => {
  const { transactions } = props;

  return (
    <table className={css.transactionsHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableRow}>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id} className={css.tableRowItem}>
              <td className={css.tableData}>{type}</td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
