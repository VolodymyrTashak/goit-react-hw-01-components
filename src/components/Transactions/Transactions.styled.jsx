import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #f7f7f7;
  border: 1px solid #a4abaa;
`;
export const Thead = styled.thead`
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #cecdcd;
  font-size: 14px;
`;
export const TR = styled.tr`
  font-weight: 500;
  font-size: 18px;
  :nth-child(odd) {
    background: #93a8d0ba;
  }
  :nth-child(even) {
    background: #db8ece;
  }
`;
export const Tbody = styled.tbody`
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
`;
