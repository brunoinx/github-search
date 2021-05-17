import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import * as S from "./styles";

import { useFavorited } from "../../contexts/FavoritesContext";

import Header from "../../components/Header";
import CardUserGithub from "../../components/CardUserGithub";

const FavoritedUsers = () => {
  const { isFavorited } = useFavorited();
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function loadFavorites() {
        try {
          const user = await AsyncStorage.getItem("@gitusers:favorites");

          if (user === null) {
            setFavorites((oldState) => oldState);
            return;
          }

          const jsonUser = JSON.parse(user);

          const alreadyExist = favorites.findIndex(
            (item) => item.id === jsonUser.id
          );

          console.log(alreadyExist);

          if (alreadyExist < 0) {
            setFavorites((oldState) => [...oldState, jsonUser]);
          } else {
            setFavorites((oldState) => oldState);
          }

          setIsLoaded(true);
        } catch (error) {
          console.log(`deu erro rapaziada :( ${error}`);
        }
      }

      loadFavorites();
    }, [isLoaded, isFavorited])
  );

  const handleExcludeUserFavorite = async (id) => {
    try {
      const newFavs = favorites.filter((user) => user.id !== id);
      setFavorites(newFavs);

      await AsyncStorage.removeItem("@gitusers:favorites");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Container>
      <Header />

      <S.MainContent>
        <S.Title>Meus Favoritos</S.Title>

        {favorites !== [] && isFavorited ? (
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
          />
        ) : (
          <Text>LISTA VAZIA</Text>
        )}
      </S.MainContent>
    </S.Container>
  );
};

export default FavoritedUsers;
