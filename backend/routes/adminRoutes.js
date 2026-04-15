const express = require("express");
const router = express.Router();
const Admin = require("../model/Admin.model");

const allowedAdmins = ["adarsh", "rahul", "mayuresh", "tejas"];

router.post("/adminRoutes", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // Admin check (case-insensitive)
    if (
      !allowedAdmins.some((u) => u.toLowerCase() === username.toLowerCase())
    ) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // DB lookup (case-insensitive for username)
    const admin = await Admin.findOne({
      username: { $regex: new RegExp(`^${username}$`, "i") },
      password,
    });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      admin: { username: admin.username },
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Server error, try again later." });
  }
});

module.exports = router;
