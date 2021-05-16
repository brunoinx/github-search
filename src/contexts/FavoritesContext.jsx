import React, { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <FavoritesContext.Provider value={{
      isFavorited, setIsFavorited
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorited() {
  const context = useContext(FavoritesContext);
  const { isFavorited, setIsFavorited } = context;

  if (!context) throw new Error('Context is not missing');

  return { isFavorited, setIsFavorited };
}