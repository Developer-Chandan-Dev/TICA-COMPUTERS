import { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const storedUser = localStorage.getItem("new-user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("Failed to parse stored user:", e);
      return null;
    }
  });

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("new-user", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("new-user");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
