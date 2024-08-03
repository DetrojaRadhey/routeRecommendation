const { Groq } = require("groq-sdk");
const { main, getGroqChatCompletion } = require("../utils/helper");

module.exports.getSuggestion = async (req, res) => {
    try {
        let respose = await main(req.body.query);
        respose = parseInt(respose);
        res.status(201).send({ url: respose });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error." });
    }
};
