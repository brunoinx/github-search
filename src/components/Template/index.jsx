import React from "react";
import * as S from "./styles";

import Header from "../Header";

function Template({ children }) {
  return (
    <S.Container>
      <Header />

      <S.MainContent>{children}</S.MainContent>
    </S.Container>
  );
}

export default Template;
