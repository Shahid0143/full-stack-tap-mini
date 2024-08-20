// src/services/botService.js
const TelegramBot = require("node-telegram-bot-api");
const User = require("../models/User");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

console.log("Bot service started"); // Debugging line

bot.onText(/\/start/, async (msg) => {
  console.log("Received /start command"); // Debugging line
  const chatId = msg.chat.id;
  const telegramId = msg.from.id;

  try {
    let user = await User.findOne({ telegramId });
    if (!user) {
      user = new User({ telegramId });
      await user.save();
    }
    bot.sendMessage(chatId, "Welcome to TapMe! Start tapping to earn coins.");
  } catch (error) {
    console.error("Error handling /start command:", error);
    bot.sendMessage(chatId, "An error occurred. Please try again later.");
  }
});

module.exports = bot;
