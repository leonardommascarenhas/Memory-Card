import React, { useState } from "react";

export const AuthContext = React.createContext(0);

export const AuthProvider = (props) => {
  const [score, setScore] = useState(0);

  return (
    <AuthContext.Provider value={{ score, setScore }}>
      {props.children}
    </AuthContext.Provider>
  );
};
