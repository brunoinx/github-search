import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as S from "./styles";

import Header from "../../components/Header";
import ListUsers from "../../components/ListUsers";

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header />

        <S.MainContent>
          <ListUsers
            labelVoid="Está meio vazio por aqui! Busque por um user"
            title="Usuários encontrados"
          />
        </S.MainContent>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
