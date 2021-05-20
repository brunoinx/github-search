import React, { useState, useEffect, useCallback } from "react";
import { FlatList, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import api from "../../service/api";
import * as S from "./styles";

import Template from "../../components/Template";
import CardGitRepo from "../../components/CardGitRepo";

import { useFavorited } from "../../contexts/FavoritesContext";

const UserRepo = () => {
  const [username, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]);
  const {
    favorites,
    setFavorites,
    isFavorited,
    setIsFavorited,
    isLoading,
    setIsLoading,
  } = useFavorited();

  const navigation = useNavigation();

  const { params } = useRoute();
  const { id, login, avatar_url } = params;

  useFocusEffect(
    useCallback(() => {
      setIsFavorited(false);
      setIsLoading(true);
    }, [])
  );

  // Carregar os repositórios
  useEffect(() => {
    const handleSearchRepos = async () => {
      const username = await AsyncStorage.getItem("@gitusers:inputname");

      const { data } = await api.get(`users/${username}/repos`);

      setRepoList(data);
      setUserName(username);
      setIsLoading(false);
    };
    handleSearchRepos();
  }, []);

  // storage list favorites
  useEffect(() => {
    const storageListFavorites = async () => {
      try {
        const favsString = JSON.stringify(favorites);

        await AsyncStorage.setItem("@githubsearch:favs", favsString);
      } catch (error) {
        console.log(`Não salvou... :( \n${error}`);
      }
    };

    storageListFavorites();
  }, [favorites]);

  const handleFavoringUsers = () => {
    const alreadyExist = favorites.findIndex((fav) => fav.id === id);

    if (alreadyExist < 0) {
      setFavorites((oldState) => [...oldState, { id, login, avatar_url }]);
    } else {
      setFavorites((oldState) => oldState);
      Alert.alert("Ops...", "Esse usuário já foi favoritado. 🧐");
    }

    setIsFavorited((oldState) => !oldState);

    navigation.navigate("Favoritos");
  };

  return (
    <Template>
      <S.WrapperTitle>
        <S.TitleListRepo>Favoritar {username}?</S.TitleListRepo>

        <S.ButtonFavorited activeOpacity={0.7} onPress={handleFavoringUsers}>
          <FontAwesome
            name="heart"
            size={28}
            color={isFavorited ? "#e5383b" : "#FFF"}
          />
        </S.ButtonFavorited>
      </S.WrapperTitle>

      {isLoading ? (
        <ActivityIndicator size="large" color="#365CE5" />
      ) : (
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={repoList}
          renderItem={({ item }) => <CardGitRepo name={item.name} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      )}
    </Template>
  );
};

export default UserRepo;
