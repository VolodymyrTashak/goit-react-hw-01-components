import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-top: 50px;
  margin-left: 125px;
  margin-right: 125px;
  background-color: white;
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #a4abaa;
`;

export const FriendsItem = styled.li`
  width: 100%;
  display: flex;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d4cccc;
  background-color: #f7f7f7;
  margin-right: 5px;
`;

export const SpanInfo = styled.span`
  width: 20px;
  height: 20px;
  margin: auto 5px;
  border-radius: 50%;
  background: ${props => {
    return props.isOnlineStatus ? 'green' : 'red';
  }};
`;

export const Name = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 5px;
`;
