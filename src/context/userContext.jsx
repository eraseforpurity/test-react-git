import React, { useContext, useState, createContext } from "react";

const UserContext = createContext();

function useUserContext() {
  return useContext(UserContext);
}

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({ login: null, avatar_url: null });

  const userContextValue = { userState, setUserState };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserContextProvider };
