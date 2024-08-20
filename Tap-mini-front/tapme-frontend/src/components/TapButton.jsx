import React, { useState, useEffect } from "react";
import { useCoins } from "../context/CoinContext";
import { api } from "../services/api";
import "../styles/tapButton.css";

const TapButton = ({ telegramId }) => {
  const { coins, addCoins, showPopup, setShowPopup } = useCoins();
  const [loadingWidth, setLoadingWidth] = useState(0);
  const [tapCooldown, setTapCooldown] = useState(false);
   console.log(coins)
   console.log(addCoins)
  const handleTap = async () => {
    if (tapCooldown) return;

    setTapCooldown(true);
    addCoins(1);
    await api.tap(telegramId);
    console.log(telegramId)
    setTimeout(() => setTapCooldown(false), 500);
  };

  useEffect(() => {
    
    // Calculating percentage as coins / 5000 * 110
    setLoadingWidth((coins / 5000) * 110 + "%");
  }, [coins]);

  return (
    <div className="tap-container">
      <button className="tap-button" onClick={handleTap} disabled={tapCooldown}>
        Tap Me!
      </button>
      <div className="coins-display-wrapper">
        <div className="loading-bar" style={{ width: loadingWidth }}></div>
        <p className="coins-display">You have {coins} coins</p>
      </div>
      {showPopup && <CongratulationsPopup />}
    </div>
  );
};

const CongratulationsPopup = () => {
  const { setShowPopup } = useCoins();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, [setShowPopup]);

  return (
    <div className="popup">
      <h2>Congratulations!</h2>
      <p>🎉 You have unlocked all the coins! 🎉</p>
    </div>
  );
};

export default TapButton;
