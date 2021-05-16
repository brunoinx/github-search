import React, { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import * as S from "./styles";

import { useFavorited } from "../../contexts/FavoritesContext";

import Header from "../../components/Header";
import CardUserGithub from "../../components/CardUserGithub";

const FavoritedUsers = () => {
  const [userListFavorited, setUserListFavorited] = useState([]);
  const { isFavorited, setIsFavorited } = useFavorited(false);

  const handleExcludeUserFavorite = async (id) => {
    try {
      const newFavs = userListFavorited.filter((user) => user.id !== id);
      setUserListFavorited(newFavs);

      await AsyncStorage.removeItem("@gitusers:user");
    } catch (err) {
      console.error(err);
    }
  };

  const loadFavorites = async () => {
    try {
      const userStoraged = await AsyncStorage.getItem("@gitusers:user");
      const { id, login, avatar_url } = userStoraged
        ? JSON.parse(userStoraged)
        : {};

      const usersFormated = { id, login, avatar_url, isFavorited };
      console.log(usersFormated);

      const alreadyFav = userListFavorited.includes(usersFormated);
      console.log(alreadyFav);

      if (!alreadyFav) {
        setUserListFavorited((oldState) => [...oldState, usersFormated]);
        return;
      }

      setUserListFavorited((oldState) => oldState);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <S.Container>
      <Header />

      <S.MainContent>
        <S.Title>Meus Favoritos</S.Title>

        {(isFavorited || userListFavorited === []) && (
          <FlatList
            data={userListFavorited}
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
        )}
      </S.MainContent>
    </S.Container>
  );
};

export default FavoritedUsers;
