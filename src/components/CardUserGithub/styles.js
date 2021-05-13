import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 350px;
  height: 80px;
  border-radius: 14px;
  background-color: #eee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const WrapperUser = styled.View`
  flex-direction: row;
  flex: 0.53;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 12px;
  margin-left: 8px;
`;

export const UserName = styled.Text`
  color: #898383;
  font-size: 22px;
`;
