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