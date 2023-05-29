import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const login = (username) => {
    setUsername(username);
    localStorage.setItem("username", username); // Store username in local storage
  };

  const logout = () => {
    setUsername("");
    localStorage.removeItem("username"); // Remove username from local storage
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
