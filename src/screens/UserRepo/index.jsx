import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import api from "../../service/api";

import * as S from "./styles";

import { useFavorited } from "../../contexts/FavoritesContext";
import Header from "../../components/Header";
import CardGitRepo from "../../components/CardGitRepo";

const UserRepo = () => {
  const { isFavorited, setIsFavorited } = useFavorited(false);
  const [repoList, setRepoList] = useState([]);
  const [username, setUserName] = useState("");

  const navigation = useNavigation();

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

  const handleNavigateToFavorites = () => {
    setIsFavorited((oldState) => !oldState);

    if (!isFavorited) {
      return navigation.navigate("Favoritos");
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
            onPress={handleNavigateToFavorites}
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
