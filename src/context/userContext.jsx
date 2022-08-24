import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({ login: null, avatar_url: null });

  const userContextValue = {
    userState,
    setUserState,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
