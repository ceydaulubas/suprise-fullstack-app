const mongoose = require('mongoose');

// Configuration of OpenAIApi
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports.generateAnswer = async (req, res) => {
    const { name, email, theme } = req.body;

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: ` Could you create a special card message for this ${theme} for ${name}` }],
        });
        console.log(response.data.choices[0].message.content);
        res.status(200).json({ message: response.data.choices[0].message.content })


        // const completion = await openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: ` Could you create a special card message for this ${thema} for ${name}`,
        // });
        // console.log(completion.data.choices[0].text);
        // res.status(200).json({ message: completion.data.choices[0].text })

    } catch (error) {
        console.error(error);
        responsData(500, false, 'Something went wrong.');
    }
};