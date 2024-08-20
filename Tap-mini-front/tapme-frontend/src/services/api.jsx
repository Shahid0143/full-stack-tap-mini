
export const api = {
  getUser: async (telegramId) => {
    const response = await fetch(
      `https://tap-mini-backend-1.onrender.com/api/user/${telegramId}`
    );
   
    return response.json();
  },
  tap: async (telegramId) => {
    const response = await fetch(
      `https://tap-mini-backend-1.onrender.com/api/tap`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ telegramId, coins: 1 }),
      }
    );
    return response.json();
  },
};