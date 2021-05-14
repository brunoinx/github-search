import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';

function CardUserGithub({ avatar, name, icon }) {
  const navigation = useNavigation();

  const handleNavigateToRepo = () => {
    navigation.navigate("UserRepo");
  };
  
  return (
    <S.Container activeOpacity={0.7} onPress={handleNavigateToRepo}>
      <S.WrapperUser>
        <S.Avatar source={{ uri: avatar }} />

        <S.UserName>{name}</S.UserName>
      </S.WrapperUser>

      <Entypo name={icon} size={32} color="#898383" />
    </S.Container>
  );
};

export default CardUserGithub;
