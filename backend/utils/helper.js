// index.js
const { Groq } = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_KEY });

async function main(query) {
  const chatCompletion = await getGroqChatCompletion(query);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion.choices[0]?.message?.content || "/";
}

async function getGroqChatCompletion(query) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `
                only output a single link and nothing else and if not possible then only return '/'
                I have created one website in which user sent his query
                and your task is you have to simply return the url of my website which is provided here any other response is strictly prohibited:
                1) / : this is for the home route or landing page of the website.
                2) /login : this is the login page of our website.
                3) /signup : this is the signup page of our website.
                4) /info : this is the contact us & about us page of our website.
                5) /services : this is the page on which all bussiness product or main content appears.
                6) /career : this is the page on which you can found jobs, research & internship opportunity.
                7) /profile : this is the page on which you can show and edit your personal details on website.
                you have to just return a single url among mentioned above which description is match with user's query: ${query}
                Output formate: /xyz. No need to write extra line only return one of this link & you must have to return one link.
                You have to return routes only on the provided data don't return any other route or response(Note this seriously).`,
      },
    ],
    model: "llama3-8b-8192",
  });
}

module.exports = { main, getGroqChatCompletion };