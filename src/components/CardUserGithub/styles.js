import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const widthScreen = Math.floor(Dimensions.get('window'). width);

export const Container = styled.TouchableOpacity`
  width: ${widthScreen - 46}px;
  height: 70px;
  border-radius: 14px;
  background-color: #eee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 0 10px;
`;

export const WrapperUser = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 12px;
  margin: 0 10px;
`;

export const UserName = styled.Text`
  color: #898383;
  font-size: 20px;
`;
