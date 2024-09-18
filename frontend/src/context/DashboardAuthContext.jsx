import { useState, createContext, useContext, useEffect } from "react";

export const DashboardAuthContext = createContext();

// Custom hook to use the DashboardAuthContext
export const useDashboardAuthContext = () => {
  return useContext(DashboardAuthContext);
};

export const DashboardAuthContextProvider = ({ children }) => {
  const [authDashboardUser, setAuthDashboardUser] = useState(() => {
    const storedUser = localStorage.getItem("new-dashboard-user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("Failed to parse stored user:", e);
      return null;
    }
  });

  useEffect(() => {
    if (authDashboardUser) {
      localStorage.setItem(
        "new-dashboard-user",
        JSON.stringify(authDashboardUser)
      );
    } else {
      localStorage.removeItem("new-dashboard-user");
    }
  }, [authDashboardUser]);

  return (
    <DashboardAuthContext.Provider
      value={{ authDashboardUser, setAuthDashboardUser }}
    >
      {children}
    </DashboardAuthContext.Provider>
  );
};
