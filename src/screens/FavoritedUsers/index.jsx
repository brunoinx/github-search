import React, { useCallback } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import * as S from "./styles";

import Template from "../../components/Template";
import CardUserGithub from "../../components/CardUserGithub";
import { useFavorited } from "../../contexts/FavoritesContext";

const FavoritedUsers = () => {
  const { favorites, setFavorites } = useFavorited();

  const loadListFavorites = async () => {
    try {
      const favs = await AsyncStorage.getItem("@githubsearch:favs");

      if (favs === null) {
        setFavorites((oldState) => oldState);
        return;
      }

      const jsonFavs = JSON.parse(favs);

      setFavorites(jsonFavs);
    } catch (error) {
      console.error(`deu erro rapaziada :( ${error}`);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadListFavorites();
    }, [])
  );

  const handleExcludeUserFavorite = async (id) => {
    try {
      const newFavs = favorites.filter((user) => user.id !== id);
      setFavorites(newFavs);

      await AsyncStorage.setItem("@githubsearch:favs", JSON.stringify(newFavs));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Template>
      <S.Title>Meus Favoritos</S.Title>

      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardUserGithub
            name={item.login}
            avatar={item.avatar_url}
            icon="trash"
          >
            <S.TrashButton
              activeOpacity={0.6}
              onPress={() => handleExcludeUserFavorite(item.id)}
            >
              <Entypo name="trash" size={24} color="#e5383b" />
            </S.TrashButton>
          </CardUserGithub>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 100 }}
      />
    </Template>
  );
};

export default FavoritedUsers;
