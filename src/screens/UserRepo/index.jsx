import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useFocusEffect } from "@react-navigation/native";
import api from "../../service/api";

import * as S from "./styles";

import { useFavorited } from "../../contexts/FavoritesContext";
import Header from "../../components/Header";
import CardGitRepo from "../../components/CardGitRepo";

const UserRepo = () => {
  const { isFavorited, setIsFavorited } = useFavorited();

  const [username, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]);

  const navigation = useNavigation();

  const { params } = useRoute();
  const user = params;

  // const userFormated = { id, login, avatar_url, favorited: isFavorited };

  // Carregar os repositórios
  useEffect(() => {
    const handleSearchRepos = async () => {
      const username = await AsyncStorage.getItem("@gitusers:inputname");

      const { data } = await api.get(`users/${username}/repos`);

      setRepoList(data);
      setUserName(username);
    };
    handleSearchRepos();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setIsFavorited(false);
    }, [])
  );

  const handleStorageUserToFavorites = async () => {
    try {
      const jsonUser = JSON.stringify(user);
      await AsyncStorage.setItem("@gitusers:favorites", jsonUser);

      setIsFavorited((oldState) => !oldState);

      if (!isFavorited) {
        return navigation.navigate("Favoritos");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <Header />

      <S.MainContent>
        <S.WrapperTitle>
          <S.TitleListRepo>Favoritar {username}?</S.TitleListRepo>

          <S.ButtonFavorited
            activeOpacity={0.7}
            onPress={handleStorageUserToFavorites}
          >
            <FontAwesome
              name="heart"
              size={28}
              color={isFavorited ? "#e5383b" : "#FFF"}
            />
          </S.ButtonFavorited>
        </S.WrapperTitle>

        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={repoList}
          renderItem={({ item }) => <CardGitRepo name={item.name} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      </S.MainContent>
    </S.Container>
  );
};

export default UserRepo;
