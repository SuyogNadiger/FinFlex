const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Route for Finnhub News
app.get("/api/news", async (req, res) => {
  const category = req.query.category || "general"; // Default to "general"
  const apiKey = process.env.FINNHUB_API_KEY;

  if (!apiKey) {
    return res.status(500).send("API key not configured.");
  }

  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=${category}&token=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).send("Unable to fetch news.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
