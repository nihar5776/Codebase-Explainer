require("dotenv").config();

const { GoogleGenAI } =  require("@google/genai");

const ai = new GoogleGenAI({apiKey: process.env.Geminiai_Key});

async function main(code) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Give me suggestions to improve this code:${code}`});
    console.log(response.text);
   
    return response.text;
}

module.exports = main;