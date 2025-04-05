import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLevel, setAuthLevel] = useState(0);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);
  const updateAuthLevel = () => setAuthLevel(0);

  updateAuthLevel();

  return (
    <AuthContext.Provider value={{ user, authLevel, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);