import React, { useState, createContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext(null);

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [name,setname] = useState("")

  return (
    <AuthContext.Provider value={{name,setname }}>
      {children}
    </AuthContext.Provider>
  );
};