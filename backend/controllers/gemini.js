const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports.getSuggestion = async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(
            process.env.GEMINI_KEY
        );

        async function run() {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings: [ { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" } ] });

            const prompt = `I have created one website in which user sent his query
                and your task is you have to simply return the url of my website which is provided here:
                1) / : this is for the home route or landing page of the website.
                2) /login : this is the login page of our website.
                3) /signup : this is the signup page of our website.
                4) /info : this is the contact us & about us page of our website.
                5) /services : this is the page on which all bussiness product or main content appears.
                6) /career : this is the page on which you can found jobs, research & internship opportunity.
                7) /profile : this is the page on which you can show and edit your personal details on website.
                you have to just return a single url among mentioned above which description is match with user's query: ${req.body.query}
                Output formate: /xyz. No need to write extra line only return one of this link & you must have to return one link.`;
            
            const result = await model.generateContent(prompt);
            const response = result.response;
            let text = response.text();
            text = text.slice(0,-2);
            res.status(201).send({ url: text });
        }

        run();
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error." });
    }
};
