import React from "react";
import Game from "./pages/Game";
import { CoinProvider } from "./context/CoinContext";

function App() {
  const telegramId = "5636991859"; 

  return (
    <CoinProvider>
      <Game telegramId={telegramId} />
    </CoinProvider>
  );
}

export default App;
