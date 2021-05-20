import styled from "styled-components/native";

export const WrapperInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 34px 0 20px;
`;

export const InputSearch = styled.TextInput`
  padding: 10px;
  border: solid 1px #898383;
  border-radius: 8px;
  font-size: 18px;

  height: 48px;
  width: 70%;
`;

export const ButtonSearch = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #408aff;
  border-radius: 10px;
  height: 48px;
  width: 56px;
`;

export const Image = styled.Image`
  width: 180px;
  height: 180px;
  margin-top: 20px;
`;

export const LabelVoid = styled.Text`
  width: 260px;
  color: #898383;
  opacity: 0.6;
  font-size: 16px;
  text-align: center;

  line-height: 22px;
  margin-top: 12px;
`;

export const TitleListUsers = styled.Text`
  width: 100%;
  color: #898383;
  font: 18px sans-serif;
  text-align: left;
  margin-bottom: 12px;
`;
