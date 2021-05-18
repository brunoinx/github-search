import Constants from "expo-constants";
import styled from "styled-components/native";

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

export const WrapperTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleListRepo = styled.Text`
  color: #898383;
  font: 20px sans-serif;
  text-align: left;
  margin: 40px 0 20px;
`;

export const ButtonFavorited = styled.TouchableOpacity`
  height: 48px;
  width: 48px;

  justify-content: center;
  align-items: center;

  border-radius: 22px;
  background-color: #d6d6d6;
`;
