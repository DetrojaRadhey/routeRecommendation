const { Groq } = require("groq-sdk");
const { main, getGroqChatCompletion } = require("../utils/helper");

module.exports.groq = async (req, res) => {
    try {
        const respose = await main(req.body.query);

        res.status(201).send({ url: respose });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error." });
    }
};
