const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

try {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Bir hata oluştu' });
}
