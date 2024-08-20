import React, { useEffect } from "react";
import TapButton from "../components/TapButton";
import { useCoins } from "../context/CoinContext";
import { api } from "../services/api";
import "../styles/tapButton.css";

const Game = ({ telegramId }) => {
  const { addCoins } = useCoins();
  console.log(addCoins)

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await api.getUser(telegramId);
      if (data) {
        addCoins(data.coins);
      }
    };

    fetchCoins();
  }, [telegramId, addCoins]);

  return (
    <div className="game-container">
      <h1>Welcome to TapMe!</h1>
      <TapButton telegramId={telegramId} />
    </div>
  );
};

export default Game;
