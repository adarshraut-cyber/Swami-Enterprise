const express = require("express");
const dotenv = require("dotenv");
// ✅ Load env variables first
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ✅ Now it's safe to connect to DB
const db = require("./configuration/db");
db();

//setup cors
const cors = require("cors");

app.use(cors());
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
 const signUp = require("./routes/signUp");
 app.use("/user", signUp);

app.get("/", (req, res) => {
  res.send("hello this is backend");
});

// // ✅ Import contact routes
 const contactRoutes = require("./routes/contactRoutes");
app.use("/ContactMessage", contactRoutes);

//Import admin Routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/Admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
