import Constants from 'expo-constants';
import styled from 'styled-components/native';

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #fdfdfd;
  padding-top: ${statusBarHeight}px;
`;

export const MainContent = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  background-color: #fdfdfd;
  padding: 0 22px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  top: -5%;
`;

export const WrapperInput = styled.View`
width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 42px 0;
`;

export const InputSearch = styled.TextInput`
  padding: 10px;
  border: solid 1px #898383;
  border-radius: 8px;
  font-size: 18px;

  height: 56px;
  width: 70%;
`;

export const ButtonSearch = styled.TouchableOpacity`
  justify-content: center; 
  align-items: center;
  background-color: #408aff;
  border-radius: 10px;
  height: 56px;
  width: 70px;
`;

export const Image = styled.Image`
  width: 210px;
  height: 210px;
  margin-top: 20px;
`;

export const LabelVoid = styled.Text`
  width: 260px;
  color: #898383;
  font-size: 18px;
  text-align: center;

  line-height: 22px;
  margin-top: 12px;
`;

// Usuário encontrado
export const TitleListUsers = styled.Text`
  width: 100%;
  color: #898383;
  font: 22px sans-serif;
  text-align: left;
  margin-bottom: 20px;
`;