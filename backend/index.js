require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const AIsuggestion = require("./routes/suggestion");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     res.send("Hello world!");
// });

app.use("/getsuggestion", AIsuggestion);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});