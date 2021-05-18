import React, { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{
        isFavorited,
        setIsFavorited,
        favorites,
        setFavorites,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorited() {
  const context = useContext(FavoritesContext);
  const {
    isFavorited,
    setIsFavorited,
    favorites,
    setFavorites,
    isLoading,
    setIsLoading,
  } = context;

  if (!context) throw new Error("Context is not missing");

  return {
    isFavorited,
    setIsFavorited,
    favorites,
    setFavorites,
    isLoading,
    setIsLoading,
  };
}
