import React, { useState } from "react";
import { FlatList, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as S from "./styles";

import CardUserGithub from "../../components/CardUserGithub";
import octoCatImage from "../../assets/octocat.png";
import api from "../../service/api";

function ListUsers({ labelVoid, title }) {
  const [userInput, setUserInput] = useState("");
  const [userList, setUserList] = useState([]);
  const [isFilled, setIsFilled] = useState(false);

  const navigation = useNavigation();

  const handleSearchUser = async () => {
    const { data } = await api.get(`search/users?q=${userInput}`);

    setUserList(data.items);
    setIsFilled(true);
    Keyboard.dismiss(false);
  };

  const handleNavigateToRepo = async (item) => {
    try {
      await AsyncStorage.setItem("@gitusers:inputname", userList[item].login);

      const { id, login, avatar_url } = userList[item];

      navigation.navigate("UserRepo", { id, login, avatar_url });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
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
        <>
          <S.Image source={octoCatImage} />
          <S.LabelVoid>{labelVoid}</S.LabelVoid>
        </>
      ) : (
        <>
          <S.TitleListUsers>{title}</S.TitleListUsers>

          <FlatList
            keyExtractor={(item) => String(item.id)}
            data={userList}
            renderItem={({ item, index }) => (
              <CardUserGithub
                avatar={item.avatar_url}
                name={item.login}
                onPress={() => handleNavigateToRepo(index)}
              >
                <Entypo name="chevron-small-right" size={32} color="#898383" />
              </CardUserGithub>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 20 }}
          />
        </>
      )}
    </>
  );
}

export default ListUsers;
