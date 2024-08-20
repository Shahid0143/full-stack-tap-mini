import React, { createContext, useState, useContext } from "react";

const CoinContext = createContext();

export const useCoins = () => useContext(CoinContext);

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const addCoins = (amount) => {
    setCoins((prevCoins) => {
      const newCoins = Math.min(prevCoins + amount, 5000);
      if (newCoins === 5000) {
        setShowPopup(true);
      }
      return newCoins;
    });
  };

  return (
    <CoinContext.Provider value={{ coins, addCoins, showPopup, setShowPopup }}>
      {children}
    </CoinContext.Provider>
  );
};
