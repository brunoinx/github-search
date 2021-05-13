import React from "react";
import * as S from "./styles";

import Header from "../../components/Header";
import ListUsers from "../../components/ListUsers";

const FavoritedUsers = () => {
  return (
    <S.Container>
      <Header />

      <S.MainContent>
        <ListUsers 
          labelVoid="Nenhum usuário favoritado ainda" 
          title="Meus Favoritos"
        />
      </S.MainContent>
    </S.Container>
  );
};

export default FavoritedUsers;
