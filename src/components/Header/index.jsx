import React from 'react';
import * as S from './styles';
import { FontAwesome } from '@expo/vector-icons';

function Header() {
  return (
    <S.Container>
      <FontAwesome  name="github" size={140} color="#898383"/>
    </S.Container>
  );
};

export default Header;
