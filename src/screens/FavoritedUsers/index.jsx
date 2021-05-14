import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";

import Header from "../../components/Header";
import CardUserGithub from "../../components/CardUserGithub";

const FavoritedUsers = () => {
  const [userListFavorited, setUserListFavorited] = useState([]);
  
  useEffect(() => {
    const getDataStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@gitusers:user");
        jsonValue !== null ? JSON.parse(jsonValue) : null;
        setUserListFavorited(jsonValue);
      } catch (error) {
        console.log(error);
      }
    };

    getDataStorage();
  }, []);

  console.log(userListFavorited);

  return (
    <S.Container>
      <Header />

      <S.MainContent>
        <S.Title>Meus Favoritos</S.Title>

        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={userListFavorited}
          renderItem={({ item }) => (
            <CardUserGithub
              avatar={item.avatar_url}
              name={item.login}
              icon="trash"
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </S.MainContent>
    </S.Container>
  );
};

export default FavoritedUsers;
