import { FontAwesome } from "@expo/vector-icons";
import React from "react";

import * as S from "./styles";

function CardGitRepo({ name }) {
  return (
    <S.Container activeOpacity={0.7}>
      <FontAwesome name="folder" size={70} color="#90e0ef" />

      <S.Name>{name}</S.Name>
    </S.Container>
  );
}

export default CardGitRepo;
