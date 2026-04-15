const express = require("express");
const router = express.Router();
const ContactMessage = require("../model/ContactMessage.model"); // adjust path if needed

// POST /ContactMessage/contact
router.post('/contactRoutes', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();

    res.status(200).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Server error, try again later." });
  }
});

module.exports = router;
