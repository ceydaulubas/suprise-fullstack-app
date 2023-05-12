const mongoose = require('mongoose');
const { Surprise } = require('../models/surprise');
const { User } = require('../models/User');

// Configuration of OpenAIApi
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports.generateAnswer = async (req, res) => {
    const { senderemail, name, email, theme, relative, sender } = req.body;
    console.log("request", req.body)

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: ` Could you create a special message for ${theme} for ${name}. This person is my ${relative}. Add my name to the end of the sentence like ${sender} ` }],
        });
        console.log(response.data.choices[0].message.content);
        // res.status(200).json({ message: response.data.choices[0].message.content })

        const user = await User.findOne({ email: senderemail }).exec();


        // Create a new surprise
        const newSurprise = new Surprise({
            name: name,
            email: email,
            theme: theme,
            relative: relative,
            sender: sender,
            user: user

        });

        await newSurprise.save();

        // Add the surprise to the user's list of surprises
        user.surprises.push(newSurprise._id);
        await user.save();


        res.status(200).json({ message: response.data.choices[0].message.content, content: response.data.choices[0].message.content, surprise: newSurprise });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
        // responsData(500, false, 'Something went wrong.');
    }
};