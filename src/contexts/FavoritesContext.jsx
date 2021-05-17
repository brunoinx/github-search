import React, { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [userListFavorited, setUserListFavorited] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{
        isFavorited,
        setIsFavorited,
        userListFavorited,
        setUserListFavorited,
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
  } = context;

  if (!context) throw new Error("Context is not missing");

  return {
    isFavorited,
    setIsFavorited,
    userListFavorited,
    setUserListFavorited,
  };
}
