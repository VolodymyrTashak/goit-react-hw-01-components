import PropTypes from 'prop-types';
import { Table, Thead, TR, Tbody } from './Transactions.styled';
import Box from '../Box';

export const TransactionHistory = ({ items }) => {
  return (
    <Box>
      <Table className="transaction-history">
        <Thead>
          <TR>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TR>
        </Thead>
        <Tbody>
          {items.map(item => (
            <TR key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TR>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       type: PropTypes.string,
//       amount: PropTypes.string,
//       currency: PropTypes.string,
//     })
//   ),
// };
