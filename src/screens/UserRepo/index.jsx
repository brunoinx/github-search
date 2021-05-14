import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { FontAwesome } from '@expo/vector-icons';
import api from "../../service/api";

import * as S from "./styles";

import Header from "../../components/Header";
import CardGitRepo from "../../components/CardGitRepo";

const UserRepo = () => {
  const [repoList, setRepoList] = useState([]);
  const [isFavorited, setIsFavorited] = useState(false);

  const navigation = useNavigation();
  
  useEffect(() => {
    const handleSearchRepos = async () => {
      const username = await AsyncStorage.getItem("@gitusers:inputname");
      
      const { data } = await api.get(`users/${username}/repos`);
      
      setRepoList(data);
    };
    handleSearchRepos();
  }, []);

  const handleNavigateToFavorites = () => {
    setIsFavorited((oldState) => !oldState);

    navigation.navigate('Favoritos');
  }

  return (
    <S.Container>
      <Header />

      <S.MainContent>
        <S.WrapperTitle>
          <S.TitleListRepo>Favoritar repositório?</S.TitleListRepo>

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
        />
      </S.MainContent>
    </S.Container>
  );
};

export default UserRepo;
