import React from "react";
import * as S from "./styles";

function OctocatVoid({ msg, img }) {
  return (
    <>
      <S.Image source={img} />
      <S.LabelVoid>{msg}</S.LabelVoid>
    </>
  );
}

export default OctocatVoid;
