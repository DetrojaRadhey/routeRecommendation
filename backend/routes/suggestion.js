const express = require("express");
const router = express.Router();
const groq = require("../controllers/groq");
const gemini = require("../controllers/gemini");

// to get AI suggestion
// router.post("/", groq.groq);
router.post("/", gemini.getSuggestion);

module.exports = router;