const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const { telegramId } = req.params;
    const user = await User.findOne({ telegramId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.tap = async (req, res) => {
  try {
    const { telegramId, coins } = req.body;
    let user = await User.findOne({ telegramId });
    if (!user) {
      user = new User({ telegramId, coins });
    } else {
      user.coins += coins;
    }
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.startGame = async (req, res) => {
  try {
    const { telegramId } = req.body;
    let user = await User.findOne({ telegramId });
    if (!user) {
      user = new User({ telegramId });
      await user.save();
    }
    res.status(200).json({ message: "Game started", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
