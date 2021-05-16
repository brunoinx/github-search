import React from 'react';
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';

function CardUserGithub({ avatar, name, onPress, children }) {
  return (
    <S.Container activeOpacity={0.7} onPress={onPress}>
      <S.WrapperUser>
        <S.Avatar source={{ uri: avatar }} />

        <S.UserName>{name}</S.UserName>
      </S.WrapperUser>

      {children}
    </S.Container>
  );
};

export default CardUserGithub;
