import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from 'react-native';

import { FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";

import api from "../../service/api";

import CardUserGithub from "../../components/CardUserGithub";
import octoCatImage from "../../assets/octocat.png";

function ListUsers({ labelVoid, title }) {
  const [userInput, setUserInput] = useState("");
  const [userList, setUserList] = useState([]);
  const [isFilled, setIsFilled] = useState(false);

  const handleSearchUser = async () => {
    const { data } = await api.get(`search/users?q=${userInput}`);

    setUserList(data.items);
    setIsFilled(true);
  };

  useEffect(() => {
    const storageDataUsers = async () => {
      try {
        const jsonValue = JSON.stringify(userList);
        await AsyncStorage.setItem("@gitusers:user", jsonValue);
        await AsyncStorage.setItem("@gitusers:inputname", userInput);
      } catch {}
    };

    storageDataUsers();
  }, [userList]);

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
            renderItem={({ item }) => (
              <CardUserGithub
                avatar={item.avatar_url}
                name={item.login}
                icon="chevron-small-right"
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </>
  );
}

export default ListUsers;
