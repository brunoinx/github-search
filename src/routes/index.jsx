import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FavoritesProvider from '../contexts/FavoritesContext';

import AppStack from './stack.routes';

const Routes = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </FavoritesProvider>
  );
}

export default Routes;