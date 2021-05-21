import React from "react";
import * as S from "./styles";

function OctocatVoid({ msg, img }) {
  return (
    <S.Container>
      <S.Image source={img} />
      <S.LabelVoid>{msg}</S.LabelVoid>
    </S.Container>
  );
}

export default OctocatVoid;
