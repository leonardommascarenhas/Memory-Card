import React from "react";
import { AuthContext, AuthProvider } from "../../providers/auth";

const Scoreboard = () => {
  const { score } = React.useContext(AuthContext);
  return (
    <>
      <h3>Score: {score}</h3>
    </>
  );
};

export default Scoreboard;
