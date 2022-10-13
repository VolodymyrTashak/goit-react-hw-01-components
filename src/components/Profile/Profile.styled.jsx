import styled from 'styled-components';

export const ProfileBox = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 1px solid #a4abaa;
  border-radius: 5px;
`;

export const Title = styled.p`
  margin-top: 16px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.2;
  color: grey;
`;

export const ProfileList = styled.ul`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: auto;
  margin-right: auto;
  background-color: #f7f7f7;
  border: 1px solid #a4abaa;
  border-radius: 5px;
`;

export const ProfileItem = styled.li`
  height: 100px;
  border: 1px solid #d4cccc;
`;

export const SpanInfo = styled.span`
  display: block;
  margin: auto;
  padding-top: 10px;
  letter-spacing: 0.08em;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: grey;
  width: 80px;
  height: 50px;
`;

export const SpanLabel = styled.span`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
`;
