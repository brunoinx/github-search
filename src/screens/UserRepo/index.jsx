import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import api from "../../service/api";

import * as S from "./styles";

import Header from "../../components/Header";
import CardGitRepo from "../../components/CardGitRepo";

const UserRepo = () => {
  const [repoList, setRepoList] = useState([]);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const handleSearchRepos = async () => {
      const { data } = await api.get(`users/brunoinx/repos`);

      setRepoList(data);
    };

    handleSearchRepos();
  }, []);

  return (
    <S.Container>
      <Header />

      <S.MainContent>
        <S.WrapperTitle>
          <S.TitleListRepo>Favoritar repositório?</S.TitleListRepo>

          <S.ButtonFavorited
            activeOpacity={0.7}
            onPress={() => setIsFavorited((oldState) => !oldState)}
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
