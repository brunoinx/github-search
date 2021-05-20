import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as S from "./styles";

import Header from "../Header";

function Template({ children }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header />

        <S.MainContent>{children}</S.MainContent>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export default Template;
