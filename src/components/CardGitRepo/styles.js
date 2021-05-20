import { Dimensions } from "react-native";
import styled from "styled-components/native";

const width = Math.floor(Dimensions.get("window").width);

export const Container = styled.TouchableOpacity`
  width: ${width - 45}px;
  border-radius: 8px;
  background-color: #eee;
  margin: 5px 0;
  padding: 0 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Name = styled.Text`
  color: #2b2d42;
  flex-shrink: 1;
  font-size: 18px;
  margin-left: 16px;
`;
