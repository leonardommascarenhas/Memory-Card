import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import GameBoard from "../../../components/GameBoard/GameBoard";

export const Body = () => {
  return (
    <main style={{display: 'flex', 'flex-wrap': 'wrap'}}>
      <GameBoard />
    </main>
  );
};
