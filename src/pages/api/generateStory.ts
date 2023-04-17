import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { storyPrompt } = req.body;
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            'You are an AI that generates stories with 24 pages, each containing text, drawing prompts, diffusion prompts, and a music search query. Please provide your response in JSON format. Here is an example of the correct JSON response: {"title": "The Adventurous Cow", "pages": [{"text": "Once upon a time...", "drawing_prompt": "Bessie looking at a world map", "diffusion_prompt": "A cow contemplating a wall with a world map, surrounded by farmland"}]}',
        },
        { role: "user", content: storyPrompt },
      ],
      temperature: 0.7,
      max_tokens: 6000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const storyText = response.data.choices[0].message.content;

    // Try to parse the storyText as JSON
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(storyText);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Failed to parse generated story as JSON." });
    }

    res.status(200).json(parsedResponse);
  } catch (error) {
    console.error(error); // Log the error details
    res.status(500).json({ error: error.message });
  }
};
