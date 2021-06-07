import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const heightTotal = Math.ceil(Dimensions.get("window").height);

export const Container = styled.View`
  width: 100%;
  height: ${(heightTotal * 0.8) / 2}px;
  justify-content: center;
  align-items: center;
`;

const heightTotal = Math.ceil(Dimensions.get("window").height);

export const Container = styled.View`
  width: 100%;
  height: ${(heightTotal * 0.8) / 2}px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  opacity: 0.7;
  margin-top: 50px;
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
