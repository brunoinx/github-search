import React, { useState } from "react";
import { Alert, FlatList, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";

import api from "../../service/api";

import Template from "../../components/Template";
import OctocatVoid from "../../components/OctocatVoid";
import CardUserGithub from "../../components/CardUserGithub";

import octoCatImage from "../../assets/octocat-detective.png";

function ListUsers() {
  const [userInput, setUserInput] = useState("");
  const [userList, setUserList] = useState([]);
  const [isFilled, setIsFilled] = useState(false);

  const navigation = useNavigation();
  const heightTabBar = useBottomTabBarHeight();

  console.log(heightTabBar);

  const handleSearchUser = async () => {
    if (!userInput) {
      setIsFilled(false);
      Keyboard.dismiss(false);
      return Alert.alert("Digite alguma coisa");
    }

    const { data } = await api.get(`search/users?q=${userInput}`);

    setUserList(data.items);
    setIsFilled(true);
    Keyboard.dismiss(false);
  };

  const handleNavigateToRepos = (item) => {
    const { id, login, avatar_url } = userList[item];

    navigation.navigate("ListRepositories", { id, login, avatar_url });
  };

  return (
    <Template>
      <S.WrapperInput>
        <S.InputSearch
          placeholder="Buscar Usuário"
          onChangeText={setUserInput}
        />

        <S.ButtonSearch activeOpacity={0.7} onPress={handleSearchUser}>
          <FontAwesome name="search" size={28} color="#FFF" />
        </S.ButtonSearch>
      </S.WrapperInput>

      {!isFilled ? (
        <OctocatVoid
          msg={`Está meio vazio por aqui... \nBusque por um usuário!`}
          img={octoCatImage}
        />
      ) : (
        <>
          <S.TitleListUsers>Usuários encontrados</S.TitleListUsers>

          <FlatList
            keyExtractor={(item) => String(item.id)}
            data={userList}
            renderItem={({ item, index }) => (
              <CardUserGithub
                avatar={item.avatar_url}
                name={item.login}
                onPress={() => handleNavigateToRepos(index)}
              >
                <Entypo name="chevron-small-right" size={32} color="#898383" />
              </CardUserGithub>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: heightTabBar }}
          />
        </>
      )}
    </Template>
  );
}

export default ListUsers;
