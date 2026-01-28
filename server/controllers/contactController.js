// controllers/contactController.js
import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    await Contact.create({ name, email, message });
    res.json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error, please try again." });
  }
};
