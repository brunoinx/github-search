import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as S from "./styles";

import api from "../../service/api";
import Header from "../../components/Header";
import CardUserGithub from "../../components/CardUserGithub";

import octoCatImage from "../../assets/octocat.png";

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [userList, setUserList] = useState([]);
  const [listUsersFilled, setUsersFilled] = useState(false);

  const handleSearchUser = async () => {
    const { data } = await api.get(`users?q=${userInput}`);

    setUserList(data.items);
    setUsersFilled(true);
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header />

        <S.MainContent>
          <S.WrapperInput>
            <S.InputSearch
              placeholder="Buscar Usuário"
              onChangeText={setUserInput}
            />

            <S.ButtonSearch activeOpacity={0.7} onPress={handleSearchUser}>
              <FontAwesome name="search" size={28} color="#FFF" />
            </S.ButtonSearch>
          </S.WrapperInput>

          {!listUsersFilled ? (
            <>
              <S.Image source={octoCatImage} />
              <S.LabelVoid>
                Está meio vazio por aqui. Busque um usuário.
              </S.LabelVoid>
            </>
          ) : (
            <>
              <S.TitleListUsers>Usuários encontrados</S.TitleListUsers>
              
              <FlatList
                keyExtractor={(item) => String(item.id)}
                data={userList}
                renderItem={({ item }) => (
                  <CardUserGithub
                    avatar={item.avatar_url}
                    username={item.login} 
                  />
                )}
              />

            </>
          )}
        </S.MainContent>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
