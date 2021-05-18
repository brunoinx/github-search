import React, { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userListFavorited, setUserListFavorited] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{
        isFavorited,
        setIsFavorited,
        userListFavorited,
        setUserListFavorited,
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
    userListFavorited,
    setUserListFavorited,
    isLoading,
    setIsLoading,
  } = context;

  if (!context) throw new Error("Context is not missing");

  return {
    isFavorited,
    setIsFavorited,
    userListFavorited,
    setUserListFavorited,
    isLoading,
    setIsLoading,
  };
}
