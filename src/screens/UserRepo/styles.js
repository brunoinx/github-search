import styled from "styled-components/native";

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
