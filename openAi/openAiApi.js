const { authHeaders } = require("../configs/openai");
const axios = require('axios')

const getChatCompletionData = async (messages, model) => {
    try {
        console.log("before open ai api is called--",messages)

        const { data: completion } = await axios.post("https://api.openai.com/v1/chat/completions",
            {
                model,
                temperature: 0.6,
                messages,
            },
            {
                headers: authHeaders()
            });
        console.log("After completion of api the completion data is----",completion.choices);

        return { choices: completion.choices, error: false }

    } catch (error) {
        console.log("Error in chat completion api function----",error);
        return { error }
    }
}


module.exports = { getChatCompletionData }