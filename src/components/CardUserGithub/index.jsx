import { Entypo } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';

function CardUserGithub({ avatar, username }) {
  return (
    <S.Container activeOpacity={0.7}>
      <S.WrapperUser>
        <S.Avatar source={{ uri: avatar }} />

        <S.UserName>{username}</S.UserName>
      </S.WrapperUser>

      <Entypo name="chevron-small-right" size={32} color="#898383" />
    </S.Container>
  );
};

export default CardUserGithub;
